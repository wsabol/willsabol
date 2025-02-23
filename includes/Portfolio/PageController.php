<?php

namespace Portfolio;

use Exception;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
use Twig\Loader\FilesystemLoader;

class PageController {
    private Environment $twig;
    public array $twig_context;

    public function __construct() {
        // Set up Twig templating.
        $loader = new FilesystemLoader(PORTFOLIO_ROOT . '/views');
        $this->twig = new Environment(
            $loader,
            array(
                'debug' => false,
            )
        );

        $this->init_context();
    }

    private function init_context(): void {
        $context = array(
            // 'main_nav' => $this->get_main_nav(),
            // 'footer_nav' => $this->get_footer_nav(),
            'is_production' => IS_PRODUCTION
        );

        $this->twig_context = $context;
    }

    public function set_context(string $key, mixed $value): void {
        $this->twig_context[$key] = $value;
    }

    /**
     * Render twig template
     */
    public function render(string $path): void {
        try {
            echo $this->twig->render($path, $this->twig_context);
        } catch(Exception|RuntimeError|SyntaxError|LoaderError $e) {
            // TODO: Handle error
            var_dump($e->getMessage());
            echo 'Unable to load page.';
        }
    }
}
