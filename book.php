<?php
function OpenCon()
 {
 $dbhost = "localhost";
 $dbuser = "id14794045_merate";
 $dbpass = "9=h}]@qWi(xCUl{R";
 $db = "id14794045_meratedb";
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
 
 return $conn;
 }
 
function CloseCon($conn)
 {
 $conn -> close();
 }
   
