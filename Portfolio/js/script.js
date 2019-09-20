/* Диаграмма */
new Chartist.Line('.ct-chart', {
  labels: [1],
  series: [
    [],
    [/*HTML*/40, 63, 85, 95, 85, 63, 50,/*CSS*/ 62, 75, 85, 90, 80, 62, 40,/*Wordpress*/ 48, 56, 67, 75, 67, 58, 50, /*Jquery*/ 58, 65, 74, 80, 70, 60, 50],
  ]
}, {
  high: 100,
  low: 40,
  showArea: true,
  showLine: true,
  showPoint: false,
  fullWidth: true,
  axisX: {
    showLabel: false,
    showGrid: false
  }
});

//Плавный скроллинг 
$(document).ready(function() {
    $('.nav-About').click(function(){
       $('html, body').animate({scrollTop:$('#About').position().top - 0}, 2000);
    });
    $('.nav-portfolio').click(function(){
       $('html, body').animate({scrollTop:$('#portfolio').position().top - 0}, 2000);
    });
    $('.nav-footer').click(function(){
       $('html, body').animate({scrollTop:$('#footer').position().top - 0}, 2000);
    });
    $('.button-About').click(function(){
       $('html, body').animate({scrollTop:$('#About').position().top - 0}, 2000);
    });
    $('.button-footer').click(function(){
       $('html, body').animate({scrollTop:$('#footer').position().top - 0}, 2000);
    });
});
