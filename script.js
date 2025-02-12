let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#comp_score");

const gencompChoice = () =>{
    const options = ["rock","paper","scisscor"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx]

}
const drawgame = () =>{
    console.log("game was draw");
    msg.innerHTML="Game was draw . Play Again";
    msg.style.backgroundColor="rgb(233, 79, 174)";

}
const showwinner = (userwin ,userChoice,compChoice) =>{
    if (userwin==true){
        //console.log(" Congrats! You Win");
        userScore++;
        userscorepara.innerHTML=userScore;
        msg.innerHTML='Congrats! You Win';
        msg.style.backgroundColor="green";
    }else{
        //console.log("Sorry! You lose");
        compScore++;
        compscorepara.innerHTML=compScore;
        msg.innerHTML="Sorry! You Lose";
        msg.style.backgroundColor="red";
    }
}
const game = (userChoice) =>{
    console.log("user choice =",userChoice);
    const compChoice = gencompChoice();
    console.log("computer choice = " ,compChoice);
    if (userChoice === compChoice){
        drawgame();
    }else{
        let userwin =true;
        if (userChoice=="rock"){
            userwin = compChoice==="paper"? false : true;
        } else if (userChoice =="paper"){
            userwin = compChoice==="scisscor"? false: true;

        }else {
            userwin = compChoice==="rock"? false: true;
        }
        
        showwinner(userwin ,userChoice,compChoice);

        }      
    }
     

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked" ,userChoice);
        game(userChoice);
    })

})
