<?php
$App = "";
require_once('_php_common.php');
cors();

header('Content-Type: application/json');

if ( empty($App->R['action']) || empty($App->R['name']) || empty($App->R['email']) ) die();

// set response code - 200 OK
http_response_code(200);

// php mail
$results = $App->sendmail($App->R['email'], $_SERVER['HTTP_HOST'] . "/Contact - " . $App->R['name'], $App->R['message']);

// echo json_encode( $_POST );
echo json_encode($results);
