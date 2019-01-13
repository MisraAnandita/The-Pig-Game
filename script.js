var roundscore;
var scores;
var activeplayer;

init();
    
var x= document.querySelector('.button-roll');
 var prev=0,flag=0;
x.addEventListener("click", function () {
   
    var dice = Math.floor((Math.random()* 6)) +1;
    
    var dicedom=document.querySelector(".dice");
    dicedom.style.display= 'block';
     dicedom.src= "dice-"+dice+'.jpg';
    if(prev== dice)
        flag=1;
        
    if(dice!==1 && flag!=1)
        {
    roundscore= roundscore +dice;
    document.querySelector('#score-' + activeplayer).textContent= roundscore;
            if(roundscore + scores[activeplayer]>=50)
                {
                    
                    scores[activeplayer]+= roundscore;
                    document.querySelector('#totalscore-' + activeplayer).textContent= scores[activeplayer]; 
                    var winner= activeplayer +1;
                    document.querySelector('#winner').style.display= 'block';
                    document.querySelector('#winner').textContent="Player " +  winner + " is the winner";
                    document.querySelector(".button-roll").style.display= 'none';
                     document.querySelector(".button-hold").style.display= 'none';
                    document.querySelector(".dice").style.display= 'none';
                     
                    }
                prev=dice;
   // console.log(dice);
        }
    else if(flag==1)
        {
            scores[activeplayer]=0;
            roundscore=0;
            document.querySelector('#totalscore-' + activeplayer).textContent= scores[activeplayer]; 
            document.querySelector('#score-' + activeplayer).textContent= roundscore;
             if( activeplayer == 0)
                 {
                activeplayer=1;
                      document.querySelector('.Player1').classList.remove('active');
                     document.querySelector('.Player2').classList.add('active');
                     document.querySelector('.player1heading').classList.remove('heading');
                     document.querySelector('.player2heading').classList.add('heading');
                     
                 }
            
            else
                {
                activeplayer=0;
                    document.querySelector('.Player2').classList.remove('active');
                     document.querySelector('.Player1').classList.add('active');
                    document.querySelector('.player2heading').classList.remove('heading');
                     document.querySelector('.player1heading').classList.add('heading');
                   
                }
            prev=0;
            
        }
    else if(dice==1)
        {
            roundscore=0;
            document.querySelector('#score-' + activeplayer).textContent= roundscore;
            if( activeplayer == 0)
                {
                activeplayer=1;
                    document.querySelector('.Player1').classList.remove('active');
                     document.querySelector('.Player2').classList.add('active');
                    document.querySelector('.player1heading').classList.remove('heading');
                     document.querySelector('.player2heading').classList.add('heading');
                }
            else
                {
                activeplayer=0;
                     document.querySelector('.Player2').classList.remove('active');
                     document.querySelector('.Player1').classList.add('active');
                    document.querySelector('.player2heading').classList.remove('heading');
                     document.querySelector('.player1heading').classList.add('heading');
                }
            prev=0;
        }
    

   
    flag=0;
 } );

var y= document.querySelector('.button-hold');
y.addEventListener("click", function ()
                   {
    prev=0;
    scores[activeplayer]+= roundscore;
    roundscore=0;
     document.querySelector('#score-' + activeplayer).textContent= roundscore;
   document.querySelector('#totalscore-' + activeplayer).textContent= scores[activeplayer]; 
    if( activeplayer == 0)
        {
                activeplayer=1;
            document.querySelector('.Player1').classList.remove('active');
                     document.querySelector('.Player2').classList.add('active');
            document.querySelector('.player1heading').classList.remove('heading');
                     document.querySelector('.player2heading').classList.add('heading');
        }
            else
                {
                activeplayer=0;
                    document.querySelector('.Player2').classList.remove('active');
                     document.querySelector('.Player1').classList.add('active');
                    document.querySelector('.player2heading').classList.remove('heading');
                     document.querySelector('.player1heading').classList.add('heading');
                }
    
});

var z= document.querySelector('.button-new');
z.addEventListener("click", init);

function init()
{
  roundscore=0;
scores=[0,0];
 activeplayer=0;
    prev=0;
    document.querySelector(".dice").style.display= 'none';
    document.querySelector(".button-roll").style.display= 'block';
                     document.querySelector(".button-hold").style.display= 'block';
     document.querySelector('#winner').style.display= 'none';
     document.querySelector('#score-0').textContent= '0';
    document.querySelector('#score-1').textContent= '0';
    document.querySelector('#totalscore-0').textContent= '0';
    document.querySelector('#totalscore-1').textContent= '0';  
     document.querySelector('.Player2').classList.remove('active');
                     document.querySelector('.Player1').classList.add('active');
    document.querySelector('.player2heading').classList.remove('heading');
                     document.querySelector('.player1heading').classList.add('heading');
    
}
