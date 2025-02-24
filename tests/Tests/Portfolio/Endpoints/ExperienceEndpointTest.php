<?php

namespace Tests\Portfolio\Endpoints;

require __DIR__ . '/../../../../includes/autoload.php';

use PHPUnit\Framework\TestCase;
use Portfolio\Endpoints\ExperienceEndpoint;
use ReflectionException;
use ReflectionProperty;

class ExperienceEndpointTest extends TestCase {
    public function testOutput() {
        $endpoint = new ExperienceEndpoint();
        $output = $this->getPrivateProperty($endpoint, 'experience');

        $this->assertIsArray($output);

        foreach ($output as $element) {
            $this->assertIsArray($element);
            $this->assertArrayHasKey('logo', $element);
            $this->assertArrayHasKey('employer_name', $element);
            $this->assertArrayHasKey('start_date', $element);
            $this->assertArrayHasKey('end_date', $element);
            $this->assertArrayHasKey('start_date', $element);
            $this->assertArrayHasKey('positions', $element);
            $this->assertIsArray($element['positions']);

            if (count($element['positions']) > 1) {
                foreach ($element['positions'] as $position) {
                    $this->assertArrayHasKey('title', $position);
                    $this->assertArrayHasKey('start_date', $position);
                    $this->assertArrayHasKey('end_date', $position);
                    $this->assertArrayHasKey('duties', $position);
                    $this->assertIsArray($position['duties']);
                }
            } else {
                foreach ($element['positions'] as $position) {
                    $this->assertArrayHasKey('title', $position);
                    $this->assertArrayHasKey('duties', $position);
                    $this->assertIsArray($position['duties']);
                }
            }
        }
    }

    /**
     * getPrivateProperty
     *
     * @param object $object
     * @param string $propertyName
     * @return    ReflectionProperty
     * @throws ReflectionException
     */
    private function getPrivateProperty(object $object, string $propertyName): mixed {
        $reflector = new \ReflectionClass($object);
        $property = $reflector->getProperty($propertyName);
        $property->setAccessible(true);
        return $property->getValue($object);
    }
}
