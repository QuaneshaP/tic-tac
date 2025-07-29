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
         board[row][column].push(token);
         
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
    return {dropToken, getBoard, printBoard, resetBoard };
    
    
    
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
      //Check for a winner

      let player1_Score = 0;
      let player2_Score = 0;

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
      
     
      
      domManuipulation.banner.innerHTML = "";
      domManuipulation.firstBtn.addEventListener("click", function(){
        gameOver = false;
        domManuipulation.banner.innerHTML = `Adding ${getActivePlayer().name}'s ${getActivePlayer().token} to the board`;
        board.dropToken(0, 0, getActivePlayer().token);
        domManuipulation.firstBtn.innerHTML = "";
        domManuipulation.firstBtn.innerHTML = `${getActivePlayer().token}`

        if(checkWin(getActivePlayer().token) && !gameOver){
          domManuipulation.banner.innerHTML = "";
          domManuipulation.banner.innerHTML = `And the winner is :${getActivePlayer().name}! Congratulations!`;
          board.printBoard();
          if(getActivePlayer().name === "Player One"){
          ++player1_Score;
          domManuipulation.scoreBoard.textContent = `Player One: ${player1_Score} Player Two: ${player2_Score}`;
          }
          else if(getActivePlayer().name === "Player Two"){
            ++player2_Score;
            domManuipulation.scoreBoard.textContent = `Player One: ${player1_Score} Player Two: ${player2_Score}`
          }
          gameOver = true;
          board.resetBoard();
          return; 

        }
        else{
          switchPlayers();
        }

      });
      domManuipulation.secondBtn.addEventListener("click", function(){
        gameOver = false;
        domManuipulation.banner.innerHTML = `Adding ${getActivePlayer().name}'s ${getActivePlayer().token} to the board`;
        board.dropToken(0, 1, getActivePlayer().token);
         domManuipulation.secondBtn.textContent = "";
        domManuipulation.secondBtn.textContent = `${getActivePlayer().token}`

        if(checkWin(getActivePlayer().token) && !gameOver){
          domManuipulation.banner.innerHTML = "";
          domManuipulation.banner.innerHTML = `And the winner is :${getActivePlayer().name}! Congratulations!`;
          board.printBoard();
          if(getActivePlayer().name === "Player One"){
          ++player1_Score;
          domManuipulation.scoreBoard.textContent = `Player One: ${player1_Score} Player Two: ${player2_Score}`;
          }
          else if(getActivePlayer().name === "Player Two"){
            ++player2_Score;
            domManuipulation.scoreBoard.textContent = `Player One: ${player1_Score} Player Two: ${player2_Score}`
          }
          gameOver = true;
          board.resetBoard();
          
          return; 

        }
        else{
          switchPlayers();
        }
        
        
      });
      domManuipulation.thirdBtn.addEventListener("click", function(){
        gameOver = false;
        domManuipulation.banner.innerHTML = `Adding ${getActivePlayer().name}'s ${getActivePlayer().token} to the board`;
        board.dropToken(0, 2, getActivePlayer().token);
        domManuipulation.thirdBtn.textContent = "";
        domManuipulation.thirdBtn.textContent = `${getActivePlayer().token}`
        
        if(checkWin(getActivePlayer().token) && !gameOver){
          domManuipulation.banner.innerHTML = "";
          domManuipulation.banner.innerHTML = `And the winner is :${getActivePlayer().name}! Congratulations!`;
          board.printBoard();
          if(getActivePlayer().name === "Player One"){
          ++player1_Score;
          domManuipulation.scoreBoard.textContent = `Player One: ${player1_Score} Player Two: ${player2_Score}`;
          }
          else if(getActivePlayer().name === "Player Two"){
            ++player2_Score;
            domManuipulation.scoreBoard.textContent = `Player One: ${player1_Score} Player Two: ${player2_Score}`
          }
          gameOver = true;
          board.resetBoard();
          return; 

        }
        else{
          switchPlayers();
        }

      });
       domManuipulation.fourthBtn.addEventListener("click", function(){
        gameOver = false;
        domManuipulation.banner.innerHTML = `Adding ${getActivePlayer().name}'s ${getActivePlayer().token} to the board`;
        board.dropToken(1, 0, getActivePlayer().token);
        domManuipulation.fourthBtn.textContent = "";
        domManuipulation.fourthBtn.textContent = `${getActivePlayer().token}`
        
        if(checkWin(getActivePlayer().token) && !gameOver){
          domManuipulation.banner.innerHTML = "";
          domManuipulation.banner.innerHTML = `And the winner is :${getActivePlayer().name}! Congratulations!`;
          board.printBoard();
          if(getActivePlayer().name === "Player One"){
          ++player1_Score;
          domManuipulation.scoreBoard.textContent = `Player One: ${player1_Score} Player Two: ${player2_Score}`;
          }
          else if(getActivePlayer().name === "Player Two"){
            ++player2_Score;
            domManuipulation.scoreBoard.textContent = `Player One: ${player1_Score} Player Two: ${player2_Score}`
          }
          gameOver = true;
          board.resetBoard();
          return; 

        }
        else{
          switchPlayers();
        }

      });
      domManuipulation.fifthBtn.addEventListener("click", function(){
        gameOver = false;
        domManuipulation.banner.innerHTML = `Adding ${getActivePlayer().name}'s ${getActivePlayer().token} to the board`;
        board.dropToken(1, 1, getActivePlayer().token);
        domManuipulation.fifthBtn.textContent = "";
        domManuipulation.fifthBtn.textContent = `${getActivePlayer().token}`
        
        if(checkWin(getActivePlayer().token) && !gameOver){
          domManuipulation.banner.innerHTML = "";
          domManuipulation.banner.innerHTML = `And the winner is :${getActivePlayer().name}! Congratulations!`;
          board.printBoard();
          if(getActivePlayer().name === "Player One"){
          ++player1_Score;
          domManuipulation.scoreBoard.textContent = `Player One: ${player1_Score} Player Two: ${player2_Score}`;
          }
          else if(getActivePlayer().name === "Player Two"){
            ++player2_Score;
            domManuipulation.scoreBoard.textContent = `Player One: ${player1_Score} Player Two: ${player2_Score}`
          }
          gameOver = true;
          board.resetBoard();
          return; 

        }
        else{
          switchPlayers();
        }

      });
      domManuipulation.sixBtn.addEventListener("click", function(){
        gameOver = false;
        domManuipulation.banner.innerHTML = `Adding ${getActivePlayer().name}'s ${getActivePlayer().token} to the board`;
        board.dropToken(1, 2, getActivePlayer().token);
        domManuipulation.sixBtn.textContent = "";
        domManuipulation.sixBtn.textContent = `${getActivePlayer().token}`
        
        if(checkWin(getActivePlayer().token) && !gameOver){
          domManuipulation.banner.innerHTML = "";
          domManuipulation.banner.innerHTML = `And the winner is :${getActivePlayer().name}! Congratulations!`;
          board.printBoard();
          if(getActivePlayer().name === "Player One"){
          ++player1_Score;
          domManuipulation.scoreBoard.textContent = `Player One: ${player1_Score} Player Two: ${player2_Score}`;
          }
          else if(getActivePlayer().name === "Player Two"){
            ++player2_Score;
            domManuipulation.scoreBoard.textContent = `Player One: ${player1_Score} Player Two: ${player2_Score}`
          }
          gameOver = true;
          board.resetBoard();
          return; 

        }
        else{
          switchPlayers();
        }

      });
       domManuipulation.sevenBtn.addEventListener("click", function(){
        gameOver = false;
        domManuipulation.banner.innerHTML = `Adding ${getActivePlayer().name}'s ${getActivePlayer().token} to the board`;
        board.dropToken(2, 0, getActivePlayer().token);
        domManuipulation.sevenBtn.textContent = "";
        domManuipulation.sevenBtn.textContent = `${getActivePlayer().token}`
        
        if(checkWin(getActivePlayer().token) && !gameOver){
          domManuipulation.banner.innerHTML = "";
          domManuipulation.banner.innerHTML = `And the winner is :${getActivePlayer().name}! Congratulations!`;
          board.printBoard();
          if(getActivePlayer().name === "Player One"){
          ++player1_Score;
          domManuipulation.scoreBoard.textContent = `Player One: ${player1_Score} Player Two: ${player2_Score}`;
          }
          else if(getActivePlayer().name === "Player Two"){
            ++player2_Score;
            domManuipulation.scoreBoard.textContent = `Player One: ${player1_Score} Player Two: ${player2_Score}`
          }
          gameOver = true;
          board.resetBoard(); 
          return; 

        }
        else{
          switchPlayers();
        }

      });
       domManuipulation.eightBtn.addEventListener("click", function(){
        gameOver = false;
        domManuipulation.banner.innerHTML = `Adding ${getActivePlayer().name}'s ${getActivePlayer().token} to the board`;
        board.dropToken(2, 1, getActivePlayer().token);
        domManuipulation.eightBtn.textContent = "";
        domManuipulation.eightBtn.textContent = `${getActivePlayer().token}`
        
        if(checkWin(getActivePlayer().token) && !gameOver){
          domManuipulation.banner.innerHTML = "";
          domManuipulation.banner.innerHTML = `And the winner is :${getActivePlayer().name}! Congratulations!`;
          board.printBoard();
          if(getActivePlayer().name === "Player One"){
          ++player1_Score;
          domManuipulation.scoreBoard.textContent = `Player One: ${player1_Score} Player Two: ${player2_Score}`;
          }
          else if(getActivePlayer().name === "Player Two"){
            ++player2_Score;
            domManuipulation.scoreBoard.textContent = `Player One: ${player1_Score} Player Two: ${player2_Score}`
          }

          gameOver = true;
          board.resetBoard(); 
         
          return; 

        }
        else{
          switchPlayers();
        }

      });
       domManuipulation.nineBtn.addEventListener("click", function(){
        gameOver = false;
        domManuipulation.banner.innerHTML = `Adding ${getActivePlayer().name}'s ${getActivePlayer().token} to the board`;
        board.dropToken(2, 2, getActivePlayer().token);
        domManuipulation.nineBtn.textContent = "";
        domManuipulation.nineBtn.textContent = `${getActivePlayer().token}`
        
        if(checkWin(getActivePlayer().token) && !gameOver){
          domManuipulation.banner.innerHTML = "";
          domManuipulation.banner.innerHTML = `And the winner is: ${getActivePlayer().name}! Congratulations!`;
          board.printBoard();
          if(getActivePlayer().name === "Player One"){
          ++player1_Score;
          domManuipulation.scoreBoard.textContent = `Player One: ${player1_Score} Player Two: ${player2_Score}`;
          }
          else if(getActivePlayer().name === "Player Two"){
            ++player2_Score;
            domManuipulation.scoreBoard.textContent = `Player One: ${player1_Score} Player Two: ${player2_Score}`
          }
          gameOver = true;
          board.resetBoard(); 
          return; 

        }
        else{
          switchPlayers();
        }

      });
      
      domManuipulation.reset.addEventListener("click", function(){
        domManuipulation.resetDom();
        board.resetBoard();
        board.printBoard();
      })

      
      

    
      board.printBoard();
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
      banner: document.querySelector(".banner"),
      reset: document.querySelector(".reset"),
      resetDom: function() {
         this.firstBtn.textContent = "";
         this.secondBtn.textContent = '';
         this.thirdBtn.textContent = "";
         this.fourthBtn.textContent = "";
         this.fifthBtn.textContent = "";
         this.sixBtn.textContent = "";
         this.sevenBtn.textContent = "";
         this.eightBtn.textContent = "";
         this.nineBtn.textContent = "";
      }
    }
    return {
      playRound,
      getActivePlayer,
      
    };
    
    
}
const game = GameController();
game.playRound();
