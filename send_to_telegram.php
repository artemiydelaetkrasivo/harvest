<?php
$token = "8302933612:AAFvows2LPMl-PMLHtuq9fpv5gaAiXmPMlw";
$chat_id = "1688309804";
$text = $_POST['text'];
file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" . urlencode($text));
echo "ok";
?>