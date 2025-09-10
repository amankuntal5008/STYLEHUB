<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "stylehub_db";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$data = json_decode(file_get_contents("php://input"), true);
$email = $data["email"];
$password = $data["password"];

$sql = "SELECT * FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    if (password_verify($password, $row["password_hash"])) {
        echo json_encode([
            "message" => "Login successful",
            "user" => [
                "id" => $row["id"],
                "fullname" => $row["fullname"],
                "email" => $row["email"]
            ]
        ]);
    } else {
        echo json_encode(["error" => "Invalid password"]);
    }
} else {
    echo json_encode(["error" => "User not found"]);
}

$stmt->close();
$conn->close();
?>
