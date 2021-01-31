/*Global $, alert, console*/

$(function(){

    "use strict";

    //Trigger NiceScroll

    $("body").niceScroll();

    //Adjust Header Height

    $(".header").height($(window).height());


    //Adjust Hero To Center

    $(".header .hero").each(function(){
        $(this).css("paddingTop",($(window).height()-$(".header .hero").height()) /2)
    })

    //Smooth Scroll To Features

    $(".header .arrow i").click(function(){
        $("html,body").animate({
             scrollTop:$(".features").offset().top
        },1000);
    })

    //Show More Buttom

    $(".show-more").click(function(){
        $(".our-work .box .hidden").fadeIn(1000,function(){
            $(".show-more").hide();
        });
    })

    //Trigger the BxSlider

    $(document).ready(function(){
        $('.slider').bxSlider({
            pager:false,
            keyboardEnabled:true
        });
    })

    //Assign Smooth Scroll To Buttons    
    
    $(".header .buttons .hire-us").click(function(){
        $("html,body").animate({
             scrollTop:$(".our-team").offset().top
        },1000);
    })
    
    $(".header .buttons .work-button").click(function(){
        $("html,body").animate({
             scrollTop:$(".our-work").offset().top
        },1000);
    })


});
