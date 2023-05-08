<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

$conn = mysqli_connect("localhost", "root", "");
$database = mysqli_select_db($conn, "apicontact");

$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, true);

if (!isset($DecodedData['username']) || !isset($DecodedData['password'])) {
    $mess = "Error: Missing required fields";
} else {
    $username = $DecodedData['username'];
    $password = $DecodedData['password'];

    $query = "INSERT INTO accounts (username, password) VALUES ('$username','$password')";
    $return = mysqli_query($conn, $query);

    if ($return) {
        $mess = "Successfully Registered!";
    } else {
        $mess = "Error";
    }
}

$response[] = array("Message" => $mess);
echo json_encode($response);
?>