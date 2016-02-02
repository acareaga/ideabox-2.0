function fetchIdeas() {
  var newestIdeaID = parseInt($(".idea").last().attr("data-id"))

  $.ajax({
    type: "GET",
    url:  "/api/v1/ideas",
    success: function(ideas) {
      $.each(ideas, function(index, idea) {
        if (isNaN(newestIdeaID) || idea.id > newestIdeaID) {
          renderIdea(idea)
        }
      })
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
};

function renderIdea(idea) {
  $("#ideas-index").append(
      "<table class='centered'>"
      +"<tbody>"
        +"<td><h5>"+ idea.title +"</h5></td>"
        +"<td>"+ idea.body +"</td>"
        +"<td><h5>"+ idea.quality +"</h5>"
        +"<td><a class='waves-effect waves-teal btn-flat' id='edit-idea'>Edit</a><a class='waves-effect waves-teal btn-flat' id='delete-idea'>Delete</a></td>"
      +"</tbody>"
      +"</table>"
  )
};
