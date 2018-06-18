const can = document.getElementById("flowerDisplay");
const ctx = can.getContext("2d");

const randize = document.getElementById("rand");
const output = document.getElementById("output");

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
	color: "#820080",
	name: "Purple",
},
{
	color: "transparent",
	name: "*Transparent",
}];

const config = new Proxy({
	// Colors
	stemColor: pxls[16].color,
	flowerPetalsColor: pxls[6].color,
	flowerCoreColor: pxls[21].color,
	potColor: pxls[11].color,
	dirtColor: pxls[12].color,
	altDirtColor: pxls[13].color,
	gridColor: pxls[5].color,
	backgroundColor: pxls[24].color,
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

		return true;
	},
});

function imgData() {
	return encodeURIComponent(can.toDataURL());
}

document.getElementById("fiddle").addEventListener("click", () => {
	window.open(`https://pxlsfiddle.com/?img=${imgData()}`);
});
document.getElementById("pxls").addEventListener("click", () => {
	window.open(`https://pxls.space/#template=${imgData()}`);
});

document.getElementById("posCoreX").addEventListener("input", (event) => {
	document.getElementById("posTopX").innerHTML = event.target.value - corePos.x;
});
document.getElementById("posCoreY").addEventListener("input", (event) => {
	document.getElementById("posTopY").innerHTML = event.target.value - corePos.y;
});

window.addEventListener("load", () => {
	// Hacky code to make defaults work
	Object.keys(config).forEach(key => {
		config[key] = config[key];
	});
});

Array.from(document.querySelectorAll("color-chooser, input:not(.noConfig)")).forEach(element => {
	element.addEventListener("input", event => {
		const asInt = parseInt(event.target.value);
		config[event.target.id] = isNaN(asInt) ? event.target.value : asInt;
	});
});

function triggerExport() {
	return output.value = JSON.stringify(config, null, 4);
}
document.getElementById("lsSave").addEventListener("click", () => {
	localStorage.savedConfig = triggerExport();
});

function randInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

randize.addEventListener("click", () => {
	Object.keys(config).forEach(key => {
		if (key.endsWith("Color")) {
			config[key] = pxls[randInt(0, pxls.length - 1)].color;
		}
	});
});

function loadFromJSON(json = "{}") {
	let newConfig = {};
	try {
		newConfig = JSON.parse(json);
	} catch (error) {
		alert("Malformed JSON");
	}

	// Copy over each entry
	Object.keys(newConfig).forEach(key => {
		config[key] = newConfig[key];
	});
}

const input = document.getElementById("importInput");
const importButton = document.getElementById("import");
importButton.addEventListener("click", () => {
	return loadFromJSON(input.value);
});
document.getElementById("lsLoad").addEventListener("click", () => {
	return loadFromJSON(localStorage.savedConfig);
});

function pixel(x, y, color) {
	ctx.fillStyle = color;
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

const corePos = {
	x: null,
	y: null,
};

function latticeBetween(x = 0, y = 0, color1 = "#000000", color2 = "#FFFFFF") {
	return (x / 2 % 2 < 1) ^ (y / 2 % 2 > 1) ? color1 : color2;
}

function renderFlower() {
	can.height = (13 + 2 * config.stemLength + 2 * (config.potHeight - 2) + 2 * config.padding) * config.scale;
	can.width = (11 + 2 * config.padding + 2 * (config.potWidth - 3)) * config.scale;

	ctx.fillStyle = config.backgroundColor;
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
			tile(x, y, latticeBetween(x, y, config.altDirtColor, config.dirtColor));
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

class ColorChooser extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({
			mode: "open",
		});

		const style = document.createElement("style");
		style.textContent = `
			select {
				height: 20px;
			}

			input[type=color] {
				width: 30px;
			}
		`;
		this.shadowRoot.appendChild(style);

		this.selectElem = document.createElement("select");
		pxls.forEach((value, index) => {
			this.selectElem.add(new Option(pxls[index].name, pxls[index].color));
		});
		this.selectElem.add(new Option("Custom Color", "custom"));

		this.colorElem = document.createElement("input");
		this.colorElem.type = "color";
		this.colorElem.value = "#FEFEFE";
		this.colorElem.style.display = "none";

		this.selectElem.addEventListener("input", () => {
			config[this.id] = this.value;
		});
		this.colorElem.addEventListener("input", () => {
			config[this.id] = this.value;
		});

		this.shadowRoot.appendChild(this.selectElem);
		this.shadowRoot.appendChild(this.colorElem);
	}

	get value() {
		if (this.selectElem.value === "custom") {
			return this.colorElem.value;
		} else {
			return this.selectElem.value;
		}
	}

	set value(val) {
		if (Array.from(this.selectElem.children).some(child => child.value === val)) {
			this.selectElem.value = val;
			this.colorElem.style.display = "none";
		} else {
			this.selectElem.value = "custom";
			this.colorElem.style.display = "initial";
			this.colorElem.value = val;
		}

		return true;
	}
}

window.customElements.define("color-chooser", ColorChooser);