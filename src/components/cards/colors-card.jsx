const React = require("react");
const styled = require("styled-components").default;

const { Card, Button } = require("react-bootstrap");
const ColorSelector = require("../color-selector.jsx");

const colors = require("../../util/colors.js");
const randomItem = require("random-item");

class ColorsCardUnstyled extends React.Component {
	constructor(props) {
		super(props);
		this.randomizeColors = this.randomizeColors.bind(this);
	}

	randomizeColors() {
		const configKeys = Object.keys(this.props.config.store);
		for (const key of configKeys) {
			if (!key.endsWith("Color")) continue;
			this.props.config.set(key, randomItem(colors).color);
		}
	}

	render() {
		return <Card className="bg-dark">
			<Card.Body>
				<h2>
					Colors
				</h2>
				<p>
					Change the colors of each portion of your flower.
				</p>
				<ColorSelector title="Background" id="backgroundColor" config={this.props.config} />
				<br />
				<ColorSelector title="Grid" id="gridColor" config={this.props.config} />
				<br />
				<ColorSelector title="Stem" id="stemColor" config={this.props.config} />
				<br />
				<ColorSelector title="Flower Petals" id="flowerPetalsColor" config={this.props.config} />
				<br />
				<ColorSelector title="Flower Core" id="flowerCoreColor" config={this.props.config} />
				<br />
				<ColorSelector title="Pot" id="potColor" config={this.props.config} />
				<br />
				<ColorSelector title="Dirt" id="dirtColor" config={this.props.config} />
				<br />
				<ColorSelector title="Alternate Dirt" id="altDirtColor" config={this.props.config} />
				<br />
				<br />
				<Button variant="secondary" block title="Feeling lucky? Click this button to randomize the colors!" onClick={this.randomizeColors}>
					Randomize Colors
				</Button>
			</Card.Body>
		</Card>;
	}
}

const ColorsCard = styled(ColorsCardUnstyled)`
	
`;
module.exports = ColorsCard;