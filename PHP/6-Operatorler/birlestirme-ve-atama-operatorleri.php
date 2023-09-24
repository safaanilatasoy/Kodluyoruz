<?php 
# Birleştirme operatörü nokta (.) ile gösterilir. iki ifadenin arasında yer 
# alarak sağındaki ifade ile solundaki ifadeleri birleştirir.

# Örnek

$isim = 'Anil';
$soyisim = 'Atasoy';
$adSoyad = $isim . ' ' . $soyisim;
echo $adSoyad; // Anil Atasoy

# Örnek || #2

$html = '<div>';
$html .= '<h1>Merhaba</h1>';
$html .= '</div>';
echo $html; 
// <div><h1>Merhaba</h1></div>


# Atama operatörleri, bir değişkene değer atamak için kullanılır.
# Atama operatörü matematikteki (=) eşittir işaretine benzer.

?>