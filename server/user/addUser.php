<?php

// Connect to database 
$db = new SQLite3('../../data/example_db.db');

// sqlite3 command to be executed
$stmt = $db->prepare("INSERT INTO user (
        user_name,
        user_pass
    )
    VALUES (
        :user,
        :pass
    )");


// Get parameters object from POST request sent by JS
$req = json_decode($_POST['req']);


// fill in parameters
$stmt->bindValue(':user', $req->user);
$stmt->bindValue(':pass', $req->pass);



// Execute the sqlite3 command
$result = $stmt->execute();

echo json_encode($result);

?>