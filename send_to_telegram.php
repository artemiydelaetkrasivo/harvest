<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo 'Method Not Allowed';
  exit;
}

// Замените на свои токен и chat_id
$token = "8302933612:AAFvows2LPMl-PMLHtuq9fpv5gaAiXmPMlw";
$chat_id = "1688309804";

// Проверяем, что пришло поле text
if (!isset($_POST['text'])) {
  http_response_code(400);
  echo 'Missing text';
  exit;
}

$text = $_POST['text'];

// Отправляем в Telegram
$telegram_api = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" . urlencode($text);
$result = file_get_contents($telegram_api);

if ($result) {
  echo "ok";
} else {
  http_response_code(500);
  echo "Failed to send";
}
?>
