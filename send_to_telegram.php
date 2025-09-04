
<?php
// Укажите токен вашего бота и ID чата
$token = "8302933612:AAFvows2LPMl-PMLHtuq9fpv5gaAiXmPMlw";
$chat_id = "1688309804";

// Получаем данные из формы
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// Формируем текст сообщения
$text = "Новая заявка с сайта:\n"
      . "Имя: $name\n"
      . "Email: $email\n"
      . "Сообщение: $message";

// URL для запроса к Telegram Bot API
$url = "https://api.telegram.org/bot{$token}/sendMessage";

// Параметры запроса
$params = [
  'chat_id' => $chat_id,
  'text' => $text
];

// Отправка запроса через cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

// Можно добавить редирект или сообщение об успехе
header('Location: thankyou.html');
exit;
?>