const container = document.getElementById("container");
const button = document.getElementById("prompt-btn")


function makeGrid(gridSize) {
  container.style.setProperty('grid-template-rows', `repeat(${gridSize}, ${(1 / gridSize) * 600}px)`);
  container.style.setProperty('grid-template-columns', `repeat(${gridSize}, ${(1 / gridSize) * 650}px)`);

  for (i = 0; i < (gridSize * gridSize); i++) {
    let squares = document.createElement("div");
    container.appendChild(squares).className = "grid-item";  
    const randomColor = "#" + Math.floor(Math.random() * (256 * 256 * 256)).toString(16).padStart(6, "0");
    squares.addEventListener("mouseover", () => {
    squares.style.backgroundColor = randomColor;
    })
  };
};
makeGrid(16)


button.addEventListener("click", () => {
  document.querySelectorAll(".grid-item").forEach(e => e.remove())
  let userInput = prompt("Set Number Of Squares")
  if(userInput > 100) {
      alert("You must enter a number below 100!");
      makeGrid(16)
  }
  gridSize = userInput;
  makeGrid(gridSize)

})