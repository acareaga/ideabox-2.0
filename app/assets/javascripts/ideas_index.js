function fetchIdeas() {
  $.ajax({
    type: "GET",
    url:  "/api/v1/ideas",
    success: function(collection_of_ideas) {
      renderIdeas(collection_of_ideas)
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
};

function renderIdeas(collection_of_ideas) {
  var rows = collection_of_ideas.slice(0, 5).map(function(idea) {
    return (
      "<table class='centered'>"
      +"<tbody>"
        +"<td><h5>"+ idea.title +"</h5></td>"
        +"<td><h5>"+ idea.body +"</h5></td>"
        +"<td><h5>"+ idea.quality +"</h5></td>"
      +"</tbody>"
      +"</table>"
    )
  })
  $("#ideas-index").empty().append(rows)
};
