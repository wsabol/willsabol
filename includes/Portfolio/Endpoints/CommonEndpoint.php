<?php

namespace Portfolio\Endpoints;

/**
 * Common endpoint class to be extended
 */
class CommonEndpoint {

    /**
     * A common response.
     *
     * @param object|array|null $data
     * @param int $code
     * @param string $message
     * @return string
     */
    public function response(object|array|null $data = [], int $code = 400, string $message = ''): string {
        http_response_code($code);

        $response = array(
            'message' => $message,
            'response_code' => $code,
            'data' => $data,
        );

        $json = json_encode($response);
        if ($json === false) {
            return $this->response([], 400, json_last_error_msg());
        }

        return $json;
    }

    public function method_not_allowed(): void {
        echo $this->response([], 405, "Method not allowed.");
    }
}
