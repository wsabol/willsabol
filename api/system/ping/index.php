<?php

use Portfolio\CommonEndpoint;

require '../../../includes/autoload.php';

class System_Ping_Endpoint extends CommonEndpoint {

    public function __construct() {
        $method = $_SERVER['REQUEST_METHOD'];

        switch ($method) {
            case 'GET':
                $this->get_info();
                break;

            default:
                $this->method_not_allowed();
        }
    }

    public function get_info() {
        $data = array();
        $code = 400;
        $message = '';

        try {

            $data['php_version'] = phpversion();
            $data['is_production'] = IS_PRODUCTION;

            $message = "Everything is ok.";
            $code = 200;

        } catch (Exception $e) {
            $message = $e->getMessage();
        }

        echo $this->response($data, $code, $message);
        return true;
    }
}

new System_Ping_Endpoint();
