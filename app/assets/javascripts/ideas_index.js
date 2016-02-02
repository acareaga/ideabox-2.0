// function fetchIdeas() {
//   $.ajax({
//     type: "GET",
//     url:  "/api/v1/ideas",
//     success: function(collection_of_ideas) {
//       debugger;
//       $.each(collection_of_ideas, function(index, idea) {
//         renderIdeas(idea)
//       }
//     )},
//     error: function(xhr) {
//       console.log(xhr.responseText)
//     }
//   })
// };

// function renderIdea(idea) {
//   var rows = idea.map(function(ideaTitle, index) {
//     return (
//       "<h3>"+ ideaTitle.title+"</h3>"
//     )
//   })
//   $("#index").empty().append(rows)
// };
