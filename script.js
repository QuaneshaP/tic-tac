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
      let choiceRow = prompt(`${getActivePlayer().name} Select the row!`);
      let choiceCol = prompt(`${getActivePlayer().name} Select the column!`)

      if (isNaN(choiceCol) || isNaN(choiceRow) ){
        alert("Please only enter numbers");
      }

      board.dropToken(choiceRow, choiceCol, getActivePlayer().token);

      //Check for a winner
      const checkWin = (token) =>{
          let winCheck = board.getBoard();

          const winningMatches = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
          ];
          
          for(const combos of winningMatches){
            const [a, b, c] = combos;


            if(winCheck[a[0]][a[1]][0] === token &&
               winCheck[b[0]][b[1]][0] === token &&
               winCheck[c[0]][c[1]][0] === token 
            ) {
              return true;
            }
          }
          return false;
      };

      const winner = checkWin(getActivePlayer().token);

      if(winner) {
        console.log(`And the winner is :${getActivePlayer().name} congratulations!`);
        return; 
      }
     
      
      
      switchPlayers();

      board.getBoard();
      board.printBoard();

      if(!winner){
        playRound();
      }


    }

    return {
      playRound,
      getActivePlayer,
      
    };
    
}
const game = GameController();
console.log(game.playRound());
