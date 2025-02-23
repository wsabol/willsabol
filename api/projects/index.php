<?php

use Portfolio\CommonEndpoint;

require '../../includes/autoload.php';

class Projects_Endpoint extends CommonEndpoint {
    private array $projects;

    public function __construct() {
        $this->projects = [
            [
                'logo' => '/assets/images/projects/hunt-recipes.jpg',
                'title' => 'Social Cookbook',
                'description' => "My mother's family is full of foodies who love to cook. I took her family cookbook of over 500 recipes and created an web app to like and share these recipes online. There's an integration with OpenAI to generate recipes photos based on the ingredients and instructions",
                'links' => [
                    [
                        'text' => 'Live Site',
                        'url' => 'https://huntrecipes.willsabol.com'
                    ],
                    [
                        'text' => 'GitHub',
                        'url' => 'https://github.com/wsabol/huntrecipes'
                    ]
                ]
            ],
            [
                'logo' => '/assets/images/projects/jrs-pay.jpg',
                'title' => 'Financial Planning App',
                'description' => "Using my business and finance education I created a web app for my family to aggregate our finances and investments, generate balance sheets, P&Ls, plan for retirement, and more.",
                'links' => [
                    [
                        'text' => 'GitHub',
                        'url' => 'https://github.com/wsabol/jrspay'
                    ]
                ]
            ],
            [
                'logo' => '/assets/images/projects/music.png',
                'title' => 'Music Portfolio',
                'description' => "As an avid gigging musician and drum collector, I needed a site to showcase my skills and experience and coded the site myself.",
                'links' => [
                    [
                        'text' => 'Live Site',
                        'url' => 'https://music.willsabol.com'
                    ],
                    [
                        'text' => 'GitHub',
                        'url' => '#'
                    ]
                ]
            ],
            [
                'logo' => '/assets/images/background.jpg',
                'title' => 'This Portfolio',
                'description' => "I built this site from scratch using Bulma, ReactJS, and PHP8.",
                'links' => [
                    [
                        'text' => 'GitHub',
                        'url' => 'https://github.com/wsabol/willsabol'
                    ]
                ]
            ],
            [
                'logo' => '/assets/images/projects/subkick.jpeg',
                'title' => 'Low Freq Microphone',
                'description' => "These unique microphones woofers wired in reverse. They are used to augment low frequency capture and in recording studios. I made this one myself in a drum-like enclosure with a phase inverter and analog low pass filter.",
                'links' => [
                    [
                        'text' => 'Hear it in action',
                        'url' => 'https://soundcloud.com/wsabol39/subkick-operation'
                    ]
                ]
            ],
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
                'projects' => $this->projects,
                'github' => ''
            ];

            $message = "Got projects";
            $code = 200;

        } catch (Exception $e) {
            $message = $e->getMessage();
        }

        echo $this->response($data, $code, $message);
        return true;
    }
}

new Projects_Endpoint();
