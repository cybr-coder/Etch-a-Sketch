const container = document.getElementById("container");
const button = document.getElementById("prompt-btn")

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  container.style.width = "1080px";
  for (i = 0; i < (rows * cols); i++) {
    let squares = document.createElement("div");
    container.appendChild(squares).className = "grid-item";
    squares.style.minHeight = "0";
    squares.style.minHeight = "0";
    squares.style.overflow = "hidden";    
    squares.addEventListener("mouseover", () => {
    squares.style.backgroundColor = "black";
    })
  };
  button.addEventListener("click", () => {
    document.querySelectorAll(".grid-item").forEach(e => e.remove())
    let userInput = prompt("Set Number Of Squares")
    if(userInput > 100) {
        alert("You must enter a number below 100!");
        return;
    }
    rows = userInput;
    cols = userInput;
    makeRows(rows, cols)
    // if (userInput != (/^[0-9.,]+$/)){
    //     alert("Enter a number")
    // }
  })


};
makeRows(10, 10)


