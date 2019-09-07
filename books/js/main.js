//слайдер

var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function(){
	var switchInterval = setInterval(nextSlide, slideInterval);

	$('#viewport').hover(function() {
		clearInterval(switchInterval);

	}, function() {
		switchInterval = setInterval(nextSlide, slideInterval);
	});

	$('#next-btn').click(function() {
		nextSlide();
	});

	$('#prev-btn').click(function() {
		prevSlide();
	});

});

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}

// Выпадающий блок

$(document).click(function() {
    $('.drop-menu').removeClass('active');
});
//Отмена закрытия по клику на выпадающее меню
$('.body-drop').click(function(event){
    event.stopPropagation();
});
//Клик по кнопке меню
$('.drop-menu').click(function(event){
    if($(this).hasClass('active')){
        $('.drop-menu').removeClass('active');
    }else{
        $('.drop-menu').removeClass('active');
        $(this).addClass('active');
    }
    event.stopPropagation();
});