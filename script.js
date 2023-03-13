let I = document.getElementById("s_no");
let Quote = document.getElementById("quote");
let Btn = document.getElementById("btn");




Btn.addEventListener("click",function() {
    fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((data) =>  I.innerText = (data.slip.id));

  fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((data) =>  Quote.innerHTML = (data.slip.advice));  
})




