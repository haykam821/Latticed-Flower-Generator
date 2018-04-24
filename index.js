const can = document.getElementById("flowerDisplay");
const ctx = can.getContext("2d");

const randize = document.getElementById("rand");
const output = document.getElementById("output");

const config = new Proxy({
  stemColor: 16,
  flowerPetalsColor: 6,
  flowerCoreColor: 21,
  potColor: 11,
  dirtColor: 12,
  backgroundColor: 5,
  stemLength: 2,
}, {
  set: (object, property, value) => {
    object[property] = value;
    const relatedElem = document.getElementById(property);
    if (relatedElem) {
      relatedElem.value = value;
    }
    triggerExport();
  },
});

window.addEventListener("load", () => {
  // Hacky code to make defaults work
  Object.keys(config).forEach(key => {
    config[key] = config[key];
  });
});

const pxls = [
  {
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
];

Array.from(document.querySelectorAll("select, input")).forEach(element => {
  if (element.nodeName === "SELECT") {
    // Add colors to selects
    pxls.forEach((value, index) => {
    element.add(new Option(pxls[index].name, index));
  });
}

  element.addEventListener("input", event => {
    const asInt = parseInt(event.target.value)
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

function degToRad(degrees) {
  return degrees * Math.PI / 180;
}

// Resize canvas based on window original size and resizing
function resizeCanvas() {
  can.style.height = window.innerHeight / 2 + "px";
  can.style.width = can.style.height * (17 / 11) + "px";
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function tile(x, y, colorIndex) {
  ctx.fillStyle = pxls[colorIndex].color;
  ctx.fillRect(x, y, 1, 1);
}


function renderFlower() {
  can.height = 13 + 2 * config.stemLength;

  ctx.fillStyle = pxls[config.backgroundColor].color;
  ctx.fillRect(0, 0, can.width, can.height);

  let y = 1;
  tile(5, y, config.flowerPetalsColor);

  y += 2;
  tile(3, y, config.flowerPetalsColor);
  tile(5, y, config.flowerCoreColor);
  tile(7, y, config.flowerPetalsColor);

  y += 2;
  tile(5, y, config.flowerPetalsColor);

  y += 2;
  tile(3, y, config.stemColor);
  tile(5, y, config.stemColor);
  tile(7, y, config.stemColor);

  for (let k = 1; k < config.stemLength; k++) {
    y += 2;
    tile(5, y, config.stemColor);
  }

  y += 2;
  tile(3, y, config.dirtColor);
  tile(5, y, config.dirtColor);
  tile(7, y, config.dirtColor);
  tile(1, y, config.potColor);
  tile(9, y, config.potColor);

  y += 2;
  tile(3, y, config.dirtColor);
  tile(5, y, config.dirtColor);
  tile(7, y, config.dirtColor);
  tile(1, y, config.potColor);
  tile(9, y, config.potColor);

  y += 2;
  tile(3, y, config.potColor);
  tile(5, y, config.potColor);
  tile(7, y, config.potColor);


  window.requestAnimationFrame(renderFlower);
}
window.requestAnimationFrame(renderFlower);
