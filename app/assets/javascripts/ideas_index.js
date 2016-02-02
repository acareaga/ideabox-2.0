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
      +"<tbody>"
        +"<td id='idea-title'><h5>"+ idea.title +"</h5></td>"
        +"<td id='idea-body'>"+ idea.body +"</td>"
        +"<td id='idea-quality'><h5>"+ idea.quality +"</h5>"
        +"<td><a class='waves-effect waves-teal btn-flat' id='edit-idea'>Edit</a><a class='waves-effect waves-teal btn-flat' id='delete-idea'>Delete</a></td>"
      +"</tbody>"
      +"</table>"
  )
};

function renderIdea(idea) {
  $("#ideas-index").prepend(
      "<table class='centered'>"
      +"<tbody>"
        +"<td id='idea-title'><h5>"+ idea.title +"</h5></td>"
        +"<td id='idea-body'>"+ idea.body +"</td>"
        +"<td id='idea-quality'><h5>"+ idea.quality +"</h5>"
        +"<td><a class='waves-effect waves-teal btn-flat' id='edit-idea'>Edit</a><a class='waves-effect waves-teal btn-flat' id='delete-idea'>Delete</a></td>"
      +"</tbody>"
      +"</table>"
  )
};




// <!-- QUALITY DROP DOWN MENU -->
//  <select class="browser-default" id="idea-quality">
//    <option value="0">Swill</option>
//    <option value="1">Plausible</option>
//    <option value="2">Genius</option>
//  </select>
