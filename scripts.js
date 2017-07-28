console.log('scripts.js was sourced');

$(document).ready(function() {
    $('body').append('<h2>Hey there!!</h2>');
    $('body').prepend('<h2>I am going the top!!!</h2>');
    $('li').css('color', 'blue');
    $('#kevin li').css('color', 'maroon');
    $('.food').css('color', 'pink');
    $('#chief').css('color', 'green');
    $('li:last-child').css('color', 'black');
});