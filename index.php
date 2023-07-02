<?php
    $con = new mysqli("127.0.0.1", "game_admin", "game202306", "trophy_task2");
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tomato Run</title>

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
          integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
          crossorigin=""/>

    <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
            integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
            crossorigin=""></script>
    <link rel='stylesheet' href='index.css'/>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
    <script src='index.js' defer></script>

</head>
<body>
    <div class='container'>
    <div class='score' >
        <div id='description'>
            <p>Tomato Run</p>
            <span>Tomato would like to meet its family. Navigate with arrow keys to help Tomato and use spacebar to go even faster!</span>
            <p>Distance to family:</p>
            <div id='tofinish'></div>
        </div>    
    
        <table id='scoretable'>
            <caption>Score Board</caption>
            <thead>
                <tr>
                    <td>No.</td>
                    <td>Name</td>
                    <td>Score</td>
                    <td>Date</td>
                </tr>
            </thead>
            <tbody>
                <?php
                   $query = "SELECT * FROM game_scores ORDER BY score ASC LIMIT 10";
                    $result = $con -> query($query);
                    $num =1;
                    if ($result -> num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            echo "<tr><td class='rownum'>".$num."</td><td>".$row['player_name']."</td><td class='scorenum'>".$row['score']."</td><td class='scoredate'>".$row['score_date']."</td></tr>";
                            $num++;
                        };
                    }
                    mysqli_free_result($result);
                ?>
            </tbody>
        </table>
        <div class='button'>
            <input type='button' value='Restart' id='restart_button' />
        </div>
    </div>
    <div style='position:relative;width:100%;height:100%;'>
        <div id='map' style='width:100%;height:100vh;will-change: transform;'>
    </div>
    </div>

</div>
</body>
</html>

<?php
    $query = "SELECT * FROM game_config ORDER BY config_id DESC LIMIT 1";
    $result = $con -> query($query);
    if($result -> num_rows > 0){
        $config_row = $result->fetch_assoc();
        $startLat = $config_row['startLat'];
        $startLon = $config_row['startLon'];
        $finishLat = $config_row['finishLat'];
        $finishLon = $config_row['finishLon'];
        $speed = $config_row['speed'];
        $turbo = $config_row['speed_turbo'];
    }
    
    mysqli_free_result($result);
    $con -> close();
    $php_session = session_id();
    session_destroy();
?>
<script>
    var lat = '<?=$startLat?>';
    var lon = '<?=$startLon?>';
    var finishLat = '<?=$finishLat?>';
    var finishLon = '<?=$finishLon?>';
    var normalSpeedKmph = '<?=$speed?>';
    var turboSpeedKmph = '<?=$turbo?>';
    var sessionId = '<?=$php_session?>';
</script>