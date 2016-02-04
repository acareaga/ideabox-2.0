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
    var idea    = this.closest('.idea');
    var idea2    = $(this).closest('.idea');
    var ideaId  = idea.attributes[1].nodeValue;
    var quality = idea.attributes[2].nodeValue;
    var data = { quality: increaseQuality[quality] };
    var qualityText = idea2.find('#idea-quality')

    $.ajax({
      type: 'PUT',
      url: '/api/v1/ideas/' + ideaId,
      data: data,
      success: function() {
        qualityText.text(increaseQuality[quality]);
      }
    })
  })
};

function decreaseIdeaQuality() {
  $('#ideas-index').delegate('.decrease-idea-quality', 'click', function() {
    var idea    = this.closest('.idea');
    var idea2    = $(this).closest('.idea');
    var ideaId  = idea.attributes[1].nodeValue;
    var quality = idea.attributes[2].nodeValue;
    var data = { quality: decreaseQuality[quality] };
    var qualityText = idea2.find('#idea-quality')

    $.ajax({
      type: 'PUT',
      url: '/api/v1/ideas/' + ideaId,
      data: data,
      success: function() {
        qualityText.text(decreaseQuality[quality]);
      }
    })
  })
};
