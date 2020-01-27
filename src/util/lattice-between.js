/**
 * Gets the lattice color based its coordinates.
 * @param {number} x The X position.
 * @param {number} y The Y position.
 * @param {string} color1 The first color in the lattice.
 * @param {string} color2 The second color in the lattice.
 * @returns {string} One of color1 or color2 based on the given coordinates.
 */
function latticeBetween(x = 0, y = 0, color1 = "#000000", color2 = "#FFFFFF") {
	return (x / 2 % 2 < 1) ^ (y / 2 % 2 > 1) ? color1 : color2;
}
module.exports = latticeBetween;