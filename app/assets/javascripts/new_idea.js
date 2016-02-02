function createIdea() {
  $("#create-idea").on("click", function() {
    var ideaParams = {
      post: {
        title: $("#idea-title").val(),
        body: $("#idea-body").val(),
        quality: $("idea-quality").val()
      }
    };

    $.ajax({
      type:    "POST",
      url:     "/api/v1/ideas",
      data:    ideaParams,
      success: function(newIdea) {
        renderIdea(newIdea)
        $("#idea-title").val("")
        $("#idea-body").val("")
        $("#idea-quality").val("")
      },
      error: function(xhr) {
        console.log(xhr.responseText)
      }
    })
  })
};
