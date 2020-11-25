/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let num = parseInt(string)
  let phrase = ""
  if ( num < 12){
    phrase = "Good Morning";
  }
  else if (num >= 17) {
    phrase = "Good Evening";
  }
  else if (num > 12) {
    phrase = "Good Afternoon";
  }
  return phrase 
}

function displayMessage(string) {
  let update = document.getElementById("greeting");
  update.textContent = string;
}