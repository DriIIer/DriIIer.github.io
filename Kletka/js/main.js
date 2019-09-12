//Отправка заявки
$(document).ready(function() {
	$('#form').submit(function(){
		if (document.form.name.value == '' || document.form.phone.value == '' || document.form.question.value == '') {
			valid = false;
			return valid;
		}
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			data: $(this).serialize(),
			contentType: "application/json; charset=utf-8",
			dataType: "json"
		}).done(function() {
			$('.js-overlay-thank-you')
			$('#form').trigger('reset');
		});
		return false;
	});
});

//Закрыть "спасибо"
$('.js-close-thank-you').click(function() {
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function(e){
	var popup = $('.popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0) {
		$('.js-overlay-thank-you').fadeOut();
	}
});

//Маска на инпт телефона
$(function($){
	$("[name='phone']").mask("+380(99) 999-9999");
});