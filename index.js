/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  const hour = timeString.split(":")[0];
  const parsed = parseInt(hour);
  if ( parsed < 12 ) {
    return "Good Morning";
  }
  if (parsed >= 12 && parsed < 17 ) {
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
}

function displayMessage(string) {
  let greeting = document.getElementById('greeting');
  greeting.innerText = `${string}`;
}