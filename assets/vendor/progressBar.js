// Dynamic Progress Bar 

function sqMove(){   //Function to move the Progress Bar
    var sqElement = document.getElementById("sqBar"); //sqBar is connected to the progressBar itself
    var width = 1; //
    var id = setInterval(frame, 10); //Lower number, the faster the bar goes
    function frame(){
      if (width >=80) { //if the width is 80%, adjust to where you want it to stop 
        clearInterval(id);  // stops the execution of the function in the setInterval
      } else {  //if not (or else)
        width++; //it will put 1 extra width (if passing the IF)
        sqElement.style.width = width + '%';
        sqElement.innerHTML = width * 1 + '%'; //make the label % go up
        document.getElementById("sqlabelOutside").innerHTML = width * 1 + '%'; //If wanting it to "count" outside the Progress Bar
      }
    }
  }