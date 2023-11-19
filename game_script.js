const hands= [...document.querySelectorAll(".options img")];
const playBtn=document.querySelector('.play');
const userHandPic= document.querySelector(".user img")
const compHandPic= document.querySelector(".computer img")
const user=document.querySelector("div.user");
const comp=document.querySelector("div.computer");
userHandPic.src="";
compHandPic.src="";
let active=true;


const results = {
    games:0,
    wins:0,
    losses:0,
    draws:0
}

const handChosen={
    user:'',
    comp:'',
}

function selectHand(e){
    if(active){
    handChosen.user=e.target.dataset.hand;
    hands.forEach(hand =>hand.parentNode.style.boxShadow="");
    this.parentNode.style.boxShadow="0 0 4px 4px red";
    userHandPic.src=`hands/${handChosen.user}.svg`;}
    

}

function warning(){
  const popUp=document.querySelector('.warning-blur');
  popUp.style.display="flex";

}
document.querySelector('.close-popUp').addEventListener("click",()=>{
    const popUp=document.querySelector('.warning-blur');
    popUp.style.display="none";
})

function compChoice(){
    handChosen.comp= hands[Math.floor(Math.random()*hands.length)].dataset.hand;
    console.log(handChosen.comp)
    compHandPic.src=`hands/${handChosen.comp}.svg`;
}
function checkResult(){

switch(handChosen.user+handChosen.comp){
    case 'paperrock':
    case 'rockscissors':
    case 'scissorspaper':
        console.log('user wins');
        user.style.animation="winner 1.5s linear";
        results.wins++;
        document.querySelector("span.wins-number").innerHTML=results.wins;


    break;
    case 'rockpaper':
    case 'scissorsrock':
    case 'paperscissors':
        console.log('comp wins');
        comp.style.animation="winner 1.5s linear";
        results.losses++;
        document.querySelector("span.losses-number").innerHTML=results.losses;
    break;
    default:
    console.log('it"s a draw');
    comp.style.animation="winner 1.5s linear";
    user.style.animation="winner 1.5s linear";
    results.draws++;
    document.querySelector("span.draws-number").innerHTML=results.draws;
}

    results.games++
    document.querySelector("span.games-number").innerHTML=results.games;
}

function reset(){
    active=false;
    hands.forEach(hand=> hand.parentNode.style.boxShadow="");
    setTimeout(()=>{  
    comp.style.animation="";
    user.style.animation="";
    compHandPic.src="";
    userHandPic.src="";
    handChosen.user="";
    handChosen.comp="";
    active=true;},2000);

    
  
}

function game(){
    if(!handChosen.user) return warning();
    compChoice();
    checkResult();
    reset();
    
   

}






hands.forEach(hand => hand.addEventListener('click',selectHand));
playBtn.addEventListener('click',game);