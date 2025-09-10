<?php
$servername = "localhost";
$username = "root";   // default XAMPP user
$password = "";       // default XAMPP password is empty
$dbname = "stylehub_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$data = json_decode(file_get_contents("php://input"), true);
$fullname = $data["fullname"];
$email = $data["email"];
$password = $data["password"];

$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO users (fullname, email, password_hash) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $fullname, $email, $hashedPassword);

if ($stmt->execute()) {
    echo json_encode(["message" => "User registered successfully"]);
} else {
    echo json_encode(["error" => "Email already exists"]);
}

$stmt->close();
$conn->close();
?>
