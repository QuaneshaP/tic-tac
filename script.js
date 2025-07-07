function Gameboard(){
   const rows = 3;
   const columns = 3;
   const board = [];

   for(let i = 0; i < rows; i++ ){
      board[i] = [];
      for(let j = 0; j < columns; j++){
         board[i].push(Grid());
      }
   }

   const getBoard = () => board;
}

function GameController (
    playerOne = "Player One",
    playerTwo = "Player Two"
){
   const players = [
      {
         name: playerOne,
         token: "X"
      },
      {
         name: playerTwo,
         token: "O"
      }
   ]

   let activePlayer = players[0];

   const switchPlayer = () =>{
      activePlayer = activePlayer === players[0] ? players[1] : players[0];
   };
   
   const getActivePlayer = () => activePlayer;

   return {getActivePlayer, players};
}

function Grid(){
   let value = "";

   const addMarker = (player) => {
      value = player;
   }

   const getValue = () => value;

   return {
      addMarker,
      getValue
   };
}