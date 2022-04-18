let music = new Audio("music.mp3");
let turnMusic = new Audio("ting.mp3");
let gameOverMusic = new Audio("gameover.mp3");

let turn = "X";
let gameOver = false;

//function to change turn
const changeTurn = () =>{

    return turn === "X"?"0":"X"
}

// function to check for a win
const checkWin = () =>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if(boxtexts[e[0]].innerText === boxtexts[e[1]].innerText && boxtexts[e[1]].innerText === boxtexts[e[2]].innerText && boxtexts[e[0]].innerText !=="" ){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + "Won !";
            gameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        }
    })
}

//game logic
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
            }            
        }
    })
})

//adding reset functionality
reset.addEventListener('click' , ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})