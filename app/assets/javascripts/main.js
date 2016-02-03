$(document).ready(function(){
  fetchIdeas();
  createIdea();
  deleteIdea();
  editIdeaTitle();
  editIdeaBody();
  ideaSearch();
});

// truncate with reduce up to 100 characters and append … after

// $('.idea').body.reduce(function(sum, chars) {
//   return sum + chars.length;
// }, 100);

// [1, 2, 10, 4, 12].sort( function(a, b){
//   return a-b;
// })

// Array of objects sort by created at date
