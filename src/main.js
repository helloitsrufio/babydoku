import "./style.css";
//TODO: we need to render this. currently it is not connected to any styles or our html whatsoever. maybe put something inside of childDivs?
//grab #app and append parent div onto it
let parentDiv = document.createElement("div");
parentDiv.className = "parent-grid";

for (let i = 0; i < 16; i++) {
  //make a child div
  let childDiv = document.createElement("div");
  childDiv.innerHTML = i;
  // append child div to parent
  parentDiv.appendChild(childDiv);
  childDiv.className = "child-grid";
}

document.querySelector("#app").appendChild(parentDiv);
