/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(string) {
  const time = parseInt(string); 

  if (time < 12) return "Good Morning";
  if (time > 17) return "Good Evening";
  return "Good Afternoon";
} 

/* Write your implementation of displayMessage() */
function displayMessage(greeting) { 
  document.getElementById('greeting').innerText = greeting;
}