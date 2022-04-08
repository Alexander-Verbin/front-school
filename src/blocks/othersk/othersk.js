$(document).ready(function () {
    $('.othersk__titles').click(function () {
        $(this).siblings('.othersk__info').toggleClass('othersk__info--open')
        $('.othersk__titles').toggleClass('othersk__titles--open')
    })
})