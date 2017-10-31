// Variables needed

var player1 = 'X';
var player2 = 'O';
var currentPlayer = player1;

// Creating board array

var board = [[null, null, null], [null, null, null], [null, null, null]];

// Function placeChip for each square
function placeChip(row,column){
  // If the square is null, add currentPlayer chip. If you can place the chip return true, else, return false
  if (board[row][column] === null){
    board[row][column] = currentPlayer;
    return true;
    //If you can't alert to use another spot
  } else {
    alert('Try another spot');
    return false;
  }
}


function nextPlayer(){
  // If the player1 has played then the next turn is for player2
  if (currentPlayer === player1){
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}

$(document).ready(function() {
  //When you click on a square, call placeChip
   $(".square").click(function(event) {
     //This variable return the rows inside the board to know the coordinates that I need to know to placeChip
     var rows = $('.board').children();
     //This variable iterates throught the array to get the .square in each row
     for(var row=0; row < rows.length; row++){
       var columns = $(rows[row]).children();
       //This variable iterates all the .square inside the each row
       for(var column=0; column < columns.length; column++){
         if (columns[column] === event.target){
           if (placeChip(row,column) === true){
             $(columns[column]).text(currentPlayer);
             nextPlayer();
           }
         }
       }
     }
   });
   $('.btn').on('click', function(){
     location.reload();
   });
});
