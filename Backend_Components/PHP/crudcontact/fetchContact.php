<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

    $conn = mysqli_connect("localhost", "root", "");
    $database = mysqli_select_db($conn, "apicontact");

    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $query = "SELECT * FROM form WHERE form_id = $id";
    } else {
        $query = "SELECT * FROM form";
    }

    $result = mysqli_query($conn, $query);
    if (mysqli_num_rows($result) > 0) {
        $contacts = array();

        while ($row = mysqli_fetch_assoc($result)) {
            $contacts[] = $row;
        }
        echo json_encode($contacts);
    } else {
        $response[] = array("Message" => "No contacts found");
        echo json_encode($response);
    }
?>
