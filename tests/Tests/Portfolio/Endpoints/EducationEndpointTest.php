<?php

namespace Tests\Portfolio\Endpoints;

require __DIR__ . '/../../../../includes/autoload.php';

use PHPUnit\Framework\TestCase;
use Portfolio\Endpoints\EducationEndpoint;
use ReflectionException;
use ReflectionProperty;

class EducationEndpointTest extends TestCase {
    public function testOutput() {
        $endpoint = new EducationEndpoint();
        $output = $this->getPrivateProperty($endpoint, 'education');

        $this->assertIsArray($output);

        foreach ($output as $element) {
            $this->assertIsArray($element);
            $this->assertArrayHasKey('logo', $element);
            $this->assertArrayHasKey('name', $element);
            $this->assertArrayHasKey('degree', $element);
            $this->assertArrayHasKey('field_of_study', $element);
            $this->assertArrayHasKey('start_date', $element);
            $this->assertArrayHasKey('end_date', $element);
            $this->assertArrayHasKey('description', $element);
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
