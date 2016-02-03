function ideaSearch() {
  $('#idea-search').keyup(function(event) {
    var searchTerm       = $(this).val().toLowerCase();
    var ideas            = $('#ideas-index').children();

    ideas.removeClass('invisible');

    var hiddenIdeas = ideas.filter(function() {
      var titleAndBodyText = $(this).find('#idea-title, #idea-body')
                                  .map((i, e) => $(e).text().toLowerCase())
                                  .toArray()
                                  .join()

      return !(titleAndBodyText.includes(searchTerm));
    });

    hiddenIdeas.addClass('invisible');
  })
};
