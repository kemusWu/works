// JavaScript Document

// TOP按鈕滑動效果
$(function(){
	
	$("#gotop").click(function(){

		$("html,body").animate({scrollTop:0},900);

		return false;

	});

});

// 離開頂端頁才出現TOP按鈕
 $(".to_top").fadeOut(0);
    $(window).scroll(function(){
        if($(window).scrollTop() >= $(".header").offset().top){
            $('.navbar').css('background','rgba(0,0,0,0.8)');
            $(".to_top").fadeIn();
        }else{
            $(".to_top").fadeOut();
        }
    });


// navbar滑動效果
$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#navbarNavAltMarkup a").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
});

// 漢堡選單 點選後自動收起
 $(function() {

        $('.navbar a').on('click', function() {
            $('.navbar-toggler').click();
        });

    });