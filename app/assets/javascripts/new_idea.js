function createIdea() {
  $("#create-idea").on("click", function() {
    var ideaParams = {
      title: $('#idea-title').val(),
      body: $('#idea-body').val()
    };

    $.ajax({
      type:    "POST",
      url:     "/api/v1/ideas",
      data:    ideaParams,
      success: function(newIdea) {
        renderIdea(newIdea)
        resetForm();
      },
      error: function(xhr) {
        console.log(xhr.responseText)
      }
    })
  })
};

function resetForm(){
  $('#idea-title').val('')
  $('#idea-body').val('')
};
