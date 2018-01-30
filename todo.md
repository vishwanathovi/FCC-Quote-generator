// $(document).ready(function() {
//   $('.generate-btn').on('click', function(e) {
//       e.preventDefault();
//       $.ajax( {
//         url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',header('Access-Control-Allow-Origin: *'),
//         success: function(data) {
//           var post = data.shift(); // The data is an array of posts. Grab the first one.
//           // $('.quote').text(post.title);
//           $('.quote').html(post.content);

//           // If the Source is available, use it. Otherwise hide it.
//           if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
//             $('#quote-source').html('Source:' + post.custom_meta.Source);
//           } else {
//             $('#quote-source').text('');
//           }
//         },
//         cache: false
//       });
//     });
//  });