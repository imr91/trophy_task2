<?php
    $name = $_POST['name'];
    $score = $_POST['score'];
    $session = $_POST['session'];
    $time = date("Y-m-d H:i:s");

    $con = new mysqli("127.0.0.1", "game_admin", "game202306", "trophy_task2");

    $query = "INSERT INTO game_scores (session_id, player_name, score, score_date) VALUES ('$session', '$name', '$score', '$time')";

    $result = $con -> query($query);

    $con -> close();
    echo json_encode($result);
?>