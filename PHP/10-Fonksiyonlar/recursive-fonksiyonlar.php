<?php 
/**
 * Recursive fonksiyonlar, kendilerini çağıran fonksiyonlardır.
 */

 $categories = [
    [
        'id' => 1,
        'parent' => 0,
        'name' => 'Back-end Teknolojileri'
    ],
    [
        'id' => 2,
        'parent' => 0,
        'name' => 'Front-End Teknolojileri'
    ],
    [
        'id' => 3,
        'parent' => 0,
        'name' => 'Mobil Uygulama'
    ],
    [
        'id' => 4,
        'parent' => 1,
        'name' => 'PHP'
    ],
    [
        'id' => 5,
        'parent' => 1,
        'name' => 'NodeJS'
    ],
    [
        'id' => 6,
        'parent' => 4,
        'name' => 'Laravel'
    ],
    [
        'id' => 7,
        'parent' => 4,
        'name' => 'Codeigniter'
    ],
    [
        'id' => 8,
        'parent' => 2,
        'name' => 'Javascript'
    ],
    [
        'id' => 9,
        'parent' => 8,
        'name' => 'VueJS'
    ],
    [
        'id' => 10,
        'parent' => 8,
        'name' => 'AngularJS'
    ]

];

function categoryList(array $categories, int $parent = 0) : string {
    $html = '<ul>';
    foreach ($categories as $category)
        if ($category['parent'] == $parent):
            $html .= '<li>' . $category['name'];
            $html .= categoryList($categories, $category['id']);
            $html .= '</li>';
        endif;
    $html .= '</ul>';
    return $html;
}

echo categoryList($categories);

?>