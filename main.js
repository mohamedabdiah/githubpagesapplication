const increment = document.getElementById("increment")
const elementCounter = document.getElementById("elementCounter")
const decrement = document.getElementById("decrement")

let counter =0
increment.addEventListener("click",()=>{
      counter++
      if(counter == 10){
            document.body.style.backgroundColor = "dodgerblue"
      }else if(counter ==20){
             document.body.style.backgroundColor = "orange"
      }
    elementCounter.innerHTML = counter
});

decrement.addEventListener("click",()=>{
      counter--
      if(counter <= 0){
            alert("counter is a finished cannot be continued")
            return
      }  
    elementCounter.innerHTML = counter
  });