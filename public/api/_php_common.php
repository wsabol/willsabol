<?php

date_default_timezone_set('America/Chicago');

$App = "";
require_once("_App.mysql.php");
$App = new Application();


function DisplayAlert( $title, $message, $detail, $color = '', $span = 12 ) {
    $type = "";
    if( $color == "red" ) {
        $type = "alert-error";
    }
    if( $color == "blue" ) {
        $type = "alert-info";
    }
    if( $color == "green" ) {
        $type = "alert-success";
    }
    if( $color == "yellow" ) {
        $type = "alert";
    }
    ?>
    <div class="alert <?=$type?> span5">
       <button class="close" data-dismiss="alert"></button>
       <strong><?=$title?></strong> <?=$message?><br>
       <?php
       echo( $detail) ;
       ?>
    </div>
    <?php
}
function generateToken() {
	/* 40 char random security token */
	return sha1(md5(mt_rand()));
}
function IN($value, $string_array){
	/*
	if ( IN( $value, "'enabled', 'active', 'normal', 'on'" ) ) { ... }
	*/

	$value = strtolower($value);
	$string_array = strtolower($string_array);
	$aryStrings = explode(",", $string_array);
  return in_array($value, $aryStrings);
}
function instr( $sstring_to_search, $string_to_find, $not_case ) {
  if( $not_case ) {
    $sstring_to_search = strtolower( $sstring_to_search ) ;
    $string_to_find = strtolower( $string_to_find ) ;
  }
  return strpos($sstring_to_search, $string_to_find) !== false;
}
function GetFileListInFolder( $folder_path, &$files ) {
	$files = "";
	$file_count = 0;

	$dh  = opendir( $folder_path );
	while (false !== ($filename = readdir($dh))) {
		if( $filename != ".." && $filename != "." ) {
			if( !is_dir( $folder_path . $filename ) ) {
				$aryFile = explode( ".", $filename );
				$extension = strtolower( $aryFile[count($aryFile)-1] );
				if(
					   $extension != "xls"
					&& $extension != "xlsx"
				) {
					$files[] = $filename;
				}
				$file_count++;
			}
		}
	}
	closedir( $dh ) ;
	if( $file_count > 0 ) {
		return true;
	}
	else{
		return false;
	}
}
function wl($sstring) {//Debug the string to the screen with trailing br
	echo($sstring . "<br/>" . "\n");
}
function wla($aArray) {//Debug the string to the screen with trailing br
	echo(str_replace(chr(10), chr(10) . "<br>", str_replace(chr(9), "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" . chr(9) , print_r($aArray, 1) )) . chr(13) . chr(10));
}

/**
 *  Given a file, i.e. /css/base.css, replaces it with a string containing the
 *  file's mtime, i.e. /css/base.1221534296.css.
 *
 *  @param $file  The file to be loaded.  Must be an absolute path (i.e.
 *                starting with slash).
 */
function auto_version($file)
{
  if(strpos($file, '/') !== 0 || !file_exists($_SERVER['DOCUMENT_ROOT'] . $file))
    return $file;

  $mtime = filemtime($_SERVER['DOCUMENT_ROOT'] . $file);
  return preg_replace('{\\.([^./]+)$}', ".$mtime.\$1", $file);
}

?>
