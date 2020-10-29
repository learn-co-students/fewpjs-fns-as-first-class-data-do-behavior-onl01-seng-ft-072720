/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time){
  let hour = time.split(':')[0]
  let hourNum = parseInt(hour)
  if(hourNum < 12){
    return "Good Morning"
  }
  if(hourNum > 17){
    return "Good Evening"
  }
  if(12 < hourNum < 17){
    return "Good Afternoon"
  }
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function displayMessage(message){
  document.getElementById("greeting").innerHTML = `${message}`
}