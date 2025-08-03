function Gameboard() {
    const rows = 3;
    const columns = 3;
    let board = [];
    
    for (let i = 0; i < rows; i++) {
        const inner = [];
        for(let j = 0; j < columns; j++){
            inner.push([]);
        }
      board.push(inner);    
    }
    
    const dropToken = (row, column, token) => {
      if(hasMarker(row, column)){
          return;
         }   
      else{
        board[row][column].push(token);
      }   
      
         
         
    }
   
    // Check if the board has already been filled.
    const hasMarker = (a, b)=>{
      if(board[a][b].length > 0){
        return true;
      }  
      else{
        return false;
      }
    }
    
    
    const getBoard = () => board;

    const printBoard = () => {
      console.log(board);
    }
    const resetBoard = () => {
      board = [];
      for (let i = 0; i < rows; i++) {
        const inner = [];
        for(let j = 0; j < columns; j++){
          
            inner.push([]);
        }
      board.push(inner);    
    }
    }
    return {dropToken, getBoard, printBoard, resetBoard, hasMarker};
    
    
    
}

function Names(){
  const player1Name = document.querySelector(".playerOne");
  const player2Name = document.querySelector(".playerTwo");

  const getPlayerOne = () => player1Name;
  const getPlayerTwo = () => player2Name;



  return {getPlayerOne, getPlayerTwo};
}

function GameController (
    playerOneName = "Player One", 
    playerTwoName = "Player Two") {

   const board = Gameboard();

   const userNames = Names();
   

   const p1Name = userNames.getPlayerOne().value;
   const p2Name = userNames.getPlayerTwo().value; 
   
  
    
    
    const players = [
        { name: p1Name,
          token: "X"
        },
        { name: p2Name,
         token: "O"
        }
    ];

    let activePlayer = players[0];

    const getActivePlayer = () => activePlayer;

    const switchPlayers = () => {
      activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    
    

    const playRound = () =>{
      //Check for a winner

      let player1_Score = 0;
      let player2_Score = 0;

      let testBoard = board.getBoard();

      const checkTie = () =>{
        let tieCheck = board.getBoard();
        let count = 0;
        for (let i = 0; i < 3; i++) {
          for(let j = 0; j < 3; j++){
            if(tieCheck[i][j].length > 0){
              ++count;
            }
          }
        }
        return count === 9;
      }

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
      
      
      let gameOver = false;

      const checkDom = (a, b, c) =>{
        if(board.hasMarker(a, b) && c.innerHTML !== ""){
          return true;
        }
        return false;
      };
      
      

      //Adds event listeners for all buttons on the DOM
      for(let row = 0; row < 3; row++){
        for(let col = 0; col < 3; col++){
          domManuipulation.banner.innerHTML = "";
          const button = domManuipulation.buttons[row][col];
          button.addEventListener("click", function(){
            gameOver = false;
            if(checkDom(row, col, this)){
              domManuipulation.banner.innerHTML = "Please add your marker to an empty spot.";
              return; 
            }
            else{
              domManuipulation.banner.innerHTML = `Adding ${getActivePlayer().name}'s ${getActivePlayer().token} to the board`;
              board.dropToken(row, col, getActivePlayer().token);
              this.innerHTML = "";
              this.innerHTML = `${getActivePlayer().token}`;
              
            
              board.printBoard();

            }
             if(checkWin(getActivePlayer().token) && !gameOver){
              domManuipulation.banner.innerHTML = "";
              domManuipulation.banner.innerHTML = `And the winner is :${getActivePlayer().name}! Congratulations!`;
              board.printBoard();
              if(getActivePlayer().name === p1Name){
              ++player1_Score;
              domManuipulation.scoreBoard.textContent = `Scoreboard: ${p1Name}: ${player1_Score} ${p2Name}: ${player2_Score}`;
              }
              else if(getActivePlayer().name === p2Name){
                ++player2_Score;
                domManuipulation.scoreBoard.textContent = `Scoreboard: ${p1Name} ${player1_Score} ${p2Name}: ${player2_Score}`
              }
              gameOver = true;
              board.resetBoard();
              return; 

            }
            else if(!checkWin(getActivePlayer().token) && checkTie()){
              domManuipulation.banner.innerHTML = "";
              domManuipulation.banner.innerHTML = "It is a draw!";
              
            }
            switchPlayers();
            console.log(checkWin(getActivePlayer().token));
          });
        }
      }
      // Reset the dom and board via reset button
      domManuipulation.reset.addEventListener("click", function(){
        domManuipulation.resetDom();
        board.resetBoard();
      });

      domManuipulation.Resetscore.addEventListener("click", function(){
        domManuipulation.resetScore();
      });

     

    
      board.printBoard();
    }
    
    // Holds all Dom objects
    const domManuipulation = {
      scoreBoard: document.querySelector(".score"),
      banner: document.querySelector(".banner"),
      reset: document.querySelector(".reset"),
      Resetscore: document.querySelector(".scores"),
      resetDom: function() {
        this.banner.innerHTML = "Resetting Board";
        for (let row of this.buttons){
          for(let btn of row){
            btn.textContent = "";
          }
        }
      },
    buttons: [
      [document.querySelector(".first"),  document.querySelector(".second"), document.querySelector(".third")],
      [document.querySelector(".fourth"), document.querySelector(".fifth"), document.querySelector(".six")],
      [document.querySelector(".seven"), document.querySelector(".eight"), document.querySelector(".nine"),]
    ],
    resetScore: function(){
      player1_Score = 0;
      player2_Score = 0;
      this.scoreBoard.textContent = `Resetting Score: Player One: ${player1_Score} Player Two: ${player2_Score}`;
    }
    };
    return {
      playRound,
      getActivePlayer,
      
    };
    
    
}
const game = GameController();
game.playRound();
