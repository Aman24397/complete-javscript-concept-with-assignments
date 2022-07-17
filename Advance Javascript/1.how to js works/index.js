

document.querySelector("#roll").addEventListener("click" ,myFUn)


function myFUn(){
    event.preventDefault();
    // console.log("amandeep");

    let dice1=Math.ceil(Math.random()*6);
    let dice2=Math.ceil(Math.random()*6);
    let dice3=Math.ceil(Math.random()*6);
    console.log(dice1,dice2,dice3)
    
    let diceA=document.querySelector("#member-1").innerText=dice1;
    let diceB=document.querySelector("#member-2").innerText=dice2;
    let diceC=document.querySelector("#member-3").innerText=dice3;
    

    // for winner
    if(diceA > diceB && diceA > diceC)
    {
        document.querySelector("#member-1").style.backgroundColor="green"
        let winner=document.querySelector("#winner").innerText=diceA;

        // console.log(winner)
    }
    else if(diceB > diceA && diceB > diceC)
    { 
        document.querySelector("#member-2").style.backgroundColor="green"
        let winner=document.querySelector("#winner").innerText=diceB;
        // console.log(winner)
    }
    else
    {
        document.querySelector("#member-3").style.backgroundColor="green"
        let winner=document.querySelector("#winner").innerText=diceC; 
    }
    

//    2nd scorer

if((diceA < diceB && diceA >diceC) || (diceA > diceB && diceA < diceC) )
{
    document.querySelector("#member-1").style.backgroundColor="yellow";
}
if((diceB < diceA && diceB >diceC) || (diceB > diceA && diceB < diceC) )
{
    document.querySelector("#member-2").style.backgroundColor="yellow";
}

if((diceC < diceB && diceC > diceA) || (diceC > diceB && diceC < diceA) )
{
    document.querySelector("#member-3").style.backgroundColor="yellow";
}
  

  
// least scorer 

if(diceA < diceB && diceA <diceC)
{
    document.querySelector("#member-1").style.backgroundColor="red";
}
if(diceB < diceA && diceB < diceC)
{
    document.querySelector("#member-2").style.backgroundColor="red";
}
if(diceC < diceB && diceC < diceA)
{
    document.querySelector("#member-3").style.backgroundColor="red";
}


// for draw 

if(diceA == diceB )
{
    document.querySelector("#member-1").style.backgroundColor="blue"; 
    document.querySelector("#member-2").style.backgroundColor="blue";
}
if(diceB==diceC)
{
    document.querySelector("#member-2").style.backgroundColor="blue"; 
    document.querySelector("#member-3").style.backgroundColor="blue";
}
if(diceC==diceA)
{
    document.querySelector("#member-3").style.backgroundColor="blue"; 
    document.querySelector("#member-1").style.backgroundColor="blue"; 
}






















}