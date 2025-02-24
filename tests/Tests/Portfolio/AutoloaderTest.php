<?php

namespace Tests\Portfolio;

require __DIR__ . '/../../../includes/autoload.php';

use Portfolio\Autoloader;
use PHPUnit\Framework\TestCase;

class AutoloaderTest extends TestCase {
    public function testLoadExistingClass() {
        // Test case 1: Test loading an existing class
        $this->assertFalse(Autoloader::load('Portfolio\Autoloader'));
    }

    public function testLoadClassInPrefix() {
        // Test case 2: Test loading a class within the defined prefix
        $this->assertTrue(Autoloader::load('Portfolio\Endpoints\CommonEndpoint'));
        // Assuming 'SomeClass.php' exists within the IVRNode package
    }

    public function testLoadClassNotInPrefix() {
        // Test case 3: Test loading a class not within the defined prefix
        $this->assertFalse(Autoloader::load('PHPUnit\Framework\TestCase'));
    }

    public function testLoadNonExistingClass() {
        // Test case 4: Test loading a non-existing class
        $this->assertFalse(Autoloader::load('Portfolio\NonExistingClass'));
    }
}
