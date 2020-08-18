<?php

require_once "db_connection.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
error_reporting(E_ERROR);
$students = [];
$sql = "SELECT * from students";

if($result=mysqli_query($con,$sql)){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $students[$cr]["sid"] = $row["sid"];
        $students[$cr]["first_name"] = $row["first_name"];
        $students[$cr]["last_name"] = $row["last_name"];
        $students[$cr]["email"] = $row["email"];
        $cr++;
    }
    echo(json_encode($students));
}
else{
    http_response_code(404);
}
?>

