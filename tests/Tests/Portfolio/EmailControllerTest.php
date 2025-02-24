<?php

namespace Tests\Portfolio;

require __DIR__ . '/../../../includes/autoload.php';

use Exception;
use Portfolio\EmailController;
use PHPUnit\Framework\TestCase;

class EmailControllerTest extends TestCase {
    private EmailController $emailController;

    protected function setUp(): void {
        // Set required environment variables for testing
        $_ENV['MAIL_HOST'] = 'smtp.test.com';
        $_ENV['MAIL_PORT'] = '465';
        $_ENV['MAIL_USERNAME'] = 'test@test.com';
        $_ENV['MAIL_PASSWORD'] = 'password';

        $this->emailController = new EmailController();
    }

    public function testSetAndGetSubject(): void {
        $subject = 'Test Email Subject';
        $this->emailController->set_subject($subject);
        $this->assertEquals($subject, $this->emailController->get_subject());
    }

    public function testSetInvalidView(): void {
        $this->expectException(Exception::class);
        $this->emailController->set_view('/nonexistent-view.twig');
    }

    public function testSendWithoutSubject(): void {
        $this->expectException(Exception::class);
        $this->expectExceptionMessage('subject is not set');
        $this->emailController->send();
    }

    public function testSendWithoutBody(): void {
        $this->emailController->set_subject('Test Subject');
        $this->expectException(Exception::class);
        $this->expectExceptionMessage('message body is not set');
        $this->emailController->send();
    }
}
