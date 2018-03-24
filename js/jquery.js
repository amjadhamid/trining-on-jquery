$(document).ready(function(){



'use strict';
    
   
$('.navbar li a ').click(function (e){

e.preventDefault();
window.console.log('#' + $(this).data('scrol'));


$('html, body').animate({

scrollTop : $('#' + $(this).data('scrol')).offset().top
}, 1000 );

});
// حساب ال padding   ----  dynamic thing
$('body').css('paddingTop', $('.nav').innerheight() + 220);


// add active class  on navbar linl and remove from sivling
$('navbar  li ').click(function (){

	$(this).addClass('active');

});

});