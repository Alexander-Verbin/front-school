$(document).ready(function () {
    $('.exp__titles').click(function () {
        $(this).siblings('.exp__info').toggleClass('exp__info--open')
        $('.exp__titles').toggleClass('exp__titles--open')
    })
})