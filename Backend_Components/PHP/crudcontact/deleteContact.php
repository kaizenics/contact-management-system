<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

$conn = mysqli_connect("localhost", "root", "");
$database = mysqli_select_db($conn, "apicontact");

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $query = "DELETE FROM form WHERE form_id = $id";

    if (mysqli_query($conn, $query)) {
        $response = array("Message" => "Contact Information Deleted!");
        echo json_encode($response);
    } else {
        $response = array("Message" => "Failed to Delete Contact Information, Please try again!");
        echo json_encode($response);
    }
} else {
    $response = array("Message" => "No Data");
    echo json_encode($response);
}
?>

