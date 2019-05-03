<?
$App = "";
require_once('_php_common.php');
cors();

header('Content-Type: application/json');

$sel_query = "
  SELECT * from Project
  WHERE active_flag = 1
  ORDER BY pinned DESC
";
$result = $App->query($sel_query);
$data = array();
if ( !!$result ) {
  while ( $row = $result->fetch_assoc() ) {
    array_push($data, $row);
  }
  $result->free();
}

echo json_encode($data);
?>
