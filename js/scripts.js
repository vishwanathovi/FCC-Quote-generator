
$(document).ready(function() {
  $(".generate-btn").on('click',function(){
    $(".author").html("Vishwanatha HM");
    $.getJSON("https://www.quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function() {
    $(",quote").html(content)
    });
  });
});           