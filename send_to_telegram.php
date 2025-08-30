
<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo 'Method Not Allowed';
  exit;
}

$token = "8302933612:AAFvows2LPMl-PMLHtuq9fpv5gaAiXmPMlw";
$chat_id = "1688309804";
$text = $_POST['text'];

$result = file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" . urlencode($text));

echo "ok";
?>
