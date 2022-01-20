<?php
// Connect to database
$db = new SQLite3('../../data/example_db.db');

// select all users
$results = $db->query("SELECT * FROM user");

// store results in array
$myArr = array(); 
while ($row = $results->fetchArray()) {
  array_push($myArr, $row);
}

// return results array
echo json_encode($myArr);

?>