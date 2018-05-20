const can = document.getElementById("flowerDisplay");
const ctx = can.getContext("2d");

const scrollContent = document.getElementById("scrollContent");

const randize = document.getElementById("rand");
const output = document.getElementById("output");

const config = new Proxy({
  // Colors
  stemColor: 16,
  flowerPetalsColor: 6,
  flowerCoreColor: 21,
  potColor: 11,
  dirtColor: 12,
  altDirtColor: 13,
  gridColor: 5,
  backgroundColor: 24,
  // Other options
  stemLength: 2,
  scale: 1,
  padding: 0,
  potWidth: 3,
  potHeight: 2,
  flowerOffset: "",
}, {
  set: (object, property, value) => {
    object[property] = value;
    const relatedElem = document.getElementById(property);
    if (relatedElem) {
      relatedElem.value = value;
    }

    renderFlower();
    triggerExport();
  },
});

function imgData() {
  return encodeURIComponent(can.toDataURL())
}

document.getElementById("fiddle").addEventListener("click", () => {
  window.open(`https://pxlsfiddle.com/?img=${imgData()}`);
});
document.getElementById("pxls").addEventListener("click", () => {
  const tempX = document.getElementById("tempCoreX").value - corePos.x;
  const tempY = document.getElementById("tempCoreY").value - corePos.y;

  window.open(`https://pxls.space/#template=${imgData()}&ox=${tempX}&x=${tempX}&oy=${tempY}&y=${tempY}&scale=12`);
});

window.addEventListener("load", () => {
  // Hacky code to make defaults work
  Object.keys(config).forEach(key => {
    config[key] = config[key];
  });
});

const pxls = [{
    color: "#FFFFFF",
    name: "White",
  },
  {
    color: "#CDCDCD",
    name: "Silver",
  },
  {
    color: "#888888",
    name: "Light Gray",
  },
  {
    color: "#555555",
    name: "Medium Gray",
  },
  {
    color: "#222222",
    name: "Dark Gray",
  },
  {
    color: "#000000",
    name: "Black",
  },
  {
    color: "#FFA7D1",
    name: "Pink",
  },
  {
    color: "#E50000",
    name: "Red",
  },
  {
    color: "#800000",
    name: "Dark Red",
  },
  {
    color: "#FFDDCA",
    name: "Cream",
  },
  {
    color: "#F6B389",
    name: "Tan",
  },
  {
    color: "#E59500",
    name: "Orange",
  },
  {
    color: "#A06A42",
    name: "Brown",
  },
  {
    color: "#604028",
    name: "Dark Brown",
  },
  {
    color: "#E5D900",
    name: "Yellow",
  },
  {
    color: "#94E044",
    name: "Lime",
  },
  {
    color: "#02BE01",
    name: "Green",
  },
  {
    color: "#005F00",
    name: "Dark Green",
  },
  {
    color: "#00D3DD",
    name: "Teal",
  },
  {
    color: "#0083C7",
    name: "Cyan",
  },
  {
    color: "#0000EA",
    name: "Blue",
  },
  {
    color: "#CF6EE4",
    name: "Lavender",
  },
  {
    color: "#FF00FF",
    name: "Hot Pink",
  },
  {
    color: "#66033C",
    name: "Purple",
  },
  {
    color: "transparent",
    name: "*Transparent",
  },
];

Array.from(document.querySelectorAll("select, input:not(.noConfig)")).forEach(element => {
  if (element.nodeName === "SELECT") {
    // Add colors to selects
    pxls.forEach((value, index) => {
      const color = pxls[index];
      element.add(new Option(color.name, index));
    });
  }

  element.addEventListener("input", event => {
    const asInt = parseInt(event.target.value);
    config[event.target.id] = isNaN(asInt) ? event.target.value : asInt;
  });
});

function triggerExport() {
  output.value = JSON.stringify(config, null, 4);
}

function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

randize.addEventListener("click", () => {
  Object.keys(config).forEach(key => {
    if (key.endsWith("Color")) {
      config[key] = randInt(0, pxls.length - 1);
    }
  });
});

const input = document.getElementById("importInput");
const importButton = document.getElementById("import");
importButton.addEventListener("click", () => {
 let newConfig = {};
 try {
    newConfig = JSON.parse(input.value);
 } catch (error) {
    alert("Malformed JSON");
 }
 
 Object.keys(newConfig).forEach(key => {
   config[key] = newConfig[key];
 });
});

// Resize canvas based on window original size and resizing
function resizeCanvas() {
  can.style.height = window.innerHeight / 2 + "px";
  can.style.width = can.style.height * (17 / 11) + "px";
  scrollContent.style.height = window.innerHeight + "px";
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function pixel(x, y, colorIndex) {
  ctx.fillStyle = pxls[colorIndex].color;
  ctx.fillRect((config.padding + x) * config.scale, (config.padding + y) * config.scale, config.scale, config.scale);
}

function tile(x, y, colorIndex) {
  // Pixels around the pixel
  pixel(x - 1, y - 1, config.gridColor);
  pixel(x - 1, y, config.gridColor);
  pixel(x - 1, y + 1, config.gridColor);

  pixel(x, y - 1, config.gridColor);
  pixel(x, y + 1, config.gridColor);

  pixel(x + 1, y - 1, config.gridColor);
  pixel(x + 1, y, config.gridColor);
  pixel(x + 1, y + 1, config.gridColor);

  // Actual pixel
  pixel(x, y, colorIndex);
}

let corePos = {
  x: null,
  y: null,
}

function renderFlower() {
  can.height = (13 + 2 * config.stemLength + 2 * (config.potHeight - 2) + 2 * config.padding) * config.scale;
  can.width = (11 + 2 * config.padding + 2 * (config.potWidth - 3)) * config.scale;

  ctx.fillStyle = pxls[config.backgroundColor].color;
  ctx.fillRect(0, 0, can.width, can.height);

  let y = 1;
  let x = (config.flowerOffset > config.potWidth ? config.potWidth : config.flowerOffset ? config.flowerOffset : Math.ceil(config.potWidth / 2)) * 2 - 1;

  tile(x + 2, y, config.flowerPetalsColor);

  y += 2;
  tile(x, y, config.flowerPetalsColor);

  tile(x + 2, y, config.flowerCoreColor);

  corePos.x = x + 2;
  corePos.y = y;

  tile(x + 4, y, config.flowerPetalsColor);

  y += 2;
  tile(x + 2, y, config.flowerPetalsColor);

  y += 2;
  tile(x, y, config.stemColor);
  tile(x + 2, y, config.stemColor);
  tile(x + 4, y, config.stemColor);

  for (let k = 1; k < config.stemLength; k++) {
    y += 2;
    tile(x + 2, y, config.stemColor);
  }

  for (let l = 0; l < config.potHeight; l++) {
    y += 2;
    x = 1;

    tile(x, y, config.potColor);

    for (let m = 0; m < config.potWidth; m++) {
      x += 2;
      tile(x, y, (x / 2 % 2 < 1) ^ (y / 2 % 2 > 1) ? config.altDirtColor : config.dirtColor);
    }

    x += 2;
    tile(x, y, config.potColor);
  }

  y += 2;
  x = 1;

  for (let m = 0; m < config.potWidth; m++) {
    x += 2;
    tile(x, y, config.potColor);
  }
}