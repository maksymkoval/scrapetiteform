$(function(){

	$("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 300,
        labels: {
            next: "NEXT...",
            previous: "BACK",
            finish: 'SUBMIT'
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
            if ( newIndex === 0 ) {
                $('.steps ul li:first-child a img').attr('src','images/red.jpg');
                $('.firsth').css('display','block');
                // $('.actions ul li:first-of-type').css('display','none');
                $('.actions ul li:first-of-type a').css('backgroundColor','white');
                
              

                
            } else {
                $('.steps ul li:first-child a img').attr('src','images/grey.jpg');
                $('.firsth,.secondh,.thindh,.forthh,.fifthh').css('display','none');
                // $('.actions ul li:first-of-type').css('display','block');
                $('.actions ul li:first-of-type a').css('backgroundColor','#FF5300');
            } 

            if ( newIndex === 1 ) {
                $('.steps ul li:nth-child(2) a img').attr('src','images/red.jpg');
                $('.secondh').css('display','block');
               
            } else {
                $('.steps ul li:nth-child(2) a img').attr('src','images/grey.jpg');
                $('.secondh').css('display','none');
            }

            if ( newIndex === 2 ) {
                $('.steps ul li:nth-child(3) a img').attr('src','images/red.jpg');
                $('.thirdh').css('display','block');
           
            } else {
                $('.steps ul li:nth-child(3) a img').attr('src','images/grey.jpg');
                $('.thirdh').css('display','none');
            }

            if ( newIndex === 3 ) {
                $('.steps ul li:last-child a img').attr('src','images/red.jpg');
                $('.forthh').css('display','block');
              
            } else {
                $('.steps ul li:last-child a img').attr('src','images/grey.jpg');
                // $('.actions ul').removeClass('step-4');
        
                $('.forthh').css('display','none');

            }
         
            return true; 
        }
    });
    // Custom Button Jquery Steps
    $('.forward').click(function(){
        $("#wizard").steps('next'); 
     
    })
    $('.bodyarr a').click(function(){
        $("#wizard").steps('previous');
    })
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    })
    // Click to see password 
    $('.password i').click(function(){
        if ( $('.password input').attr('type') === 'password' ) {
            $(this).next().attr('type', 'text');
        } else {
            $('.password input').attr('type', 'password');
        }
    }) 
    // Create Steps Image
   
    $('.steps ul li:first-child').append('<img src="images/Line10.jpg" alt="" class="step-arrow">').find('a').append('<img src="images/red.jpg" alt="" class="img">');
    $('.steps ul li:nth-child(2)').append('<img src="images/Line10.jpg" alt="" class="step-arrow">').find('a').append('<img src="images/grey.jpg" alt=""> ').append('<span class="step-order">');
    $('.steps ul li:nth-child(3)').append('<img src="images/Line10.jpg" alt="" class="step-arrow">').find('a').append('<img src="images/grey.jpg" alt=""> ').append('<span class="step-order">');
    // $('.steps ul li:nth-child(4)').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<p class="line"><img src="images/grey.jpg" alt=""></p> ').append('<span class="step-order"></span>');
    $('.steps ul li:last-child a').append('<img class="four-fivegap" src="images/grey.jpg" alt="">').append('<span class="step-order"></span>');
    // Count input 
    $(".quantity span").on("click", function() {

        var $button = $(this);
        var oldValue = $button.parent().find("input").val();

        if ($button.hasClass('plus')) {
          var newVal = parseFloat(oldValue) + 1;
        } else {
           // Don't allow decrementing below zero
          if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
            } else {
            newVal = 0;
          }
        }
        $button.parent().find("input").val(newVal);
    });
})
$(document).ready(function(){
    $('.actions ul li:first-of-type a').css('backgroundColor','white');
    $('.actions ul li:last-of-type').click(function(){
        $('.thankspage').css('display','block');
       $('.content1, .content2,.content3,.content4').css('display','none');
       $('.actions ul').css('display','none');
       $('.steps ul li a img').attr('src','images/red.jpg');
      $('.forthh').css('display','none');
      $('.fifthh').css('display','block');
        $("#wizard").off();
        })
      

})