<?php

use Portfolio\CommonEndpoint;

require '../../includes/autoload.php';

class Education_Endpoint extends CommonEndpoint {
    private array $education;

    public function __construct() {
        $this->education = [
            [
                'logo' => '/assets/images/education/free-code-camp.jpeg',
                'name' => 'freeCodeCamp',
                'degree' => 'Front End Web Development Certification',
                'field_of_study' => 'Software Engineering',
                'start_date' => '2015-08-01',
                'end_date' => '2016-02-01',
                'description' => 'My areas of focus were in dynamics and vibrations, control systems, and mathematical modeling. For our senior class project, we worked with NASA engineers to design a lunar lander. I lead a team that design the propulsion control system that would bring the vehicle from orbit to the surface safely. I received a minor in Mathematics and Business.',
            ],
            [
                'logo' => '/assets/images/education/texas-am-logo.jpeg',
                'name' => 'Texas A&M University',
                'degree' => 'Bachelor of Science',
                'field_of_study' => 'Mechanical Engineering',
                'location' => 'College Station, TX',
                'start_date' => '2006-08-01',
                'end_date' => '2010-12-10',
                'description' => '400 hours of coursework through an open source learning community. Studied Javascript, jQuery, AJAX, Bootstrap, building web pages, games, and apps. Graduates can provide services for nonprofits that need web development assistance.',
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
                'education' => $this->education
            ];
            $message = "Got education";
            $code = 200;

        } catch (Exception $e) {
            $message = $e->getMessage();
        }

        echo $this->response($data, $code, $message);
        return true;
    }
}

new Education_Endpoint();
