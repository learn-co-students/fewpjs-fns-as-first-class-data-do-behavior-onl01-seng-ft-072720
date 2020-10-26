/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  let theTime = string.split(':');
  if (theTime[0] < 12) {
    return "Good Morning";
  } 
  if (theTime[0] >= 12 && theTime[0] <= 17) {
    return "Good Afternoon";
  }
  if (theTime[0] > 17) {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  document.getElementById("greeting").innerText = greeting;
}
