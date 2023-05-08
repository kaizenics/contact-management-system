<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

$conn = mysqli_connect("localhost", "root", "");
$database = mysqli_select_db($conn, "apicontact");

$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, true);

$id = $_GET['id']; 
$name = $DecodedData['name'];
$contact = $DecodedData['contact'];
$email = $DecodedData['email'];
$address = $DecodedData['address'];

$query = "UPDATE form SET contact_name = '$name', contact_number = '$contact', contact_email = '$email', contact_address = '$address' WHERE form_id = $id";

if ($id != null && $name != null && $contact != null && $email != null && $address != null) {
    if (mysqli_query($conn, $query)) {
        $response[] = array("Message" => "Contact Information Updated!");
        echo json_encode($response);
    } else {
        $response[] = array("Message" => "Failed to Update Contact Information, Please try again!");
        echo json_encode($response);
    }
} else {
    $response[] = array("Message" => "No Data");
    echo json_encode($response);
}
?>
