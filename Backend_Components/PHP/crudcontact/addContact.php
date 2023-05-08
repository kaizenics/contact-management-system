<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

$conn = mysqli_connect("localhost", "root", "");
$database = mysqli_select_db($conn, "apicontact");

$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, true);

$name = $DecodedData['name'];
$contact = $DecodedData['contact'];
$email = $DecodedData['email'];
$address = $DecodedData['address'];

$query = "INSERT INTO form (contact_name, contact_number, contact_email, contact_address) 
VALUES ('$name', '$contact', '$email', '$address')";
if ($name != null && $contact != null && $email != null && $address != null) {
	if (mysqli_query($conn, $query)) {
		$response[] = array("Message" => "Contact Information Added!");
		echo json_encode($response);
	} else {
		$response[] = array("Message" => "Failed to Add Contact Information, Please try again!");
		echo json_encode($response);
	}
} else {
	$response[] = array("Message" => "No Data");
	echo json_encode($response);
}
?>