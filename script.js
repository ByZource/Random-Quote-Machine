var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

//click event for quotes & colors
$("#quoteBtn").on("click", function() {
    
    var colorPick = colors[Math.floor(Math.random() * (colors.length - 0) - 0)];
    
    $("body").css("background-color", colorPick);
    $("#text").css("color",colorPick);
    
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(e) {
        $("#quote").html(e.quoteText);
        $("#quote_title").html("--- " + e.quoteAuthor);
        
        $("#tweetBtn").on("click", function() {
            $("#tweetBtn").attr("href", "https://twitter.com/intent/tweet?text=" + e.quoteText + " -" + e.quoteAuthor + "#quote");
        });       
    });
});

$(window).load(function() {
    var colorPick = colors[Math.floor(Math.random() * (colors.length - 0) - 0)];
   
    $("body").css("background-color", colorPick);
    $("#text").css("color",colorPick);
    
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(e) {
        $("#quote").html(e.quoteText);
        $("#quote_title").html("--- " + e.quoteAuthor);
        
        $("#tweetBtn").on("click", function() {
            $("#tweetBtn").attr("href", "https://twitter.com/intent/tweet?text=" + e.quoteText + " -" + e.quoteAuthor + "#quote");
        });
    });
});