$(document).ready(function(){
    $(".book-btn").hover(
        function() {
            $(this).children(".book-btn-text").css('color','rgba(231, 111, 1, 1)')
        },
        function() {
            $(this).children(".book-btn-text").css('color','#FFFFFF')
        }
    );

    $(".goods-1").hover(
        function () { //hover In...
            $(this).children(".goods-describe").slideDown('fast');
        }, 
        function () { //hover Out...
            $(this).children(".goods-describe").slideUp('fast');
    });
})