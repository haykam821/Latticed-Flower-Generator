const can = document.getElementById("flowerDisplay");
const ctx = can.getContext("2d");

const randize = document.getElementById("rand");
const output = document.getElementById("output");

const colors = {
  stem: 1,
  flowerPetals: 2,
  flowerCore: 3,
  pot: 4,
  dirt: 6,
}
let stemLength = randInt(2,3);

const pxls = [
  "#FFFFFF",
  "#CDCDCD",
  "#888888",
  "#555555",
  "#222222",
  "#000000",
  "#FFA7D1",
  "#E50000",
  "#800000",
  "#FFDDCA",
  "#F6B389",
  "#E59500",
  "#A06A42",
  "#604028",
  "#E5D900",
  "#94E044",
  "#02BE01",
  "#005F00",
  "#00D3DD",
  "#0083C7",
  "#0000EA",
  "#CF6EE4",
  "#FF00FF",
  "#66033C"
];
const pxln = [
"White", "Silver", "Light Gray", "Medium Gray", "Dark Gray", "Black", "Pink", "Red", "Dark Red", "Cream", "Tan", "Orange", "Brown", "Dark Brown", "Yellow", "Lime", "Green", "Dark Green", "Teal", "Cyan", "Blue", "Lavender", "Pink", "Purple",
];

Array.from(document.getElementsByTagName("select")).forEach(element => {
  pxls.forEach((color, index) => {
    element.add(new Option(pxln[index], color));
  });

  element.addEventListener("change", event => {
    colors[event.target.id] = pxls.indexOf(event.target.value);

    output.value = JSON.stringify(colors, null, 4);
  });
});

function triggerExport() {
    output.value = JSON.stringify({
        palette: colors,
        stem: {
            length: stemLength,
        },
    }, null, 4);
}

function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

randize.addEventListener("click", () => {
  Object.keys(colors).forEach(key => {
    colors[key] = randInt(0, pxls.length - 1);
  });
});

function degToRad(degrees) {
  return degrees * Math.PI / 180;
}

// Resize canvas based on window original size and resizing
function resizeCanvas() {
  can.style.height = window.innerHeight / 2 + "px";
  can.style.width = can.style.height * (17 / 11) + "px";

  can.height = 13 + 2 * stemLength;
  triggerExport();
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function tile(x, y, colorIndex) {
  ctx.fillStyle = pxls[colorIndex];
  ctx.fillRect(x, y, 1, 1);
}


function renderFlower() {
  ctx.fillStyle = pxls[5];
  ctx.fillRect(0, 0, can.width, can.height);

  let y = 1;
  tile(5, y, colors.flowerPetals);
  
  y += 2;
  tile(3, y, colors.flowerPetals);
  tile(5, y, colors.flowerCore);
  tile(7, y, colors.flowerPetals);

  y += 2;
  tile(5, y, colors.flowerPetals);

  y += 2;
  tile(3, y, colors.stem);
  tile(5, y, colors.stem);
  tile(7, y, colors.stem);
  
  for (let k = 1; k < stemLength; k++) {
    y += 2;
    tile(5, y, colors.stem);
  }

  y += 2;
  tile(3, y, colors.dirt);
  tile(5, y, colors.dirt);
  tile(7, y, colors.dirt);
  tile(1, y, colors.pot);
  tile(9, y, colors.pot);
  
  y += 2;
  tile(3, y, colors.dirt);
  tile(5, y, colors.dirt);
  tile(7, y, colors.dirt);
  tile(1, y, colors.pot);
  tile(9, y, colors.pot);

  y += 2;
  tile(3, y, colors.pot);
  tile(5, y, colors.pot);
  tile(7, y, colors.pot);
  

 window.requestAnimationFrame(renderFlower);
}
window.requestAnimationFrame(renderFlower);
