var increaseQuality = {
  swill: 'plausible',
  plausible: 'genius',
  genius: 'genius'
};

var decreaseQuality = {
  swill: 'swill',
  plausible: 'swill',
  genius: 'plausible'
};

function increaseIdeaQuality() {
  $('#ideas-index').delegate('.increase-idea-quality', 'click', function() {
    var idea    = $(this).closest('.idea');
    var ideaId  = idea.attr('data-id');
    var quality = idea.find('#idea-quality');
    var qualityText = quality.text();
    var data = { quality: increaseQuality[qualityText] };

    $.ajax({
      type: 'PUT',
      url: '/api/v1/ideas/' + ideaId,
      data: data,
      success: function() {
        quality.text(increaseQuality[qualityText]);
      }
    })
  })
};

function decreaseIdeaQuality() {
  $('#ideas-index').delegate('.decrease-idea-quality', 'click', function() {
    var idea    = $(this).closest('.idea');
    var ideaId  = idea.attr('data-id');
    var quality = idea.find('#idea-quality');
    var qualityText = quality.text();
    var data = { quality: decreaseQuality[qualityText] };

    $.ajax({
      type: 'PUT',
      url: '/api/v1/ideas/' + ideaId,
      data: data,
      success: function() {
        quality.text(decreaseQuality[qualityText]);
      }
    })
  })
};
