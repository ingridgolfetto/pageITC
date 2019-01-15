
    $(function(){
        $(document).on( 'scroll', function(){
            if ($(window).scrollTop() > 100) {
                $('.smoothscroll-top').addClass('show');
            } else {
                $('.smoothscroll-top').removeClass('show');
            }
        });
        $('.smoothscroll-top').on('click', scrollToTop);
    });
    function scrollToTop() {
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({scrollTop: offsetTop}, 600, 'linear');
    }

    $(document).ready(function(){
        $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
          if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 1100, function(){
                 window.location.hash = hash;
            });
          } 
        });
        $(window).scroll(function() {
          $(".slideanim").each(function(){
            var pos = $(this).offset().top;
      
            var winTop = $(window).scrollTop();
              if (pos < winTop + 600) {
                $(this).addClass("slide");
              }
          });
        });
      })

      
      