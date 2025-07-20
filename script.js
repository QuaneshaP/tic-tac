function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];
    
    for (let i = 0; i < rows; i++) {
        const inner = [];
        for(let j = 0; j < columns; j++){
            inner.push([]);
        }
      board.push(inner);    
    }
    
    const dropToken = (row, column, token) => {
         board[row][column].push(token);
    }
   
    
    const getBoard = () => board;

    const printBoard = () => {
      console.log(board);
    }
    
    return {dropToken, getBoard, printBoard };
    
    
    
}
function GameController (
    playerOneName = "Player One", 
    playerTwoName = "Player Two") {

   const board = Gameboard();
    
    const players = [
        { name: playerOneName,
          token: "X"
        },
        { name: playerTwoName,
         token: "O"
        }
    ];

    let activePlayer = players[0];

    const switchPlayers = () => {
      activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    const playRound = () =>{
      console.log(`Adding ${getActivePlayer().name}'s ${getActivePlayer().token}to the board`);
      board.dropToken(1, 2, getActivePlayer().token);

      switchPlayers();
      
      board.getBoard();
      board.printBoard();

    }

    return {
      playRound,
      getActivePlayer
    };
    
}
const newGame = GameController();
console.log(newGame);
