function editIdeaTitle() {
  $('#ideas-index').delegate('#idea-title', 'keydown', function(event) {
    event.preventDefault
    var nl = event.which == 13

    if (nl) {
      var idea = this.closest('.idea')
      var ideaId = $(idea).attr('data-id')
      var data = { title: this.textContent }

      $.ajax({
        type: 'PUT',
        url: '/api/v1/ideas/' + ideaId,
        data: data,
        success: function() {
          // renderIndex();
        },
        error: function(xhr) {
          console.log(xhr.responseText)
        }
      })
    }

  })
};


// document.addEventListener('keydown', function (event) {
//   var esc = event.which == 27,
//       nl = event.which == 13,
//       el = event.target,
//       input = el.nodeName != 'INPUT' && el.nodeName != 'TEXTAREA',
//       data = {};
//
//   if (input) {
//     if (esc) {
//       // restore state
//       document.execCommand('undo');
//       el.blur();
//     } else if (nl) {
//       // save
//       debugger;
//       var idea_id = this.parentElement
//       data[el.getAttribute('#ideas-index')] = el.innerHTML;
//       // we could send an ajax request to update the field
//       /*
//       $.ajax({
//         url: window.location.toString(),
//         data: data,
//         type: 'post'
//       });
//       */
//       log(JSON.stringify(data));
//       debugger;
//       el.blur();
//       event.preventDefault();
//     }
//   }
// }, true);
//
// function log(s) {
//   document.getElementById('debug').innerHTML = 'value changed to: ' + s;
// };
//
//
//
// function editIdea() {
//   $('#ideas-index').delegate('#edit-idea', 'click', function() {
//     var idea = this.closest(".idea")
//     $.ajax({
//       type: 'PUT',
//       url: '/api/v1/ideas/' + $(idea).attr('data-id'),
//       success: function() {
//         // $(idea).remove()
//       },
//       error: function(xhr) {
//         console.log(xhr.responseText)
//       }
//     })
//   })
// };
