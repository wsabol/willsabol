<?php

use Portfolio\CommonEndpoint;

require '../../includes/autoload.php';

class Experience_Endpoint extends CommonEndpoint {
    private array $experience;

    public function __construct() {
        $this->experience = [
            [
                'logo' => '/assets/images/experience/promedia.jpg',
                'employer_name' => 'ProMedia',
                'location' => 'Remote',
                'start_date' => '2016-01-21',
                'end_date' => null,
                'positions' => [
                    [
                        'title' => 'VP of Development',
                        'start_date' => '2016-01-21',
                        'end_date' => null,
                        'duties' => [
                            "Acting as Product Manager for ProMedia's suite of products",
                            "Balanced business requirements with customer needs and technical constraints to make strategic product decisions",
                            "Maintained Product backlog and ran product team meetings",
                            "Handled hiring decisions for the product team",
                            "Initiated the adoption of UX best practices and led an effort to redesign the site in a modern design system",
                            "Reengineered and built a call routing platform on a Twilio backbone to route caller to our clients",
                            "Built various products and tools including a Comscore advanced audience metrics dashboard",
                        ]
                    ],
                    [
                        'title' => 'Senior Software Engineer',
                        'duties' => [
                            "Spearheaded the adoption of agile-scrum style development methodologies",
                        ]
                    ]
                ]
            ]
        ];

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

            $data = [
                'experience' => $this->experience,
                'linkedin' => WS_LINKEDIN
            ];

            $message = "Got experience";
            $code = 200;

        } catch (Exception $e) {
            $message = $e->getMessage();
        }

        echo $this->response($data, $code, $message);
        return true;
    }
}

new Experience_Endpoint();
