<?php 
// Fonksiyonların içerisinde tanımlanan değişkenler dışarıdan erişilemez yada dışarıda tanımlanan 
// değişkenler fonksiyonun içinden erişilemez.

/**
 * function isim() {
 *  $isim = 'Şahin';
*}
*deneme();
*echo $isim;


* bu kodu çalıştırdığımız da PHP isim adında bir değişken olmadığı için hata verir çünkü
* fonksiyonun içerisinde tanımlanan değişkenler dışarıdan erişilemez.
 */


 $isim = 'Şahin';
function isim() {
   global $isim;
   return $isim;
}
echo isim();
// Ekran çıktısı 
// Şahin
?>