import "./style.css";
let parentDiv = document.createElement("div");
parentDiv.className = "parent-grid";
let row1 = [1, 4, 3, 2];
let row2 = [3, 2, 1, 4];
let row3 = [2, 1, 4, 3];
let row4 = [4, 3, 2, 1];
let gameboard = [];

let size = 4;

//generate nums for gameboard
function generateGameboard() {
  for (let row = 0; row < size; row++) {
    let row = [];
    for (let column = 0; column < size; column++) {
      row.push(Math.floor(Math.random() * size) + 1);
      // if (gameboard[row] !== gameboard[row][column]) {
      //   gameboard[row][column] = Math.random(min, max);
    }
    gameboard.push(row);
  }
}
generateGameboard();
console.log(gameboard);
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
    cell.innerHTML = gameboard[row][col];
    // append child div to parent
    parentDiv.appendChild(cell);
    cell.className = "cell-grid";
  }
}

document.querySelector("#app").appendChild(parentDiv);

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
