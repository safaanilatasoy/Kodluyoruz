<?php 
/**
 * 
 * Foreach yapısı diziler üzerinde döngü kurmamızı sağlayan bir döngüdür.
 * 
 * 
 * Foreach yalnızca diziler ve nesneler için kullanılabilir; farklı veri 
 * türünde veya ilişkilendirilmemiş bir değişken ile kullanmak istediğimizde 
 * hata verir
 */


 #iki Sözdizimi mevcuttur


    #1. Sözdizimi
    # foreach ($dizi as $değer){
        # Döngü
    #}


    #2. Sözdizimi
    # foreach ($dizi as $anahtar => $değer){
        # Döngü 
    #}

    $isimler = [
    'isim1' =>'Şahin',
    'isim2' =>'Fatma',
    'isim3' =>'Mustafa',
    'isim4' =>'Sabah'
];

foreach ($isimler as $deger){
    echo $deger.'<br>';
}

//Ekran çıktısı
// Şahin
// Fatma
// Mustafa
// Sabah

?>