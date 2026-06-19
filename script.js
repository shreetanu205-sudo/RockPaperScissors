let userScore=0;
let compScore=0;

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".all");

const genCompChoice=()=>{
    const options=["Rock","Paper","Scissors"];
    let randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    let compChoice=genCompChoice();
    console.log("comp-chocie=",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="Rock"){
        userWin=compChoice==="Scissors"?true:false;
        }
        else if(userChoice==="Paper"){
            userWin=compChoice==="Rock"?true:false;
        }
        else{
            userWin=compChoice==="Paper"?true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    })
})


let win=document.querySelector("#msg");

const drawGame=()=>{
    console.log("Game was drawn!");
    
    win.style.backgroundColor="blue";
    win.innerText=" Game Draw! ";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        win.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        win.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        win.innerText=`You lose! ${userChoice} beats ${compChoice}`;
        win.style.backgroundColor="Red";
    }
}

//changing mode

let back=document.querySelector("body");
let m=document.querySelector(".mode");
let icon=document.querySelector("#modeId");
let header=document.querySelector(".navbar");
let s=document.querySelectorAll(".score");
let mesgBox=document.querySelector("#msg");

let darkMode=false;

m.addEventListener("click",()=>{
    if(!darkMode){
        back.style.backgroundColor="rgb(3, 27, 27)";
        icon.className="fa-regular fa-moon";
        s.forEach(score=>{
            score.style.color="White";
        })
        mesgBox.style.backgroundColor="White";
        mesgBox.style.color="Black";
        mesgBox.style.boxShadow="0 0 7px white";
        header.style.backgroundColor="White";
        header.style.color="black";
        darkMode=true;
    }
    else{
        back.style.backgroundColor="White";
        icon.className="fa-solid fa-moon";
        s.forEach(score=>{
            score.style.color="Black";
        })
        darkMode=false;
        mesgBox.style.backgroundColor="Black";
        mesgBox.style.color="White";
        header.style.backgroundColor="rgb(3, 27, 27)";
        header.style.color="White";
    }
})
