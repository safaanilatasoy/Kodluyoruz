<?php 

function selamla(){
    echo "Selam";
}

$donen_deger = selamla();
echo $donen_deger; // Selam


# Fonksiyona parametre gönderme

function topla($a, $b = 30){
    return $a + $b;
}
echo topla(10,20); // 30
echo topla(10); // 40   $b değeri varsayılan olarak 30 kabul edilir
?>