const increment = document.getElementById("increment")
const elementCounter = document.getElementById("elementCounter")
const decrement = document.getElementById("decrement")

let counter =0
increment.addEventListener("click",()=>{
      counter++
    elementCounter.innerHTML = counter
});

decrement.addEventListener("click",()=>{
      counter--
      elementCounter.innerHTML = counter
  });