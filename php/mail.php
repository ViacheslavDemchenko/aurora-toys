<?php

$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$phone = htmlspecialchars($_POST["phone"]);
$city = htmlspecialchars($_POST["city"]);
$address = htmlspecialchars($_POST["address"]);
$index = htmlspecialchars($_POST["index"]);

$toy_name1 = htmlspecialchars($_POST["toy-name-1"]);
$toy_number1 = htmlspecialchars($_POST["toy-number-1"]);
$toy_color1 = htmlspecialchars($_POST["toy-color-1"]);
$toy_sum1 = htmlspecialchars($_POST["toy-price-1"]);

$toy_name2 = htmlspecialchars($_POST["toy-name-2"]);
$toy_number2 = htmlspecialchars($_POST["toy-number-2"]);
$toy_color2 = htmlspecialchars($_POST["toy-color-2"]);
$toy_sum2 = htmlspecialchars($_POST["toy-price-2"]);

$toy_name3 = htmlspecialchars($_POST["toy-name-3"]);
$toy_number3 = htmlspecialchars($_POST["toy-number-3"]);
$toy_color3 = htmlspecialchars($_POST["toy-color-3"]);
$toy_sum3 = htmlspecialchars($_POST["toy-price-3"]);

$toy_name4 = htmlspecialchars($_POST["toy-name-4"]);
$toy_number4 = htmlspecialchars($_POST["toy-number-4"]);
$toy_color4 = htmlspecialchars($_POST["toy-color-4"]);
$toy_sum4 = htmlspecialchars($_POST["toy-price-4"]);

$toy_name5 = htmlspecialchars($_POST["toy-name-5"]);
$toy_number5 = htmlspecialchars($_POST["toy-number-5"]);
$toy_color5 = htmlspecialchars($_POST["toy-color-5"]);
$toy_sum5 = htmlspecialchars($_POST["toy-price-5"]);

$toy_name6 = htmlspecialchars($_POST["toy-name-6"]);
$toy_number6 = htmlspecialchars($_POST["toy-number-6"]);
$toy_color6 = htmlspecialchars($_POST["toy-color-6"]);
$toy_sum6 = htmlspecialchars($_POST["toy-price-6"]);


$total_sum = htmlspecialchars($_POST["total"]);

$to = "aut.zakaz7@gmail.com";
$subject = "Новый заказ с сайта Aurora Toys";
$message =
    '
<strong>Имя:</strong> '.$name.'<br>
<strong>Email:</strong> '.$email.'<br>
<strong>Телефон:</strong> '.$phone.'<br>
<strong>Город:</strong> '.$city.'<br>
<strong>Адрес:</strong> '.$address.'<br>
<strong>Индекс:</strong> '.$index.'<br>

<strong>Название игрушки:</strong> '.$toy_name1.'<br>
<strong>Количество:</strong> '.$toy_number1.'<br>
<strong>Цвет:</strong> '.$toy_color1.'<br>
<strong>Сумма:</strong> '.$toy_sum1.'<br>

<strong>Название игрушки:</strong> '.$toy_name2.'<br>
<strong>Количество:</strong> '.$toy_number2.'<br>
<strong>Цвет:</strong> '.$toy_color2.'<br>
<strong>Сумма:</strong> '.$toy_sum2.'<br>

<strong>Название игрушки:</strong> '.$toy_name3.'<br>
<strong>Количество:</strong> '.$toy_number3.'<br>
<strong>Цвет:</strong> '.$toy_color3.'<br>
<strong>Сумма:</strong> '.$toy_sum3.'<br>

<strong>Название игрушки:</strong> '.$toy_name4.'<br>
<strong>Количество:</strong> '.$toy_number4.'<br>
<strong>Цвет:</strong> '.$toy_color4.'<br>
<strong>Сумма:</strong> '.$toy_sum4.'<br>

<strong>Название игрушки:</strong> '.$toy_name5.'<br>
<strong>Количество:</strong> '.$toy_number5.'<br>
<strong>Цвет:</strong> '.$toy_color5.'<br>
<strong>Сумма:</strong> '.$toy_sum5.'<br>

<strong>Название игрушки:</strong> '.$toy_name6.'<br>
<strong>Количество:</strong> '.$toy_number6.'<br>
<strong>Цвет:</strong> '.$toy_color6.'<br>
<strong>Сумма:</strong> '.$toy_sum6.'<br>

<strong>Итого:</strong> '.$total_sum.'
';


$headers =
           'From: Новая заявка с сайта <webmaster@server108.hosting.reg.ru>' . "\r\n" . 
           'Reply-To: email@yandex.ru' . "\r\n" .
           'Content-Type: text/html; charset=utf-8' . "\r\n" . 
           'Content-Transfer-Encoding: 8bit' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

?>
