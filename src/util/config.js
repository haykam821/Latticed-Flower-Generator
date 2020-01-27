const { EventEmitter } = require("events");
const colors = require("./colors.js");

class Config extends EventEmitter {
	constructor() {
		super();

		this.store = {
			altDirtColor: colors[13].color,
			backgroundColor: colors[24].color,
			dirtColor: colors[12].color,
			flowerCoreColor: colors[21].color,
			flowerOffset: "",
			flowerPetalsColor: colors[6].color,
			gridColor: colors[5].color,
			padding: 0,
			potColor: colors[11].color,
			potHeight: 2,
			potWidth: 3,
			scale: 1,
			stemColor: colors[16].color,
			stemLength: 2,
			stemType: "top",
		};
	}

	set(key, value) {
		this.store[key] = value;
		this.emit("change", {
			config: this.store,
			key,
			value,
		});
		return value;
	}

	get(key) {
		return this.store && this.store[key];
	}

	export() {
		const withVersion = {
			...this.store,
			formatVersion: "1",
		};
		return JSON.stringify(withVersion, null, "\t");
	}
}
module.exports = Config;