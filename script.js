const ticTac = (function (game, player) {
     const gameboard = () =>{
        let board = [];
        const add = (marker) => board.push(marker);
        const reset = () => {board.length = 0;};

        return {add, reset};
     };

     const players = (player) =>({
        player
     });

     return { gameboard, players};

})();

const board = ticTac.gameboard();
const player1 = ticTac.players("player 1");
board.add("x");
console.log(board);
console.log("hey");
console.log(player1);