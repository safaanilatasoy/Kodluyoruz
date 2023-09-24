
<?php 

function ucgen($kademe){
    $i = 0;
    while($i <= $kademe){
        for($j=0; $j <= $i; $j++){
            echo "*";
        }
        echo "<br>";
        $i++;
    }
}


ucgen(15);

?>