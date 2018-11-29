/*-----------------------------------------------------------------------------------

    Theme Name: Ashton - One Page Portfolio Template
    Description: One Page Portfolio Template
    Author: chitrakootweb
    Version: 1.0

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. scrollIt
        03. Add Class Reveal for Scroll to Top
        04. ScrollUp Active Code
        05. Sidemenu toggle
        06. navbar scrolling background
        07. progress bar
        08. sections background image from data background
        09. Testimonials owlCarousel
        10. magnificPopup
        11. countUp
        12. window When Loading
        13. FullScreenHeight Resize function
        14. Contact form
        15. CountDown for coming soon page

        
    ---------------------------------- */    

$(function() {

    "use strict";

    var wind = $(window);

    // Preloader
    $('#preloader').fadeOut('normall', function() {
        $(this).remove();
    });


    // scrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -70            // offste (in px) for fixed top navigation
    });


    // Add Class Reveal for Scroll to Top
    wind.on('scroll', function() {
        if (wind.width() > 600) {
            if (wind.scrollTop() > 600) {
                $('#back-to-top').addClass('reveal');
            } else {
                $('#back-to-top').removeClass('reveal');
            }
        }
    });

    // ScrollUp Active Code
    $('#back-to-top').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

   // Sidemenu toggle
    if ($("#sidebar_toggle").length) {
       $("body").addClass("sidebar-menu");
       $("#sidebar_toggle").on("click", function () {
          $(".sidebar-menu").toggleClass("active");
          $(".side-menu").addClass("side-menu-active"), $("#close_sidebar").fadeIn(700)
       }), $("#close_sidebar").on("click", function () {
          $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".sidebar-menu").removeClass("active")
       }), $("#btn_sidebar_colse").on("click", function () {
          $(".side-menu").removeClass("side-menu-active"), $("#close_sidebar").fadeOut(200), $(".sidebar-menu").removeClass("active")
       });
    }

    // navbar scrolling background
    wind.on("scroll",function () {
        
        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            navbloglogo = $(".blog-nav .logo> img"),
            darkbg = $(".bg-black .logo> img"),
            whitebg = $(".bg-white .logo> img"),
            lightbg = $(".bg-light-gray .logo> img"),
            scrollbg = $(".bg-black-scroll .logo> img"),
            logo = $(".navbar .logo> img");

        if(bodyScroll > 100){
            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/g_32.png');
            darkbg.attr('src', 'img/g_32.png');
            whitebg.attr('src', 'img/g_32.png');
            scrollbg.attr('src', 'img/g_32.png');
            lightbg.attr('src', 'img/g_32.png');

        }else{
            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/g_32.png');
            lightbg.attr('src', 'img/g_32.png');
            navbloglogo.attr('src', 'img/g_32.png');
        }
    });
    
     var windowsize = wind.width();
        if (windowsize <= 991) {
        $('.navbar-nav .nav-link').on("click", function(){
            $('.navbar-collapse.show').removeClass('show');
        });
      }
   
    // progress bar
    wind.on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal + "%"
                });
            }
        });
    });

    // sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function(indx){
        
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // === owl-carousel === //

    // Testimonials owlCarousel
    $('.testimonials .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        margin: 15,
        autoplay:true,
        smartSpeed:500
    });


    // magnificPopup
    $('.gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // countUp
    if ($(".numbers").length !== 0) {
        $('.numbers').appear(function() {
            $('.count').countTo({
                speed: 4000,
                refreshInterval: 60,
                formatter: function(value, options) {
                    return value.toFixed(options.decimals);
                }
            });
        });
    }

    // === window When Loading === //

    $(window).on("load",function (){

        var wind = $(window);
        
        // stellar
        wind.stellar();

        // isotope
        $('.gallery').isotope({
          // options
          itemSelector: '.items'
        });

        var $gallery = $('.gallery').isotope({
          // options
        });

        // filter items on button click
        $('.filtering').on( 'click', 'span', function() {
            var filterValue = $(this).attr('data-filter');
            $gallery.isotope({ filter: filterValue });
        });
        $('.filtering').on( 'click', 'span', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });

    });

    // FullScreenHeight Resize function
    $(window).resize(function(event) {
        setTimeout(function() {
            SetResizeContent();
        }, 500);
        event.preventDefault();
    });

    // FullScreenHeight function
    function fullScreenHeight() {
        var element = $(".full-screen");
        var $minheight = $(window).height();
        element.css('min-height', $minheight);
    }

    // FullScreenHeight with resize function
    function SetResizeContent() {
        fullScreenHeight();
    }

    SetResizeContent();


    function sendEmail( event ){
        var online = navigator.onLine;
        if( !online ){
            $( '.modal-body p' ).text('Your network is disconnected');
        }
        var emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/g;
        var email = $('#email').val();
        var emailResult = emailRegex.test( email );
        if( !emailResult ){
            $('.modal-body p').text('Please enter a valid email address.');
        }
        var nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
        var name = $('#name').val();
        var nameResult = nameRegex.test( name );
        if( !nameResult ){
            $('.modal-body p').text(`Please enter a valid name.`);
        }
        if( !nameResult && !emailResult ){
            $('.modal-body p').text(`Please enter a valid name and email address.`);
        }
        var message = $('#message').val().split('');
        while(message[message.length - 1] === ' '){
            message.splice(message.length - 1, 1);
        }
        message = message.join('');
        if( !message ){
            $('.modal-body p').text(`Please enter a message.`);
        }
        if( !message && !emailResult && !nameResult ){
            $('.modal-body p').text(`Please fill out the form.`);
        }
        if( nameResult && emailResult && message && online ){
            $('body').append(spinner);
            $.ajax({
                url: 'mail_handler.php',
                method: 'POST',
                data: {
                    email,
                    name,
                    message
                },
                success: () => {
                    $('#email').val('');
                    $('#name').val('');
                    $('#message').val('');
                    $('.modal-title').text('Your email has been sent')
                    $('.modal-body p').text(`Thank you for reaching out to me! I will respond back to ${email} as soon as I can.`)
                    $('.modal').modal();
                    spinner.remove();
                },
                error: (error) => {
                    $('.modal-title').text('Your email failed')
                    $('.modal-body p').text(`There has been an issue sending your email. I sincerely appologize for the error, and ask that you try again, or attempt to reach me directly at blackmongerry@gmail.com`)
                    $('.modal').modal();
                    spinner.remove();
                }
            });
        }
        else{
            $('.modal-title').text('A field was filled out incorrectly')
            $('.modal').modal();
        }
    }
    $('#submit').click( sendEmail );
    $(document).ready(function() {
       
        // Default owlCarousel
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            margin: 0,
            autoplay:true,
            smartSpeed:500
        });

       // Contact form
        // var form = $('.contact-form');
        // form.submit(function() {
        //     $.post(form.attr('action'), $('.contact-form').serialize(), function(data) {
        //         form.prev().text(data.message).fadeIn().delay(3000).fadeOut();
        //     }, 'json');
        //     return false;
        // });

        // CountDown for coming soon page
            if ($(".countdown").length !== 0) {
                $(".countdown").countdown({
                    date: "01 Jan 2021 00:01:00", //set your date and time. EX: 15 May 2014 12:00:00
                    format: "on"
                });
            }
        $('.dynamicPhoneCreation').text(' (909) 454-8451');
        $('.dynamicEmailCreation').text(' blackmongerry@gmail.com');
        spinner = $('<div>', {class: 'email-loader'});

        });

});
var spinner;