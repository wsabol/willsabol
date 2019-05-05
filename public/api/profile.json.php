<?
$App = "";
require_once('_php_common.php');
cors();

header('Content-Type: application/json');

$sel_query = "
  SELECT
    fm.name,
    (
        SELECT citystate
        FROM saboldru_jeslyn.Home h
        ORDER BY id DESC
        LIMIT 1
      ) current_loc
  FROM saboldru_jeslyn.FamilyMember fm
  WHERE login_id = 2
  LIMIT 1
";
$result = $App->query($sel_query);
$data = array();
if ( !!$result ) {
	$data = $result->fetch_assoc();
  $result->free();
}

echo json_encode($data);
?>
