<?php 
	$recepient = 'nikitenkodanil93@gmail.com';
	$siteName = 'Клетка';

	$name = trim($_POST['name']);
	$phone = trim($_POST['phone']);
	$question = trim($_POST['question']);
	$message = 'Имя: $name \nНомер телефона: $phone \nБронь или вопрос: $question';

	$pagetitle = 'Заявка с сайта \'$siteName\'';
	mail($recepient, $pagetitle, $message');
 ?>
