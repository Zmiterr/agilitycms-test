<?php
// Получение значения query параметра id
$id = $_GET['id'];

// Формирование URL для запроса
$url = "https://tracker.1494895-cr92018.tw1.ru/static/${id}-build.min.js";

// Установка заголовков запроса
$headers = [
    'Cache-Control: max-age=0'
];
header('Content-Type: application/javascript');
header('Cache-Control: max-age=0');

// Инициализация cURL сеанса
$curl = curl_init();

// Установка опций для cURL сеанса
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

// Выполнение запроса
$response = curl_exec($curl);

// Проверка на наличие ошибок при выполнении запроса
if ($response === false) {
    $error = curl_error($curl);
    // Обработка ошибки, если требуется
    echo "Ошибка при выполнении запроса: " . $error;
} else {
    // Вывод результата запроса
    echo $response;
}

// Закрытие cURL сеанса
curl_close($curl);
?>