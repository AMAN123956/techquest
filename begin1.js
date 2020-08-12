
let score = 0;
let stars = 0;
var numberOfButton = 4;
let level = document.getElementById("levels").innerHTML;

for (var i = 0; i < numberOfButton; i++) {

    document.querySelectorAll(".firstbutton")[i].addEventListener("click", function() {
  
      var buttonInnerHTML = this.innerHTML;
      console.log(buttonInnerHTML);
        if(buttonInnerHTML === "b"){
           
            score++;
            stars += 3;           
        }
        else{
         
          

         score--;
         stars += 0;
        }
        
    });


    document.querySelectorAll(".secondbutton")[i].addEventListener("click", function() {
  
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
          if(buttonInnerHTML === "c"){
             
              score++;
              stars += 3;          
          }
          else{
         
           score--; 
           stars += 0;
          }
          
      });

      document.querySelectorAll(".thirdbutton")[i].addEventListener("click", function() {
  
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
          if(buttonInnerHTML === "a"){
             
              score++;
              stars += 3;
                        
          }
          else{
         
          
           score--; 
           stars += 0;
          }
         
      });
      document.querySelectorAll(".fourthbutton")[i].addEventListener("click", function() {
  
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
          if(buttonInnerHTML === "a"){
              
              score++;
              stars += 3;
                        
          }
          else{
         
          
           score--; 
           stars += 0;
          }
         
      });
      document.querySelectorAll(".fifthbutton")[i].addEventListener("click", function() {
  
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
          if(buttonInnerHTML === "a"){
           
              score++;
              stars += 3;
                        
          }
          else{
         
          
           score--; 
           stars += 0;
          }
         
      });
  
    
}




let state=0;
let stars1 = 0;
let stars2 = 0;
let stars3 = 0;
let stars4 = 0;
let stars5 = 0;
let stars6 = 0;
document.querySelector(".resultButton").addEventListener("click", function() {
  state=1;
    
  alert("Your Score is " + score + " You have earned 🌟🌟 " + stars)
   document.querySelector(".inter").innerHTML = " Your Score is " + score + " You have earned 🌟🌟 " + stars ;
  document.querySelector(".inter").style.color="white";
 
console.log(level);

  if(level === "one"){
    stars1 = stars;
    console.log("stars1" + stars1);
    localStorage.setItem("stars1",stars1);
  }
  else if(level === "two"){
    stars2 = stars;
    localStorage.setItem("stars2",stars2);
  }
  else if(level === "three"){
    stars3 = stars;
    localStorage.setItem("stars3", stars3);
  }
  else if(level === "four"){
     stars4= stars;
    localStorage.setItem("stars4",stars4);
  }
  else if(level === "five"){
   stars5 = stars;
   console.log(stars5);
   localStorage.setItem("stars5",stars5);    
  }
  else{
    stars6 = stars;
    console.log(stars6);
    localStorage.setItem("stars6",stars6);
  }
  
});
document.querySelector(".mainButton").addEventListener("click", function() {
  if(state===1){
    if(level!== "one") {
      document.querySelector(".inter").
      innerHTML = ` Your Score is ${score} and you have earned 🌟🌟 ${stars} <br>
      Correct Answers Are:<br>
      1-(b) <br>
      2-(c) <br>
      3-(a) <br>
      4-(a) <br>
      5-(a) 
      `;
      document.querySelector(".inter").style.color="white";
    }
    else {
      document.querySelector(".inter").
      innerHTML = ` Your Score is ${score} and you have earned 🌟🌟 ${stars} <br>
      Correct Answers Are:<br>
      1-(b) <br>
      2-(a) <br>
      3-(c) <br>
      4-(a) <br>
      5-(a) 
      `;
      document.querySelector(".inter").style.color="white";
     
    }
  }

  else{
    alert("Cheating is a bad habit,First attempt questions!!");
  }
});

