$(function() {
    $('.smooth').on('click', function(event) {
        let target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

$('body').append('<button class="btn-up"/>');
$('.btn-up').click(function(){
    $('html').animate({'scrollTop':0}, 1000);
    $('body').animate({'scrollTop':0}, 1000);
});