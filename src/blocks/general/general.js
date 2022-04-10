$(document).ready(function () {
    $('.general__burger').click(function () {
        $('.general__skill').toggleClass('general__skill--open')
        if ($(this).is('.js-active:not(.js-back)')) {
            $(this).addClass('js-back');
        } else if ($(this).is('.js-back')) {
            $(this).removeClass('js-back');
        } else {
            $(this).addClass('js-active');
        }
    })
})
