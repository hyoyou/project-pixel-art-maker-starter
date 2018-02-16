$(document).ready(function(){
  // Put grid into variable
  var grid = $('#pixelCanvas');

  // Create grid with user input
  function makeGrid(height, width){
    for (var r = 0; r < height; r++) {
      var row = $('<tr></tr>');
      for (var c = 0; c < width; c++) {
        row.append('<td></td>');
      }
      grid.append(row);
    }
  }

  $('#submitBtn').on('click', function(e){
    // Prevent page from refreshing on click
    e.preventDefault();
    // Remove previous grid
    grid.children().remove();
    // Grab user input
    var height = $('#inputHeight').val();
    var width = $('#inputWeight').val();
    // Call makeGrid function
    makeGrid(height, width);
  })

  grid.on('click', 'td', function(){
    $(this).css('background-color', $('#colorPicker').val())
  })
})
