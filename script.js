$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn div').toggleClass("active");
        $('.menu-btn').toggleClass("active");
    });

    $('.menu > li').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn div').toggleClass("active");
        $('.menu-btn').toggleClass("active");
    });


});

// typing animation script
var typed = new Typed(".typing", {
    strings: ["Data Analyst", "Developer","Designer","Freelancer", "Technical-Support"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Data Analyst", "Developer","Designer","Freelancer","Technical-Support"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbyoSjEFG9Ngekg18yU6C210iQTZteGTnkGBECf3SkEDsoqQoIysM2E00ggBDC7_4UMIig/exec';

const form = document.forms['right']; // Corrected form name

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      alert("Thank you! Your form is submitted successfully.");
      window.location.reload();
    })
    .catch(error => console.error('Error!', error.message));
});
