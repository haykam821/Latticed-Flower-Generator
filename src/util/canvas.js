const getRenderStartX = require("./get-render-start-x.js");
const latticeBetween = require("./lattice-between.js");

class Canvas {
	constructor(canvas) {
		this.setCanvas(canvas);

		this.corePos = {
			x: null,
			y: null,
		};
	}

	setCanvas(newCanvas) {
		if (!(newCanvas instanceof HTMLCanvasElement)) {
			this.canvas = null;
			this.context = null;
			return;
		}

		this.canvas = newCanvas;
		this.context = newCanvas.getContext("2d");
	}

	setSize(width, height, scale) {
		if (!(this.canvas instanceof HTMLCanvasElement)) return null;

		this.canvas.width = width;
		this.canvas.height = height;

		if (typeof scale === "number") {
			this.canvas.width *= scale;
			this.canvas.height *= scale;
		}
	}

	getImageURL() {
		if (!(this.canvas instanceof HTMLCanvasElement)) return null;
		return encodeURIComponent(this.canvas.toDataURL());
	}

	/**
	 * Draws a pixel.
	 * @param {number} x The X coordinate of the pixel.
	 * @param {number} y The Y coordinate of the pixel.
	 * @param {string} color The fill style for the pixel.
	 * @param {Object} config The flower configuration.
	 */
	pixel(x, y, color, config) {
		this.context.fillStyle = color;
		this.context.fillRect((config.padding + x) * config.scale, (config.padding + y) * config.scale, config.scale, config.scale);
	}

	/**
	 * Draws a pixel with 8 border pixels around it.
	 * @param {number} x The X coordinate of the tile.
	 * @param {number} y The Y coordinate of the tile.
	 * @param {number} colorIndex The index for the color of the tile.
	 * @param {Object} config The flower configuration.
	 */
	tile(x, y, colorIndex, config) {
		// Pixels around the pixel
		this.pixel(x - 1, y - 1, config.gridColor, config);
		this.pixel(x - 1, y, config.gridColor, config);
		this.pixel(x - 1, y + 1, config.gridColor, config);

		this.pixel(x, y - 1, config.gridColor, config);
		this.pixel(x, y + 1, config.gridColor, config);

		this.pixel(x + 1, y - 1, config.gridColor, config);
		this.pixel(x + 1, y, config.gridColor, config);
		this.pixel(x + 1, y + 1, config.gridColor, config);

		// Actual pixel
		this.pixel(x, y, colorIndex, config);
	}

	renderFlower(config) {
		const width = (11 + 2 * config.padding + 2 * (config.potWidth - 3));
		const height = (13 + 2 * config.stemLength + 2 * (config.potHeight - 2) + 2 * config.padding);
		this.setSize(width, height, config.scale);

		this.context.fillStyle = config.backgroundColor;
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

		let y = 1;
		let x = getRenderStartX(config);

		this.tile(x + 2, y, config.flowerPetalsColor, config);

		y += 2;
		this.tile(x, y, config.flowerPetalsColor, config);

		this.tile(x + 2, y, config.flowerCoreColor, config);

		this.corePos.x = x + 2;
		this.corePos.y = y;

		this.tile(x + 4, y, config.flowerPetalsColor, config);

		y += 2;
		this.tile(x + 2, y, config.flowerPetalsColor, config);

		// Onto stems!

		const bottom = config.stemLength + 1;

		for (let k = 1; k < bottom; k++) {
			y += 2;

			if (k === 1) {
				this.tile(x + 2, y, config.stemColor, config);

				if (config.stemType === "top") {
					this.tile(x, y, config.stemColor, config);
					this.tile(x + 4, y, config.stemColor, config);
				}
			}

			this.tile(x + 2, y, config.stemColor, config);

			if (k < bottom - 1) {
				if (config.stemType === "alternating") {
					this.tile(x + (y % 4 === 3 ? 0 : 4), y, config.stemColor, config);
				} else if (config.stemType === "alternating_reverse") {
					this.tile(x + (y % 4 === 3 ? 4 : 0), y, config.stemColor, config);
				}
			}
		}

		for (let l = 0; l < config.potHeight; l++) {
			y += 2;
			x = 1;

			this.tile(x, y, config.potColor, config);

			for (let m = 0; m < config.potWidth; m++) {
				x += 2;
				this.tile(x, y, latticeBetween(x, y, config.altDirtColor, config.dirtColor), config);
			}

			x += 2;
			this.tile(x, y, config.potColor, config);
		}

		y += 2;
		x = 1;

		for (let m = 0; m < config.potWidth; m++) {
			x += 2;
			this.tile(x, y, config.potColor, config);
		}
	}
}
module.exports = Canvas;