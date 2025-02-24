<?php

namespace Tests\Portfolio;

require __DIR__ . '/../../../includes/autoload.php';

use Portfolio\PageController;
use PHPUnit\Framework\TestCase;

class PageControllerTest extends TestCase {

    public function testGetPageContextBasic(): void {
        $pageController = new PageController();

        $context = $pageController->twig_context;
        $this->assertArrayHasKey('is_production', $context);
    }

    public function testGetPageContextWithAdditionalData(): void {
        $additional = [
            'custom_key' => 'custom_value',
            'another_key' => [1, 2, 3]
        ];

        $pageController = new PageController();
        $pageController->set_context('custom_key', $additional['custom_key']);
        $this->assertArrayHasKey('custom_key', $pageController->twig_context);
        $this->assertEquals($additional['custom_key'], $pageController->twig_context['custom_key']);

        $pageController->set_context('another_key', $additional['another_key']);
        $this->assertArrayHasKey('another_key', $pageController->twig_context);
        $this->assertEquals($additional['another_key'], $pageController->twig_context['another_key']);
    }
}
