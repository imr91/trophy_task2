<?php
    $con = new mysqli("127.0.0.1", "game_admin", "game202306", "trophy_task2");
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
                   $query = "SELECT * FROM game_scores ORDER BY score DESC LIMIT 10";
                    $result = $con -> query($query);
                    $num =1;
                    if ($result -> num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            echo "<tr><td class='rownum'>".$num."</td><td>".$row['player_name']."</td><td class='scorenum'>".$row['score']."</td><td>".$row['score_date']."</td></tr>";
                            $num++;
                        };
                    }
                ?>
            </tbody>
        </table>
    </div>
    <div style='position:relative;width:100%;height:100%;'>
        <div id='map' style='width:100%;height:100vh;will-change: transform;'>
    </div>
    </div>

</div>
</body>
</html>