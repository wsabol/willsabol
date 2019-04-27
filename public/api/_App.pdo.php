<?php

class Application {
	public $db = false;
	public $R	= array();

  function __construct() {
		$this->ConnectToDB();
		$this->R = $_REQUEST;
	}
	function ConnectToDB() {
		#setup the db
		$conf = parse_ini_file("/data/server-conf.ini", true);

    $UID = $conf['server']['user'];
		$PWD = $conf['server']['psw'];
		$SERVER = $conf['server']['host'];
		$DATABASE = "Database";
    $PORT = $conf['server']['port'];

    $this->db = new PDO("pgsql:host=$SERVER;port=$PORT;dbname=$DATABASE;user=$UID;password=$PWD");
    echo "PDO connection object created";
	}

}
