<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

$conn = mysqli_connect("localhost", "root", "", "apicontact");

$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, true);

if (!$DecodedData || !is_array($DecodedData) || empty($DecodedData['Username']) || empty($DecodedData['Password'])) {
    $response = array("Message" => "Error: Invalid or missing input data", "UserId" => null);
    echo json_encode([$response]);
    exit;
}

$Username = mysqli_real_escape_string($conn, $DecodedData['Username']);
$Password = mysqli_real_escape_string($conn, $DecodedData['Password']);

$query = "SELECT * FROM accounts WHERE username = '$Username' AND password = '$Password';";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    $response = array("Message" => "Welcome!", "UserId" => $row["account_id"]);
    echo json_encode([$response]);
} else {
    $response = array("Message" => "Incorrect Username and Password!", "UserId" => null);
    echo json_encode([$response]);
}
?>