<?php

namespace Tests\Portfolio\Endpoints;

require __DIR__ . '/../../../../includes/autoload.php';

use PHPUnit\Framework\TestCase;
use Portfolio\Endpoints\ProjectsEndpoint;
use ReflectionException;
use ReflectionProperty;

class ProjectsEndpointTest extends TestCase {
    public function testOutput() {
        $endpoint = new ProjectsEndpoint();
        $output = $this->getPrivateProperty($endpoint, 'projects');

        $this->assertIsArray($output);

        foreach ($output as $element) {
            $this->assertIsArray($element);
            $this->assertArrayHasKey('logo', $element);
            $this->assertArrayHasKey('title', $element);
            $this->assertArrayHasKey('description', $element);
            $this->assertArrayHasKey('links', $element);
            $this->assertIsArray($element['links']);

            foreach ($element['links'] as $link) {
                $this->assertIsArray($link);
                $this->assertArrayHasKey('url', $link);
                $this->assertArrayHasKey('text', $link);
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
