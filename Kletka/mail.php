<?php 
	
	$recepient = 'danilnikitenko93@gmail.com';
	$siteName = 'Клетка';

	$name = trim($_POST['name']);
	$phone = trim($_POST['phone']);
	$question = trim($_POST['question']);
	$message = 'Имя: $name \nНомер телефона: $phone \nБронь или вопрос: $question';

	$pagetittle = 'Заявка с сайта \'$siteName\'';
	mail($recepient, $pagetittle, $message, 'Content-type: text/plain; charset=\'utf-8\'\n From: $recepient');

 ?>
