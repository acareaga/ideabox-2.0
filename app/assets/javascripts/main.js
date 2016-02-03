//= require ideas_index
//= require new_idea
//= require edit_idea
//= require search

$(document).ready(function(){
  fetchIdeas();
  createIdea();
  deleteIdea();
  editIdeaTitle();
  editIdeaBody();
  ideaSearch();
});
