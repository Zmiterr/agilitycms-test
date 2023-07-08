<?php
// Определение массива со ссылками на страницы
$pages = array(
    "https://example.com/page1",
    "https://example.com/page2",
    "https://example.com/page3",
    // Добавьте здесь ссылки на другие страницы
);

// Получение значения query параметра "whiteLeading"
$whiteLeading = $_GET['whiteLeading'] ?? null;

// Проверка значения на число и диапазон
if (is_numeric($whiteLeading) && $whiteLeading >= 0 && $whiteLeading < count($pages)) {
    // Получение ссылки на основе значения whiteLeading
    $redirectUrl = $pages[$whiteLeading];
} else {
    // Неверное значение whiteLeading, выбор случайной ссылки
    $randomIndex = array_rand($pages);
    $redirectUrl = $pages[$randomIndex];
}

// Редирект на полученную страницу
header("Location: $redirectUrl");
exit;
?>