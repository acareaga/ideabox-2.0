function editIdeaTitle() {
  $('#ideas-index').delegate('#idea-title', 'keydown', function(event) {
    var enterKeyHit = event.which == 13

    if (enterKeyHit) {
      var idea = this.closest('.idea')
      var ideaId = $(idea).attr('data-id')
      var data = { title: this.textContent }

      event.preventDefault();
      this.blur();

      $.ajax({
        type: 'PUT',
        url: '/api/v1/ideas/' + ideaId,
        data: data
      })
    }
  })
};

function editIdeaBody() {
  $('#ideas-index').delegate('#idea-body', 'keydown', function(event) {
    var enterKeyHit = event.which == 13

    if (enterKeyHit) {
      var idea = this.closest('.idea');
      var ideaId = $(idea).attr('data-id');
      var data = { body: this.textContent };

      event.preventDefault();
      this.blur();

      $.ajax({
        type: 'PUT',
        url: '/api/v1/ideas/' + ideaId,
        data: data
      })
    }
  })
};
