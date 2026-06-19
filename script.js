let userScore=0;
let compScore=0;

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
        win.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        win.style.backgroundColor="green";
    }
    else{
        win.innerText=`You lose! ${userChoice} beats ${compChoice}`;
        win.style.backgroundColor="Red";
    }
}
