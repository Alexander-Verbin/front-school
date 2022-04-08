$(document).ready(function () {
    $('.edu__titles').click(function () {
        $(this).siblings('.edu__info').toggleClass('edu__info--open')
        $('.edu__titles').toggleClass('edu__titles--open')
    })
})