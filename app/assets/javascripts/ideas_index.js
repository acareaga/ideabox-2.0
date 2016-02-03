function fetchIdeas() {
  $.ajax({
    type: "GET",
    url:  "/api/v1/ideas",
    success: function(ideas) {
      $.each(ideas, function(index, idea) {
        renderIndex(idea)
      })
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
};

function renderIndex(idea) {
  $("#ideas-index").append(
    "<table class='centered'>"
    +"<tbody class='idea' data-id='"+ idea.id +"'>"
      +"<td id='idea-title' contenteditable='true'><h5>"+ idea.title +"</h5></td>"
      +"<td id='idea-body' contenteditable='true'>"+ idea.body +"</td>"
      +"<td id='idea-quality'><h5>"+ idea.quality +"</h5>"
      +"<td><a class='waves-effect waves-teal btn-flat' id='delete-idea'>Delete</a></td>"
    +"</tbody>"
    +"</table>"
  )
};

function renderIdea(idea) {
  $("#ideas-index").prepend(
    "<table class='centered'>"
    +"<tbody class='idea' data-id='"+ idea.id +"'>"
      +"<td id='idea-title' contenteditable='true'><h5>"+ idea.title +"</h5></td>"
      +"<td id='idea-body' contenteditable='true'>"+ idea.body +"</td>"
      +"<td id='idea-quality'><h5>"+ idea.quality +"</h5>"
      +"<td><a class='waves-effect waves-teal btn-flat' id='delete-idea'>Delete</a></td>"
    +"</tbody>"
    +"</table>"
  )
};
