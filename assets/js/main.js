$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            960: {
                items: 5
            },
            1200: {
                items: 5
            }
        }
    });
    owl.on('mousewheel', '.owl-stage', function(e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });


    $(window).resize(function() {
        var check = $(this).width()
        console.log(check)
        if (check > 768) {
            $('.navbar-nav li').hover(function() {
                $(this).find('.menu-child').stop().slideDown(500)

            }, function() {
                $(this).find('.menu-child').stop().slideUp(500)
            })

        } else {
            $('.navbar-nav li').click(function() {
                $(this).find('.menu-child').stop().slideDown(500)

            }, function() {
                $(this).find('.menu-child').stop().slideUp(500)
            })
        }
    })

    // $('.navbar-nav li').hover(function() {
    //     $(this).find('.menu-child').stop().slideDown(500)

    // }, function() {
    //     $(this).find('.menu-child').stop().slideUp(500)
    // })


    $(window).resize(function() {
        if ($(this).width()) {
            $('.navbar-collapse.collapse.show').removeClass('show')
        }
    })
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('.navbar-collapse.collapse.show').removeClass('show')
        }
        if ($(this).scrollTop() > 500) {
            $('#back-top').show()
        } else {
            $('#back-top').hide()
        }
    })
    $('#wp-content').click(function() {
        $('.navbar-collapse.collapse.show').removeClass('show')
    })

    $('#back-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800)
    })


});