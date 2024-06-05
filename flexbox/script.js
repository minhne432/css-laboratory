const container = document.getElementById("flexContainer");
const classes = ["center", "start", "end", "space-between", "space-around"];
let index = 0;

setInterval(() => {
  container.className = "container " + classes[index];
  index = (index + 1) % classes.length;
}, 2000);
