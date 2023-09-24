<?php 
/**
 * Diziler PHP'de çok sık kullanılan veri tiplerindendir.
 * Arrayleri iki şekilde tanımlayabiliriz.
 * 
 * 1. Yöntem
 * $a = array('elma','armut','muz');
 * 
 * 2. Yöntem
 * $a = ['elma','armut','muz'];
 */


 // Dizileri print_r() fonksiyonu  veya var_dump(dizi) ile ekrana yazdırabiliriz.

 $a = ['elma','armut'];
    
    print_r($a);
    
   
// Örnekte de görüldüğü üzere dizilerin anahtarları belirtilmediğinde 0'dan başlayarak sırasıyla anahtar değerleri otomatik atanır.
// Dizilerin anahtar değerlerini belirlemek istersek aşağıdaki gibi yapabiliriz.
    
    $a = [0 => 'elma', 1 => 'armut'];
    
    print_r($a);

    $kisi = [
        'isim' => 'Şahin',
        'soyisim' => 'ERSEVER',
        'dogumtarihi' => '10.01.1993'
    ];

    print_r($kisi);
    
 
    
    echo "Merhaba benim adım " . $kisi['isim'] . " " . $kisi['soyisim'] . "  Doğum tarihim " . $kisi['dogumtarihi'];
    
    //İfadenin çıktısı
    // Merhaba benim adım Şahin ERSEVER  Doğum tarihim 10.01.1993
    $hayvanlar = array('kedi', 'köpek', 'tavşan');

    echo $hayvanlar[0]; // "kedi" Çıktısını verir.
    echo $hayvanlar[1]; // "köpek" Çıktısını verir.
    echo $hayvanlar[2]; // "tavşan" Çıktısını verir.
?>