<?php 
/**Bir fonksiyonun çalışması bittiğinde içerisinde tanımlı olan değişkenler yok edilir.
 * Fonksiyonun bir sonraki kullanımında tanımlı olan değişkenlerin eski değerleri kaybolmuş olur.
 * Eğer fonksitonun ikinci kez yada daha sonraki kullanımlarında içerisindeki değişkenlerin eski 
 * değerlerinin kaybolmasını istemiyorsak o değişkenleri statik(static) olarak tanımlamamız 
 * gerekir. Bu sayede değiş-kenlerin eski değerleri kaybolmaz.
 */

 function counter(){
    $count = 1;
    echo $count;
    $count++;
 }

 counter(); // 1
    counter(); // 1
    counter(); // 1


    # ---------> Statik olarak tanımlandığında ise 
function counter2(){
    static $count = 1;
    echo $count;
    $count++;
 }

 counter2(); //1
 counter2(); //2
    counter2(); //3

?>