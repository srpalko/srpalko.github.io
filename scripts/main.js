import * as quotes from './quotes.js';



function setQuote() {
    let newQuote = quotes.getRandomQuote();
    $( "#text" ).find( "h2" ).html( '"' + newQuote.quote + '"' );
    $( "#author" ).find( "h3" ).html( '-' + newQuote.author );
    return newQuote;
}

$( "#quote-box" ).hide();
$( document ).ready(function() {
    $( "#quote-box ").fadeIn( 800 );
    let readyQuote = setQuote();
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + readyQuote.quote + '" ' + readyQuote.author));
});

$( "#new-quote" ).click(function() {
    $( "#quote-box" ).hide();
    let newQuote = setQuote();
    $( "#quote-box" ).fadeIn( 800 );
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + newQuote.quote + '" ' + newQuote.author));
});





