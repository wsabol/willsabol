<?php

use Portfolio\EmailController;
use Portfolio\CommonEndpoint;

require '../../includes/autoload.php';

class Contact_Endpoint extends CommonEndpoint {

    public function __construct() {
        // $this->restrict_access();

        $method = $_SERVER['REQUEST_METHOD'];

        switch ($method) {
            case 'POST':
                $this->send_message();
                break;

            default:
                $this->method_not_allowed();
        }
    }

    public function send_message() {
        $data = array();
        $code = 400;
        $message = '';

        try {

            $request = json_decode(file_get_contents('php://input'));

            if (!isset($request->name)) {
                throw new Exception("name is not set");
            }

            if (!isset($request->email)) {
                throw new Exception("email is not set");
            }

            if (!isset($request->message)) {
                throw new Exception("message is not set");
            }

            $mailer = new EmailController();

            $mailer->add_address($_ENV['EMAIL_CONTACT']);
            $mailer->add_reply_to($request->email);
            $mailer->set_subject("WillSabol.com Contact - $request->name (" . date('n/j/Y') . ")");

            // mail body setup
            $mailer->set_view("emails/contact.twig");
            $mailer->set_message_context([
                'subject' => $mailer->get_subject(),
                'pre_text' => 'Contact submission from WillSabol.com',
                'name' => $request->name,
                'email' => $request->email,
                'message' => $request->message
            ]);

            // send
            $mailer->send();

            $message = 'Message sent';
            $code = 200;

        } catch (Exception $e) {
            $message = $e->getMessage();
        }

        echo $this->response($data, $code, $message);
        return true;
    }
}

new Contact_Endpoint();
