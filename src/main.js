import "./style.css";
let parentDiv = document.createElement("div");
parentDiv.className = "parent-grid";
let row1 = [1, 4, 3, 2];
let row2 = [3, 2, 1, 4];
let row3 = [2, 1, 4, 3];
let row4 = [4, 3, 2, 1];
let gameboard = [];

let size = 4;

//Add reset scaffolding
let resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", (event) => {
  console.log(event);
});

//hola
//generate nums for gameboard
function generateGameboard() {
  for (let row = 0; row < size; row++) {
    let row = [];
    for (let column = 0; column < size; column++) {
      row.push(Math.floor(Math.random() * size) + 1);
      // if (gameboard[row] !== gameboard[row][column]) {
      //   gameboard[row][column] = Math.random(min, max);
      //TODO: must do many for loops to do conditions for num generations. we are looking to generate unique nums for each col and row, and there will be for loop(s) for checking whether the num is in the column, checking whether the num is within the row, and checking whether the num is within the box
      //need to make helper functions so as to not get too many nested loops in the same place.
      // need to go in this order apparently: row -> col -> box. check that val doesn't exist
      //val checks can be a helper function reused inside row -> col -> box
    }
    gameboard.push(row);
  }
}
generateGameboard();
console.log(gameboard);

// eventually we will pass a "solutionBoard" array
function renderBoard() {
  /**
   * RULES FOR GRID NUMBER GENERATION
   * populate squares with nums 1-4
   * check the column at the same time to see if the column already has that num
   * if it does, skip num
   * if it does not, use num
   * check if the current arr already has the num, if it already has, skip to next num
   * num must be randomly generated between 1-4
   */

  //RENDER LOOP
  for (let row = 0; row < 4; row++) {
    //the outer loop will run once, and when it does, it will run the inner loop 4 times, and THEN it will run its second iteration over again.
    //a mailman goes to the first floor and delivers mail to every apt, then goes to the next floor and does the same.
    for (let col = 0; col < 4; col++) {
      //make a child div
      let cell = document.createElement("div");
      let cellNum = gameboard[row][col];

      // conditionally rendering based on a number
      // using 4 as placeholder for 0
      if (cellNum == 4) {
        let numInput = document.createElement("input");
        numInput.className = "cell-input";
        numInput.inputMode = "numeric";
        numInput.value = 0;
        numInput.maxLength = 1;
        parentDiv.appendChild(numInput);
      } else {
        cell.className = "cell-grid";
        cell.innerHTML = gameboard[row][col];
        parentDiv.appendChild(cell);
      }
    }
  }

  document.querySelector("#app").appendChild(parentDiv);
}

renderBoard();
/**
 * what nums to show
 * what nums to hide
 * how to hide/show nums
 * how to populate the puzzle
 * STEP 1:
 * each row must have 4 unique numbers from 1-4
 *
 * each column must have 4 unique numbers from 1-4
 * each quadrant must have 4 unique numbers from 1-4
 * make an arr of arrays
 *
 * How does the computer know which cell I clicked? How does it know what it's comparing the number I input to? How do I identify each cell (i.e. this is the 3rd one on the second row)?
 * show coordinates in the cells. You'll know if you did it right
 */
