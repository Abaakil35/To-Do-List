<?php
// Assuming you have some database connection setup
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "tasks";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["task"])) {
    $task = $_POST["task"];
    
    $sql = "INSERT INTO task VALUES ('$task')";
    if ($conn->query($sql) === TRUE) {
        echo "success";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "Invalid request!";
}

$conn->close();
?>
