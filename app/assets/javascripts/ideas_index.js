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
    +"</thead>"
    +"<tbody class='idea' data-id='"+ idea.id +"' data-quality='"+ idea.quality +"'>"
      +"<td id='idea-title' contenteditable='true'>"+ idea.title +"</td>"
      +"<td id='idea-body' contenteditable='true'>"+ idea.body +"</td>"
      +"<td id='idea-quality'>"+ idea.quality +"</td>"
      +"<td><a class='waves-effect waves-teal btn-flat' id='delete-idea'>Delete</a></td>"
      +"<td><a class='waves-effect waves-teal btn-flat increase-idea-quality'>+</a></td>"
      +"<td><a class='waves-effect waves-teal btn-flat decrease-idea-quality'>-</a></td>"
    +"</tbody>"
    +"</table>"
  )
};

function renderIdea(idea) {
  $("#ideas-index").prepend(
    "<table class='centered'>"
    +"</thead>"
    +"<tbody class='idea' data-id='"+ idea.id +"' data-quality='"+ idea.quality +"'>"
      +"<td id='idea-title' contenteditable='true'>"+ idea.title +"</td>"
      +"<td id='idea-body' contenteditable='true'>"+ idea.body +"</td>"
      +"<td id='idea-quality'>"+ idea.quality +"</td>"
      +"<td><a class='waves-effect waves-teal btn-flat' id='delete-idea'>Delete</a></td>"
      +"<td><a class='waves-effect waves-teal btn-flat increase-idea-quality'>+</a></td>"
      +"<td><a class='waves-effect waves-teal btn-flat decrease-idea-quality'>-</a></td>"
    +"</tbody>"
    +"</table>"
  )
};

// function truncateIdeaBody(string) {
//   debugger;
//   if (string.length > 100) {
//       return $.trim(string)
//               .substring(0, 100)
//               .split(" ")
//               .slice(0, -1)
//               .join(" ") + "...";
//   } else {
//     return string;
//   }
// };
