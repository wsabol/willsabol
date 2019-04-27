<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

require_once( "api/_php_common.php" );

$sel_query = "SELECT * FROM Client LIMIT 1;";
$result = $App->query($sel_query);
if ( !!$result ) {
	if( $row = $result->fetch_assoc() ) {
		?>Everything is ok: HostName [<?=gethostname()?>]<?
		exit;
	}
}

$App->close();
$App = "";

// print(gethostname());
// print_r($_SERVER);

?>
