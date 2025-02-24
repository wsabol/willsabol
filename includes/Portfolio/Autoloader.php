<?php

namespace Portfolio;

use Dotenv\Dotenv;

/**
 * Autoloader
 *
 * @package     HuntRecipes
 */
class Autoloader {
    const PREFIX = 'Portfolio';
    private static bool $initialized = false;

    /**
     * Register the Autoloader with SPL
     *
     * @return void
     */
    public static function register(): void {

        if (!defined('WS_LINKEDIN')) {
            /** @var string $WS_LINKEDIN Absolute Path to Project Includes */
            define('WS_LINKEDIN', "https://www.linkedin.com/in/willsabol/");
        }

        if (!defined('PORTFOLIO_INCLUDES')) {
            /** @var string $PORTFOLIO_INCLUDES Absolute Path to Project Includes */
            define('PORTFOLIO_INCLUDES', realpath(__DIR__ . "/.."));
        }

        if (!defined('PORTFOLIO_ROOT')) {
            /** @var string $PORTFOLIO_ROOT Absolute Path to Project Root */
            define('PORTFOLIO_ROOT', realpath(PORTFOLIO_INCLUDES . "/.."));
        }

        // Initialize application environment if not already done
        if (!self::$initialized) {

            // require composer
            require_once PORTFOLIO_ROOT . "/vendor/autoload.php";

            /* load environment vars */
            $dotenv = Dotenv::createImmutable(PORTFOLIO_ROOT);
            $dotenv->load();

            if (!defined('IS_PRODUCTION')) {
                /** @var bool $IS_PRODUCTION Whether on production server */
                define("IS_PRODUCTION", filter_var($_ENV['PRODUCTION'], FILTER_VALIDATE_BOOL));
            }

            error_reporting(E_ALL);
            ini_set("display_errors", IS_PRODUCTION ? 0 : 1);

            self::$initialized = true;
        }

        spl_autoload_register(array(new self, 'load'));
    }

    /**
     * Autoloader
     *
     * @param string $class
     * @return bool
     */
    public static function load(string $class): bool {

        if (class_exists($class, false)) {
            // Class is already loaded
            return false;
        }

        if (!str_starts_with($class, self::PREFIX)) {
            // not in this package
            return false;
        }

        // replace \ with OS defined directory separator
        $file = str_replace("\\", DIRECTORY_SEPARATOR, $class);
        // combine relative file path with includes directory to get the full include path
        $file = implode(DIRECTORY_SEPARATOR, [PORTFOLIO_INCLUDES, $file]) . ".php";
        // resolve absolute file path
        $file = realpath($file);

        if (!file_exists($file) || !is_readable($file)) {
            // Can't load
            return false;
        }

        require_once $file;
        return true;
    }
}
