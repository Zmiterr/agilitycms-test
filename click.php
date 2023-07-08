<?php
// Получение всех переданных query параметров
$queryParameters = $_GET;

// Формирование URL для запроса
$url = 'https://e-binom.ru/click.php?' . http_build_query($queryParameters);

// Инициализация cURL сеанса
$curl = curl_init();

// Установка опций для cURL сеанса
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

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
