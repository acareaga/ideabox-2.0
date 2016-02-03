function ideaSearch() {
  var $ideas = $('.idea');

  $('#idea-search').on('change', function () {
    var currentStatus = this.value;
    $ideas.each(function (index, idea) {
      $idea = $(idea);
      debugger;
      if ($idea.data('title') === currentStatus) {
        $idea.show();
      } else {
        $idea.hide();
      }
    });
  });
};
