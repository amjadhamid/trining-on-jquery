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
    (function($) {

// اعمالي على الجي كويري
// اي تغيير من على الشجلر ة يجب ان تحدد بالضبط ما هو المجدد 

// الشيء الديناميكي هو الافضل

// اي شيء تعمله ضعه في فانكشن لكي تعيد استخدامه 

//  يمكن ان تضع كلاسين للتبديل اتنين سيليكتيد وظيفتين ورا بضع





// Avoid `console` errors in browsers that lack a console.


    'use strict';
    
   
     $(' li a ').click(function (e){
   window.console.log('#' + $(this).data('scroll'));
   e.preventDefault();
   
   $('html, body').animate({
   
   scrollTop : $('#' + $(this).data('scroll')).offset().top
   }, 1000 );
   
   });
   // حساب ال padding   ----  dynamic thing
   $('body').css('paddingTop', $('.nav').innerheight() + 220);
   
   
   // اظهار كبسة تصل الى الاعلى
var scrollToTop = $('.scrollToTop');

if ($(window).scrollTop() >= 1000){

	//  هذا السطرلزيادة الفعالية نضيف 
	if (scrollToTop.is(':hidden'))
	
	scrollToTop.fadeIn(400)


}else{
	scrollToTop.fadeOut(); 
	
}
// botton to up
$('.scrollToTop').click(function (e) { 
	e.preventDefault();
	$('html , body').animate({
		scrollToTop: 0}, 1000);


		// change collors 
		 $(selector).on(click, function () {
			$(selector).attr('data-default-color',$(this).data('color')); 
		 });
			 // ولكي تاخذ اي شيء في الصفحة ثيم اللون
			//  نضع تنسيق الcss لكل لون وهو :
		// [data-default-color="blue"].skin-background{
		// 	background-color : blue ;
		// 	color : red;
		// }


// Thumbnails gallary
$(selector).on(click, function () {
	$(selector).addClass(className).siblings().removeClass(className)
// this class to make deferent bettween imgs
$(selector).hide.attr('src',$(this).attr('src').feadin(500));
// hide and feadin to make a smoth moveing

// لكي تضع كبسة تنقل للصورة التالية
// بكل سهولة عندمة تنقر عليها اطلب منه ان ينقر على التي بعدها
// او على الت قبلها

$(selector).on(click, function () {
	if ($(selector).is(';last-child')){
		$(selector).eq(0).click();
	}
	else{
	$(selector).next().click();
	}

	
$(selector).on(click, function () {
	if ($(selector).is(':first-child')){
		$(selector).last.click();
	}
	else{
	$(selector).prev().click();
	}
	
	// dynamic margin
	// عدد الصور
	var numberOfThumbnails = $(selector).children().length;
	// البعد المراد 
	marginBetweenTh ='0.5',
// الابعاد ما بينهم عددهم -1
	totalmarginBetweenTh = (numberOfThumbnails - 1) * marginBetweenTh ;
// عرض كل صورة
 var thmwidth = (100 - totalmarginBetweenTh ) / numberOfThumbnails 
 


 $(selector).css({
 'Width' : thmwidth + '%'
 'margin-right' : marginBetweenTh + '%'
});

// toggl descr
$(  i ).on(events, function () {
	// هنا نضع كلاسين لنغير بينهما ةنغير شكل الكبسة
	$(this).toggleclass('class1 class2 ');
	$(this).next('p').slideToggle();
});



// تغيير بين ال grid list
// 
$(this).addClass('active').siblings().removeClass('active';)

$( i ).on(click, function () {
//  تزيل الكلاسات كلها للاب ثم تضع الكلاس الموافق لل data
//  
	$('.الاب').removeClass('grid or list').addClass($(this).data('class'))
});






});
});

    });
    
    });