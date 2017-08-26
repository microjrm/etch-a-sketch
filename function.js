
//Create grid funtion
function createGrid(x) {
  for (var rows = 0; rows < x; rows++){
    for (var cols = 0; cols < x; cols++){
      $("#container").append("<div class = 'grid' ></div>");
    };
  };
  $(".grid").height(800/x);
  $(".grid").width(800/x);
};


//Clear grid function
function clearGrid() {
  $(".grid").remove();
};

//New grid with x number of squares function
function newGrid() {
  var j = prompt("How many squares would you like your grid to be?");
  clearGrid();
  createGrid(j);
}



//Creates a 16x16 grid when the page loads and allows for clickable buttons
$(document).ready(function(){
  createGrid(16);

 $(".grid").mouseover(function(){
   $(this).css("background-color", "black");
  });

//Select new sizeable BLACK grid with each mouseover
 $(".blackGrid").click(function(){
   newGrid();

   $(".grid").mouseover(function(){
     $(this).css("background-color", "black");
    });
  });


//Select new sizeable RANDOM grid with each mouseover
   $(".randomGrid").click(function(){
     newGrid();

     $(".grid").on('mouseover', function(){
       var random = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
       $(this).css("background-color", random);
     });
  });

//Select new sizable FADE grid with each mouseover
 $(".fadeGrid").click(function(){
  newGrid();

   $(".grid").on('mouseover', function(){
    $(this).fadeIn('slow', '.1');
    });
  });

//Clear the grid with button click and return it to 16x16 black
  $(".clearGrid").click(function(){
    clearGrid();
    createGrid(16);
    $(".grid").mouseover(function(){
      $(this).css("background-color", "black");
     });
  });
});
