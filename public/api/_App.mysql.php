<?php

class Application {
	private static $db;
	public $R	= array();

	function ConnectToDB() {
		#setup the db
		$conf = parse_ini_file("/data/server-conf.ini", true);

    $UID = $conf['siteground']['user'];
		$PWD = $conf['siteground']['psw'];
		$SERVER = $conf['siteground']['host'];
		$DATABASE = "saboldru_developer";
    $PORT = $conf['siteground']['port'];

		self::$db = new mysqli($SERVER, $UID, $PWD, $DATABASE, $PORT);
		if (mysqli_connect_errno()) {
			die("Connect failed: ".mysqli_connect_error()."\n");
		} else {
			self::clean();
			return true;
		}
	}
	function __construct() {
		$this->ConnectToDB();
		$this->R = $_REQUEST;
	}
	public static function query( $query_str ) {
		self::clean();
		$mysqliResult = self::$db->query ( $query_str ) or die ( print "MySQL error: " . self::$db->errno . " : " .  self::$db->error . "\n" . $query_str);
		return $mysqliResult;
	}
	public static function execute( $query_str ) {
		self::clean();
		$success = self::$db->real_query( $query_str ) or die ( print "MySQL error: " . self::$db->errno . " : " .  self::$db->error . "\n" . $query_str);
		return $success;
	}
	public static function clean( $print_results = false ) {
		do {
    	$result = self::$db->use_result();
			if ( $print_results && $result !== false ) {
				$data = $result->fetch_assoc();
				print_r( $data );
				print(chr(10));
			}
		} while ( self::$db->more_results() && self::$db->next_result() );
	}
	public static function close() {
		if (isset(self::$db)) self::$db->close();
	}
	public static function prepstring($str) {
		return self::$db->real_escape_string($str);
	}
}
