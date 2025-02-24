<?php

namespace Portfolio\Endpoints;

use Exception;

class ExperienceEndpoint extends CommonEndpoint {
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
                        'start_date' => '2022-11-01',
                        'end_date' => null,
                        'duties' => [
                            "Balanced business requirements with customer needs and technical constraints to make strategic product decisions",
                            "Maintained Product backlog, ran product team meetings, handled hiring decisions for the product team",
                            "Initiated the adoption of UX best practices and led an effort to redesign the site in a modern design system",
                            "Reengineered and built a call routing platform on a Twilio backbone to route caller to our clients",
                            "Built various products and tools including a Comscore advanced audience metrics dashboard",
                        ]
                    ],
                    [
                        'title' => 'Senior Software Engineer',
                        'start_date' => '2018-06-21',
                        'end_date' => '2022-10-31',
                        'duties' => [
                            "Designed and developed a reporting suite giving users the ability to create custom reports, schedule them to be sent to clients, etc",
                            "Designed and developed a built a fully featured media buy management suite for web that integrates Nielsen ratings third party data and reporting",
                            "Spearheaded the adoption of agile-scrum style development methodologies",
                        ],
                    ],
                ]
            ],
            [
                'logo' => '/assets/favicon_io/android-chrome-192x192.png',
                'employer_name' => 'Freelance Web Consulting',
                'is_part_time' => true,
                'start_date' => '2009-05-01',
                'end_date' => '2016-01-20',
                'positions' => [
                    [
                        'title' => 'Consultant',
                        'duties' => [
                            "Provided web consulting and IT support for clients using WordPress and other content management tools",
                            "Provided tutoring for school in programming, calculus, and physics",
                            "Developed a social media website for my college leadership organization",
                        ]
                    ],
                ]
            ],
            [
                'logo' => '/assets/images/experience/veros.jpg',
                'employer_name' => 'Veros Systems',
                'is_part_time' => true,
                'start_date' => '2008-06-01',
                'end_date' => '2010-10-01',
                'positions' => [
                    [
                        'title' => 'Software Developer',
                        'duties' => [
                            "Developed C/C++ software for fault detection algorithm in turbomachinery",
                            "Developed encrypted data transfer over a secure wireless connection into MySQL database, which fed into monitoring UI",
                        ]
                    ],
                ]
            ],
        ];

        $method = @$_SERVER['REQUEST_METHOD'];
        if (empty($method)) {
            return;
        }

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
