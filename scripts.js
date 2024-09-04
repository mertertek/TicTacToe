let playerMove = "X"

let game = ['','','','','','','','','']

const win = [
    [0,1,2],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [0,3,6]
]

function infoMessage(){
    let info = document.querySelector("#info");
    info.innerHTML = `It's ${playerMove}'s Turn`;
}

function changePlayer(){
    if (playerMove == 'X'){
        playerMove = 'O'
    }else {
        playerMove ='X'
    }
}


function squareMark(index){
    let mark = document.getElementById(index);
    if (mark.innerHTML === ''){
        mark.innerHTML = `${playerMove}`;
        game[index] = playerMove;
        console.log(game);
        if (winCheck()){
            document.querySelector("#info").innerHTML = `${playerMove} wins!`;
        } else if (drawCheck()){
            document.querySelector("#info").innerHTML = "It's draw!";
        } else {
            changePlayer();
            infoMessage();
        }
    }
}




function winCheck(){

    for (let winMoves of win){
        if (winMoves.every(val => game[val] == playerMove)){
            return true
        }
    }
    return false
}

function drawCheck(){
    if (game.every(move => move !==''))
        return true
}



function reset(){
    game=['','','','','','','','','']
    playerMove = 'X'
    let resetElement = document.querySelectorAll(".containerElement")
    resetElement.forEach(element => element.textContent="");
}



