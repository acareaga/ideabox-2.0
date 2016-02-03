//= require ideas_index
//= require new_idea
//= require edit_idea

$(document).ready(function(){
  fetchIdeas();
  createIdea();
  deleteIdea();
  editIdeaTitle();
});
