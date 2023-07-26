// (function ($) {
//     "use strict";

    var nameError=document.getElementById('name-error');
    var emailError=document.getElementById('email-error');
    var subError=document.getElementById('sub-error');
    var msgError=document.getElementById('msg-error');
    var submitError=document.getElementById('submit-error');

    function validateName(){
        var name=document.getElementById('contact-name').value;

        if(name.length==0){
            nameError.innerHTML='Name is required';
            return false;
        }
        if(!name.match(/^[A-Z][a-z]{2,}\s[A-Z][a-z]+$/)){
            nameError.innerHTML='Invalid format';
            return false;
        }
        nameError.innerHTML='<i class="fa-regular fa-circle-check" style="color: green;"></i>';
        return true;
    }

    function validateEmail(){
         var email=document.getElementById('contact-email').value;

         if(email.length==0){
             emailError.innerHTML='Email is required';
             return false;
         }
         if(!email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
             emailError.innerHTML='Invalid format';
             return false;
         }
         emailError.innerHTML='<i class="fa-regular fa-circle-check" style="color: green;"></i>';
         return true;
    }

    function validateSubject(){
        var subject=document.getElementById('contact-subject').value;

        if(subject.length==0){
            subError.innerHTML='Subject is required';
            return false;
        }
        if(!subject.match(/^[A-Z][a-zA-Z ]{10,30}$/)){
            subError.innerHTML='First letter must be capital. Word limit: 10-30';
        return false;
        }
        subError.innerHTML='<i class="fa-regular fa-circle-check" style="color: green;"></i>';
        return true;
    } 

    function validateMessage(){
        var message=document.getElementById('contact-message').value;

        if(message.length==0){
            msgError.innerHTML='Message is required';
            return false;
        }
        if(!message.match(/^[A-Z][a-zA-Z ]{10,50}$/)){
            msgError.innerHTML='First letter must be capital. Word limit: 10-50';
        return false;
        }
        msgError.innerHTML='<i class="fa-regular fa-circle-check" style="color: green;"></i>';
        return true;
    }

    function validateForm(){
        if(!validateName() || !validateEmail() || !validateSubject() || !validateMessage()){
            submitError.style.display='block';
            submitError.innerHTML="Please fix the error(s) to submit";
            setTimeout(function(){submitError.style.display='none';}, 2000);
            return false;
        }
    }

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 30
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    

    // Typed Initiate
    if ($('.header h2').length == 1) {
        var typed_strings = $('.header .typed-text').text();
        var typed = new Typed('.header h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    
    // Porfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });  
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
(jQuery);

