console.log('scripts.js was sourced');

$(document).ready(function() {
    $('body').append('<h2>Hey there!!</h2>');
    $('body').prepend('<h2>I am going the top!!!</h2>');
    $('li').css('color', 'blue');
    $('#kevin li').css('color', 'maroon');
    $('.food').css('color', 'pink');
    $('#chief').css('color', 'green');
    // $('#kevin li:last-child').css('color', 'black'); //$('ul:first li:last-child) works the same
    $('ul').first().children().last().css('color', 'black'); //done with methods of jQuery selector
    // var counter = 0;
            // when the button is clicked
    $('#kevinNewFavorite').on('click', function(){
            // make the counter go up by one
        // counter++;
            //log that counter
        // console.log('button was clicked',counter,'times');
        
        // Lightsabers should be added to the list
        $('#kevin').append('<li>Lightsabers</li>');
    });
});