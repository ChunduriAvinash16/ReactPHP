<?php
require_once "db_connection.php";

$postdata = file_get_contents("php://input");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $id = $_GET['id'];
    $fname = $request->first_name;
    $lname = $request->last_name;
    $email = $request->email;

    $sql = "Update students set first_name='$fname',last_name='$lname',email='$email' where sid='$id' LIMIT 1";
    if(mysqli_query($con, $sql)){
        http_response_code(202);
    }
    else{
        http_response_code(422);
    }
}