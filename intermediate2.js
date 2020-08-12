let answer = ["b", "c", "d", "a", "a", "a"];
let score1 = 0;

let stars1 = 0;
let level = document.getElementById("levels").innerHTML;

var numberOfButton = 4;
for (var i = 0; i < numberOfButton; i++) {

    document.querySelectorAll(".firstbutton")[i].addEventListener("click", function() {
      
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


    document.querySelectorAll(".secondbutton")[i].addEventListener("click", function() {
  
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
          if(buttonInnerHTML === "a"){
        
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
          if(buttonInnerHTML === "a"){
              
              score1++;
              stars1 += 3;
                        
          }
          else{
         
          
           score1--; 
           stars1 += 0;
          }
         
      });
   
    
}

      
let state=0;
let istars1 = 0;
let istars2 = 0;
let istars3 = 0;
let istars4 = 0;
let istars5 = 0;
let istars6 = 0;
document.querySelector(".resultButton").addEventListener("click", function() {
  state=1;
  
    
  alert("Your Score is " + score1 + "<br>" + " You have earned 🌟🌟= " + stars1 )
  document.querySelector(".inter").innerHTML = " Your Score is " + score1 + " You have earned 🌟🌟 " + stars1 ;
  document.querySelector(".inter").style.color="white";
 
console.log(level);

  if(level === "one"){
    istars1 = stars1;
    console.log("istars1" + istars1);
    localStorage.setItem("istars1",istars1);
  }
  else if(level === "two"){
    istars2 = stars1;
    localStorage.setItem("istars2",istars2);
  }
  else if(level === "three"){
    istars3 = stars1;
    localStorage.setItem("istars3", istars3);
  }
  else if(level === "four"){
    istars4 = stars1;
    localStorage.setItem("istars4",istars4);
  }
  else if(level === "five"){
   istars5 = stars1;
   console.log(istars5);
   localStorage.setItem("istars5",istars5);    
  }
  else{
    istars6 = stars1;
    console.log(istars6);
    localStorage.setItem("istars6",istars6);
  }
  
});
document.querySelector(".mainButton").addEventListener("click", function() {
  if(state===1){
    if(level!== "three") {
      document.querySelector(".inter").
      innerHTML = ` Your Score is ${score1} and you have earned 🌟🌟 ${stars1} <br>
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
      innerHTML = ` Your Score is ${score1} and you have earned 🌟🌟 ${stars1} <br>
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
