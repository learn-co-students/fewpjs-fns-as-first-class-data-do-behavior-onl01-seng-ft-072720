/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let diffTime = time.split(":");
  let newTime = diffTime.join("")
  let intTime = parseInt(newTime)

  if (intTime < 1200) {
    return "Good Morning"
  }

  else if (intTime >= 1200 && intTime <=1700) {
    return "Good Afternoon"
  }

  else if (intTime > 1700) {
    return "Good Evening"
  }

  else {
    return "Didnt Work"
  }

}

function displayMessage(string) {
  document.querySelector("#greeting").innerText = (string)
}

/* Write your implementation of displayMessage() */
