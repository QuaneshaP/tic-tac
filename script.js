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

    const getActivePlayer = () => activePlayer;

    const switchPlayers = () => {
      activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    
    

    const playRound = () =>{
      domManuipulation.banner.innerHTML = "";
      domManuipulation.firstBtn.addEventListener("click", function(){
        domManuipulation.banner.innerHTML = `Adding ${getActivePlayer().name}'s ${getActivePlayer().token} to the board`;
        board.dropToken(0, 0, getActivePlayer().token);
        domManuipulation.firstBtn.innerHTML = "";
        domManuipulation.firstBtn.innerHTML = `${getActivePlayer().token}`
        switchPlayers();
      });
      domManuipulation.secondBtn.addEventListener("click", function(){
        domManuipulation.banner.innerHTML = `Adding ${getActivePlayer().name}'s ${getActivePlayer().token} to the board`;
        board.dropToken(0, 1, getActivePlayer().token);
         domManuipulation.secondBtn.textContent = "";
        domManuipulation.secondBtn.textContent = `${getActivePlayer().token}`
        switchPlayers();
      });
      domManuipulation.thirdBtn.addEventListener("click", function(){
        domManuipulation.banner.innerHTML = `Adding ${getActivePlayer().name}'s ${getActivePlayer().token} to the board`;
        board.dropToken(0, 2, getActivePlayer().token);
        domManuipulation.thirdBtn.textContent = "";
        domManuipulation.thirdBtn.textContent = `${getActivePlayer().token}`
        switchPlayers();
      });
      
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
      let player1_Score = 0;
      let player2_Score = 0;

      if(winner) {
        console.log(`And the winner is :${getActivePlayer().name}! Congratulations!`);
        board.printBoard();
        if(getActivePlayer().name === "Player One"){
          ++player1_Score;
          domManuipulation.scoreBoard.textContent = `Player One: ${player1_Score} Player Two: ${player2_Score}`;
        }
        else if(getActivePlayer().name === "Player Two"){
          ++player2_Score;
          domManuipulation.scoreBoard.textContent = `Player One: ${player1_Score} Player Two: ${player2_Score}`
        }
        return; 
      }
     
      
      
      

      board.getBoard();
      board.printBoard();

      if(!winner){
        playRound();
      }


    }
    
    const domManuipulation = {
      scoreBoard: document.querySelector(".score"),
      firstBtn: document.querySelector(".first"),
      secondBtn: document.querySelector(".second"),
      thirdBtn: document.querySelector(".third"),
      fourthBtn: document.querySelector(".fourth"),
      fifthBtn: document.querySelector(".fifth"),
      sixBtn: document.querySelector(".six"),
      sevenBtn: document.querySelector(".seven"),
      eightBtn: document.querySelector(".eight"),
      nineBtn: document.querySelector(".nine"),
      banner: document.querySelector(".banner")
    }
    return {
      playRound,
      getActivePlayer,
      
    };
    
    
}
const game = GameController();
game.playRound();
