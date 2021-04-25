<?php
$fullname = $_POST['fullname'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$address = $_POST['address'];
$city = $_POST['city'];
$state = $_POST['state'];
$pincode = $_POST['pincode'];

//Database connection
$conn = new mysqli('localhost','root','form1')
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}
else{
    $stmt = $conn->prepare("insert into shipping address(fullname, email, mobile, address, city, state, pincode) value(?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssisssi",$fullname, $email, $mobile, $address, $city, $state, $pincode);
    $stmt->execute();
    $stmt->close();
    $conn->close();
}



?>