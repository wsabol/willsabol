<?php

class Application {
	private static $db;
	public $R	= array();
	public $admin = array();

	function ConnectToDB( $dbconf ) {
		#setup the db
		$UID = $dbconf['user'];
		$PWD = $dbconf['psw'];
		$SERVER = $dbconf['host'];
		$DATABASE = "saboldru_developer";
        $PORT = $dbconf['port'];
		if ( $PORT <= 0 ) $PORT = ini_get("mysqli.default_port");

		self::$db = new mysqli($SERVER, $UID, $PWD, $DATABASE, $PORT);
		if (mysqli_connect_errno()) {
			die("Connect failed: ".mysqli_connect_error()."\n");
		} else {
			self::clean();
			return true;
		}
	}
	function __construct() {
		$is_prod = (gethostname() == "us4.siteground.us");
        $confdir = $is_prod ? "/home/customer/server-conf.ini" : "/usr/local/data/server-conf.ini";

        $conf = parse_ini_file($confdir, true);
		$this->admin = $conf['admin'];

        $this->ConnectToDB($conf['siteground']);

		$this->R = json_decode(file_get_contents('php://input'), true);
	}
	public function sendmail( $subject, $msg ) {
		// Headers
		$headers = "MIME-Version: 1.0\r\n";
		$headers.= "Content-type: text/html; charset=UTF-8\r\n";
		$headers.= "From: <contactform@willsabol.com>";
		$sent = mail($this->admin['email'], $subject, $msg, $headers);
		return array(
			'sent' => !!$sent
		);
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
