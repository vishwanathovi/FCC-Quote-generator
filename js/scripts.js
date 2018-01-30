
  // $(".generate-btn").on('click',function(){
  //   $.getJSON("https://cors-anywhere.herokuapp.com/https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(a) {
  // $(".quote").text(a[0].content)
  //   });
  // });        



  var API_URL = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
//Pull quote from API

$(".generate-btn").on('click',function(){
$.ajax({
  url: API_URL, 
  success: function(data){
    var post = data.shift();
    $(".author").text(post.title);
    $(".quote").html(post.content);
  },
  cache:false
});
}); 