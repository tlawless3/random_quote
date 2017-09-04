function getQuote(){
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a){
    $("#quote-content").html(a[0].content);
    $("#quote-source").html(a[0].title);
});
};
function share(){
  var quote = $("#quote-content").text()
  $("#twitterLink").attr('href', 'https://twitter.com/intent/tweet?text=' + quote);
}

$(document).ready(function(){
 $.ajaxSetup({ cache: false });
  getQuote();
  $("#newQuoteButton").on("click", getQuote);
  $("#twitterButton").on("click", share)
});