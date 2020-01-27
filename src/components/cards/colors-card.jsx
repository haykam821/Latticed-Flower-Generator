const React = require("react");
const styled = require("styled-components").default;

const { Card, Button } = require("react-bootstrap");

class ColorsCardUnstyled extends React.Component {
	render() {
		return <Card className="bg-dark">
			<Card.Body>
				<h2>
					Colors
				</h2>
				<p>
					Change the colors of each portion of your flower.
				</p>
				<b>Background:</b>
				<color-chooser id="backgroundColor"></color-chooser>
				<br />
				<b>Grid:</b>
				<color-chooser id="gridColor"></color-chooser>
				<br />
				<b>Stem:</b>
				<color-chooser id="stemColor"></color-chooser>
				<br />
				<b>Flower Petals:</b>
				<color-chooser id="flowerPetalsColor"></color-chooser>
				<br />
				<b>Flower Core:</b>
				<color-chooser id="flowerCoreColor"></color-chooser>
				<br />
				<b>Pot:</b>
				<color-chooser id="potColor"></color-chooser>
				<br />
				<b>Dirt:</b>
				<color-chooser id="dirtColor"></color-chooser>
				<br />
				<b>Alternate Dirt:</b>
				<color-chooser id="altDirtColor"></color-chooser>
				<br />
				<br />
				<Button variant="secondary" block id="rand" title="Feeling lucky? Click this button to randomize the colors!">
					Randomize Colors
				</Button>
			</Card.Body>
		</Card>;
	}
}

const ColorsCard = styled(ColorsCardUnstyled)`
	
`;
module.exports = ColorsCard;