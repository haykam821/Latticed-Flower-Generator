/**
 * Gets the starting X position for a flower.
 * @param {Object} config The flower configuration.
 * @returns {number} The starting X position for a flower.
 */
function getRenderStartX(config) {
	if (config.flowerOffset > config.potWidth) {
		return config.potWidth * 2 - 1;
	} else if (config.flowerOffset) {
		return config.flowerOffset * 2 - 1;
	} else {
		return Math.ceil(config.potWidth / 2) * 2 - 1;
	}
}
module.exports = getRenderStartX;