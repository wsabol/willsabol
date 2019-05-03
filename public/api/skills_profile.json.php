<?
$App = "";
require_once('_php_common.php');
cors();

header('Content-Type: application/json');

$sel_query = "
  Call spSkillsProfile();
";
$result = $App->query($sel_query);
$data = array();
if ( !!$result ) {
  while ( $row = $result->fetch_assoc() ) {
    $data[$row['skill']] = floatval($row['weight']);
  }
  $result->free();
}

echo json_encode($data);
?>
