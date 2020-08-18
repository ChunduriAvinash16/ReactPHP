<?php

require_once 'db_connection.php';

//print_r($_POST);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$postdata = file_get_contents("php://input");
echo ("$postdata");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $first_name= $request->first_name;
    $last_name= $request->last_name;
    $email= $request->email;

    $sql = "INSERT INTO students (first_name,last_name,email) VALUES ('$first_name','$last_name','$email')";

    if(mysqli_query($con,$sql)){
        http_response_code(201);
    }
    else{
        http_response_code(422);
    }
}
