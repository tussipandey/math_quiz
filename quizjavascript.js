var playing = false;
var score;
var action;
var time;
var correct;
var wrong;

document.getElementById("start").onclick = function () {
   
     
    if ( playing == true ) {
        location.reload();
    }else{
         window.alert("Choose your level");
         document.getElementById("level").style.display = "block";
      
       
       
        document.getElementById("easy").onclick =function(){
            
          document.getElementById("level").style.display = "none";
        score = 0;
        playing = true;
        document.getElementById("scorevalue").innerHTML = score;
        
        document.getElementById("time").style.display = "block";
        time = 60 ;
         
        document.getElementById("gameover").style.display="none";
        
        document.getElementById("timeremain").innerHTML = time;
        
        document.getElementById("start").innerHTML = "Reset game";
        countdown();
        
        generate();
        }
    
       
        
        document.getElementById("medium").onclick =function(){
            
          document.getElementById("level").style.display = "none";
        score = 0;
        playing = true;
        document.getElementById("scorevalue").innerHTML = score;
        
        document.getElementById("time").style.display = "block";
        time = 60 ;
         
        document.getElementById("gameover").style.display="none";
        
        document.getElementById("timeremain").innerHTML = time;
        
        document.getElementById("start").innerHTML = "Reset game";
        countdown();
        
        generate1();
            
        }
        document.getElementById("hard").onclick =function(){
            
          document.getElementById("level").style.display = "none";
        score = 0;
            wrong=0;
        playing = true;
        document.getElementById("scorevalue").innerHTML = score;
        
        document.getElementById("time").style.display = "block";
        time = 60 ;
         
        document.getElementById("gameover").style.display="none";
        
        document.getElementById("timeremain").innerHTML = time;
        
        document.getElementById("start").innerHTML = "Reset game";
        countdown();
        
        generate2();
        }
        }
}
    
        
    

for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
        if(playing == true){
            if(this.innerHTML == correct){
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                document.getElementById("wrong").style.display="none";
                 document.getElementById("correct").style.display="block";
                setTimeout(function(){
                     document.getElementById("correct").style.display="none";
                 
                },2000);
                generate();
            }else{
                 wrong++; 
                if(wrong>1){
                    window.alert("Sorry Game over!!!");
                }
               
                 document.getElementById("correct").style.display="none";
                 document.getElementById("wrong").style.display="block";
               
                setTimeout(function(){
                     document.getElementById("wrong").style.display="none";
                 
                },2000);
                
            }
        }
    }
}
        
       function countdown(){
           action = setInterval(function(){
               time -= 1;
                document.getElementById("timeremain").innerHTML = time;
               if(time == 0){
                   clearInterval(action);
                    
                document.getElementById("gameover").style.display = "block";  
                   var hs = document.getElementById("highestscore").innerText; 
                   
                 if(score > hs){
                   document.getElementById("highestscore").innerHTML=score;
               }
                  if(score < hs){
                   document.getElementById("gameover").innerHTML = "<p>GAME OVER</p><p>YOUR SCORE IS " + score + ".</p>";
                  }
                   else{
                       document.getElementById("gameover").innerHTML = "<p>GAME OVER</p><p>CONGRATS!!!NEW HIGH SCORE!! " + score + ".</p>";
                   }
                
                
                   document.getElementById("time").style.display ="none";
                   document.getElementById("correct").style.display= "none";
                     document.getElementById("level").style.display = "none";
                   document.getElementById("wrong").style.display= "none";
                   playing = false;
                   document.getElementById("start").innerHTML ="Start Game";
               }
           }, 1000);
       }
  function generate(){
      var x = 10+Math.round(9*Math.random());
       var y = 1+Math.round(9*Math.random());
      correct = x*y;
      document.getElementById("question").innerHTML=x + "x" + y;
      var correctpos = 1+Math.round(3*Math.random());
      
      document.getElementById("box"+correctpos).innerHTML = correct;
      var ans = [correct];
      for(i=1; i<5; i++){
          if( i != correctpos){
              var wrongans;
              do{
                  wrongans =(10+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
              }while(ans.indexOf(wrongans)> -1)
                  
              document.getElementById("box"+i).innerHTML = wrongans;
              ans.push(wrongans);
          }
      }
  }
     function generate1(){
      var x = 1+Math.round(99*Math.random());
       var y = 1+Math.round(99*Math.random());
      correct = x*y;
      document.getElementById("question").innerHTML=x + "x" + y;
      var correctpos = 1+Math.round(3*Math.random());
      
      document.getElementById("box"+correctpos).innerHTML = correct;
      var ans = [correct];
      for(i=1; i<5; i++){
          if( i != correctpos){
              var wrongans;
              do{
                  wrongans =(1+Math.round(99*Math.random()))*(1+Math.round(99*Math.random()));
              }while(ans.indexOf(wrongans)> -1)
                  
              document.getElementById("box"+i).innerHTML = wrongans;
              ans.push(wrongans);
          }
      }
  }
    

function generate2(){
      var x = 1+Math.round(999*Math.random());
       var y = 1+Math.round(999*Math.random());
      correct = x*y;
      document.getElementById("question").innerHTML=x + "x" + y;
      var correctpos = 1+Math.round(3*Math.random());
      
      document.getElementById("box"+correctpos).innerHTML = correct;
      var ans = [correct];
      for(i=1; i<5; i++){
          if( i != correctpos){
              var wrongans;
              do{
                  wrongans =(1+Math.round(999*Math.random()))*(1+Math.round(999*Math.random()));
              }while(ans.indexOf(wrongans)> -1)
                  
              document.getElementById("box"+i).innerHTML = wrongans;
              ans.push(wrongans);
          }
      }
  }
    



