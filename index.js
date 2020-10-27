/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(string) {
  const time = string.split(:).parseInt();
    if(time < 12){
      return "Good Morning"
    }

}
