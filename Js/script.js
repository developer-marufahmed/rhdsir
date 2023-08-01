// Navbar Active

// var activeContainer = document.getElementById("navbar");
// var actives = activeContainer.getElementsByClassName("btn");

// for (var i = 0; i < actives.length; i++){
//     actives[i].addEventListener('click', function(){
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace("active");
//         this.className += "active";
//     })
// }




// Javascript Strats


$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }

    });


    // Smooth scrolling

    $('a[href*="#"]').on('click',function(e){

        e.preventDefault();
        $('html, body').animate({

            scrollTop : $($(this).attr('href')).offset().top,
            
        },
          500,
          'linear'
        
        );

    });




});
