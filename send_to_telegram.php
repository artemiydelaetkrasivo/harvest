<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo 'Method Not Allowed';
  exit;
}

$token = "8302933612:AAFvows2LPMl-PMLHtuq9fpv5gaAiXmPMlw";
$chat_id = "1688309804";

// Перевірка наявності тексту
if (!isset($_POST['text']) || empty(trim($_POST['text']))) {
  http_response_code(400);
  echo 'Missing text';
  exit;
}

$text = $_POST['text'];

// Надсилання запиту у Telegram
$api_url = "https://api.telegram.org/bot$token/sendMessage";
$post_fields = [
  'chat_id' => $chat_id,
  'text' => $text,
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $api_url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpcode == 200) {
  echo "ok";
} else {
  http_response_code(500);
  echo "Failed to send";
}
?>
