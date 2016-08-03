<?php
// info@brospolymer.eu
$recepient = "epodgaetskiy@gmail.com";
$sitename = "http://brospolymer.eu/";

$name = trim($_POST["c_name"]);
$mobile = trim($_POST["c_phone"]);
$message = "Имя: $name \nТелефон: $mobile;

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

