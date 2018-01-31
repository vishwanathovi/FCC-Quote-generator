
  // $(".generate-btn").on('click',function(){
  //   $.getJSON("https://cors-anywhere.herokuapp.com/https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(a) {
  // $(".quote").text(a[0].content)
  //   });
  // });        

function stripHtml(html){
    // Create a new div element
    var temporalDivElement = document.createElement("div");
    // Set the HTML content with the providen
    temporalDivElement.innerHTML = html;
    // Retrieve the text property of the element (cross-browser support)
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
}


var API_URL = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
//Pull quote from API

$(".generate-btn").on('click',function(){
$.ajax({
  url: API_URL, 
  success: function(data){
    var post = data.shift();
    $(".author").text(stripHtml(post.title));
    $(".quote").html(stripHtml(post.content));
  },
  cache:false
  });

var oldUrl = $(".twitter-share-button").attr("href");
var newUrl = "https://twitter.com/intent/tweet"
var res = $(".quote").text();
res = res.trim();
var res = newUrl.concat("?text=",res);
res = res.replace(/ /g, "%20");
$(".twitter-share-button").attr("href",res);

}); 