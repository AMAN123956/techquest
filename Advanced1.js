let answer = ["b", "c", "d", "a", "a", "a"];
let score1 = 0;

let stars1 = 0;
let level = document.getElementById("levels").innerHTML;
var numberOfButton = 4;
for (var i = 0; i < numberOfButton; i++) {

    document.querySelectorAll(".firstbutton")[i].addEventListener("click", function() {
      
      var buttonInnerHTML = this.innerHTML;
      console.log(buttonInnerHTML);
        if(buttonInnerHTML === "d"){
           
            score1++;
            stars1 += 3;           
        }
        else{
         
          

         score1--;
         stars1 += 0;
        }
       
    });


    document.querySelectorAll(".secondbutton")[i].addEventListener("click", function() {
  
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
          if(buttonInnerHTML === "d"){
              
              score1++;
              stars1 += 3;          
          }
          else{
        
           score1--; 
           stars1 += 0;
          }
         
          
      });

      document.querySelectorAll(".thirdbutton")[i].addEventListener("click", function() {
  
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
          if(buttonInnerHTML === "a"){
              
              score1++;
              stars1 += 3;
                        
          }
          else{
         
          
           score1--; 
           stars1 += 0;
          }
         
      });
      document.querySelectorAll(".fourthbutton")[i].addEventListener("click", function() {
  
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
          if(buttonInnerHTML === "c"){
            
              score1++;
              stars1 += 3;
                        
          }
          else{
         
          
           score1--; 
           stars1 += 0;
          }
         
      });
      document.querySelectorAll(".fifthbutton")[i].addEventListener("click", function() {
  
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
          if(buttonInnerHTML === "b"){
              
              score1++;
              stars1 += 3;
                        
          }
          else{
         
          
           score1--; 
           stars1 += 0;
          }
         
      });
   
    
}

      
let state;
let astars1=0;
let astars2=0;
let astars3=0;
document.querySelector(".resultButton").addEventListener("click", function() {
  state=1;
  
  alert("Your Score is: " + score1 + " and you have earned " + stars1 +" 🌟🌟");
  document.querySelector(".inter").innerHTML = " Your Score is " + score1 + " You have earned 🌟🌟 " + stars1 ;
  document.querySelector(".inter").style.color="white";

 
   if(level === "one")
   {
       astars1 = stars1;
       localStorage.setItem("astars1",astars1);
   }
   else if(level === "two"){
       astars2 = stars1;
       localStorage.setItem("astars2",astars2);
   }
   else {
        astars3 = stars1;
        localStorage.setItem("astars3",astars3);
   }
});
document.querySelector(".mainButton").addEventListener("click", function() {
  if(state===1){
      document.querySelector(".inter").
      innerHTML = ` Your Score is ${score1} and you have earned 🌟🌟 ${stars1} <br>
      Correct Answers Are:<br>
      1-(d) <br>
      2-(d) <br>
      3-(a) <br>
      4-(c) <br>
      5-(b) 
      `;
      document.querySelector(".inter").style.color="white";
    }
    
  else{
    alert("Cheating is a bad habit,First attempt questions!!");
  }
});
