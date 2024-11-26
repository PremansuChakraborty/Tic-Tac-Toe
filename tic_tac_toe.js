let boxes=document.querySelectorAll(".box");
let resetBot=document.querySelector(".reset");
let winner=document.querySelectorAll(".winner");
let reset=document.querySelector("#reset");
let newGame=document.querySelector("#newGame");
var clickAudio = new Audio("popo.mp3");
var winnerAudio = new Audio("yeah.mp3");
var buttonAudio = new Audio("good.mp3");
var drawAudio = new Audio("ohno.mp3");
let namePlayer1=document.querySelector("#input1")
let namePlayer2=document.querySelector("#input2")
let playerTurn=document.querySelector("#turn")

let playButton=document.querySelector("#play");
let form=document.querySelectorAll(".form");
let main=document.querySelectorAll(".main");

let scoreName=document.querySelectorAll(".playerName");
let score=document.querySelectorAll(".playerScore");
let scoreReset=document.querySelector("#scoreReset");

let player=['0','X'];
let turn=0;
let moveCount=0;

let playerName=["Player1","Player2"];

playButton.addEventListener("click",()=>{
    buttonAudio.load();
    buttonAudio.play();

    console.log(namePlayer1.value);
    console.log(namePlayer2.value);
    if(namePlayer1.value){
        playerName[0]=namePlayer1.value;
        scoreName[0].innerText=namePlayer1.value;
    }
    if(namePlayer2.value){
        playerName[1]=namePlayer2.value;
        scoreName[1].innerText=namePlayer2.value;
    }
    playerTurn.innerText=`${playerName.length!=0?playerName[turn]:null} play your next move`;
     form[0].style.display="none";
     reset.style.display="flex";
     main[0].style.display="flex";
     console.log("Play");
     console.log(playerName)
    }
)
boxes.forEach((box)=>{
    console.log("fhfhfgfg",playerName)
    console.log(turn)
    box.addEventListener("click",()=>{
    playerTurn.innerText=`${playerName.length!=0?playerName[(turn+1)%2]:null} play your next move`;
    console.log("box was clicked.");
    clickAudio.load();
    clickAudio.play();
    box.innerText=player[turn];
    if(turn==1) turn=0;
    else turn=1;
    box.disabled=true;
    moveCount++;
    checkWinner((turn+1)%2);
    console.log(moveCount);
    if(moveCount===9) draw();
}
)
}
)


let winningPattern=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

function checkWinner(trun){
    for(pattern of winningPattern){
        if(boxes[pattern[0]].innerText===player[trun] && boxes[pattern[0]].innerText===boxes[pattern[1]].innerText && boxes[pattern[1]].innerText===boxes[pattern[2]].innerText){
            console.log("check")
            winner[0].innerText="Winner is:"+playerName[trun];
            score[(turn+1)%2].innerText=Number(score[(turn+1)%2].innerText)+1;
            winner[0].style.display="block";
            newGame.style.display="block";
            playerTurn.style.display="none";
            winnerAudio.load();
            winnerAudio.play();
            boxes.forEach( (box)=>{
                box.disabled=true;
            })
        }
    }
}
function draw(){
 

        playerTurn.style.display="none";
        winner[0].innerText=`We have a Draw between ${playerName[0]} & ${playerName[1]}` ;
        drawAudio.load();
        drawAudio.play();
        winner[0].style.display="block";
        newGame.style.display="block";
  
}


reset.addEventListener("click",()=>{
    buttonAudio.load();
    buttonAudio.play();
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        moveCount=0;
        console.log(moveCount);
    })
})

newGame.addEventListener("click",()=>{
    buttonAudio.load();
    buttonAudio.play();
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        moveCount=0;
        console.log(moveCount);
    }),
    winner[0].style.display="none";
    newGame.style.display="none";
    playerTurn.style.display="block";
})

scoreReset.addEventListener("click",()=>{
    console.log("reset button");
    buttonAudio.load();
    buttonAudio.play();
    score[0].innerText=0;
    score[1].innerText=0;
})


// Get the button element
const toggleButton = document.getElementById("toggleButton");

// Check if dark mode is saved in localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "Light Mode";
}

// Add event listener to toggle dark mode
toggleButton.addEventListener("click", () => {
    // Toggle the dark mode class on the body
    document.body.classList.toggle("dark-mode");

    // Check if dark mode is enabled and update localStorage
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Light Mode";
        localStorage.setItem("darkMode", "enabled");
    } else {
        toggleButton.textContent = "Dark Mode";
        localStorage.setItem("darkMode", "disabled");
    }
});
