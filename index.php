<?php

use Portfolio\PageController;

include "includes/autoload.php";

class Portfolio_Index {
    public function __construct() {
        $page = new PageController();
        $page->render('/base.twig');
    }
}

new Portfolio_Index();
