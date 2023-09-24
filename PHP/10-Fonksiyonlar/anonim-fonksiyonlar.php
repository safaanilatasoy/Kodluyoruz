<?php 
// Anonim fonksiyonlar isimsiz fonksiyonlardır.

// function($parametre1, $parametre2){

// }


/** Anonim fonksiyonlar normal fonksiyonlara benzer, çünkü çağırıldığında
 * çalıştırılan kod bloğunu içerirler.
 * Ayrıca argümanları kabul edilebilir değerleri döndürürşer. Anonim fonksiyonları
 * değişkene atayarak kullanabiliriz.
 */

 $topla = function ($num1, $num2){
    return $num1 + $num2;
 };

 echo $topla(1,2); // 3


 /** ANONİM FONKSİYON İLE NORMAL FONKSİYON ARASINDA İKİ ÖNEMLİ FARK BULUNUR 
  * 1. Anonim fonksiyonlar isimsizdir.
  * 2. Anonim fonksiyonlar tanımlanırken noktalı virgül ile bitirilir.
  */

  $islem['topla'] = function ($num1, $num2) {
    echo $num1 + $num2.'<br>';
};
$islem['cikar'] = function ($num1, $num2) {
    echo $num1 - $num2.'<br>';
};
$islem['bol'] = function ($num1, $num2) {
    echo $num1 / $num2.'<br>';
};
$islem['carp'] = function ($num1, $num2) {
    echo $num1 * $num2.'<br>';
};

$islem['topla'](10,5);
$islem['cikar'](10,5);
$islem['bol'](10,5);
$islem['carp'](10,5);


function hesapla($n1, $n2, $islem){
    $islem['topla']($n1,$n2);
    $islem['cikar']($n1,$n2);
    $islem['bol']($n1,$n2);
    $islem['carp']($n1,$n2);
}

hesapla(10,5, $islem);

$number = [[1,2],[2,3],[3,4],[4,5]];

array_map(function ($e){
    global $islem;
    echo $e[0].'+'.$e[1].' =';
    $islem['topla']($e[0],$e[1]);
    echo '<br>';
}, $number);
?>