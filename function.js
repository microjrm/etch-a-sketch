$(document).ready(function() {

  $("#container").append('<table class = "table"></table>');

  function createGrid(x) {

  for (var i = 0; i < x; i++) {
    $('.table').append('<tr></tr>');
  }

  for (var j = 0; j < x; j++) {
    $('.table').append('<td></td>');
  }

  createGrid(16);
}

});
