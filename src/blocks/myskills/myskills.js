$(document).ready(function () {
    $('.myskills__titles').click(function () {
        $(this).siblings('.myskills__info').toggleClass('myskills__info--open')
        $('.myskills__titles').toggleClass('myskills__titles--open')
    })
})