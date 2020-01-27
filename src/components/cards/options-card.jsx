const React = require("react");
const styled = require("styled-components").default;

const { Card, InputGroup, FormControl } = require("react-bootstrap");

class OptionsCardUnstyled extends React.Component {
	render() {
		return <Card className="bg-dark">
			<Card.Body>
				<h2>
					Options
				</h2>
				<p>
					This section allows you to configure the flower&apos;s general properties.
				</p>
				<InputGroup title="The height of the stem.">
					<InputGroup.Prepend>
						<InputGroup.Text>Stem Height</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl as="input" type="number" min={1} id="stemLength" />
				</InputGroup>
				<br />
				<InputGroup title="The style of the stem.">
					<InputGroup.Prepend>
						<InputGroup.Text>Stem Type</InputGroup.Text>
					</InputGroup.Prepend>
					<select className="custom-select" id="stemType">
						<option value="top">Classic</option>
						<option value="alternating">Alternating</option>
						<option value="alternating_reverse">Alternating, reversed</option>
					</select>
				</InputGroup>
				<br />
				<InputGroup title="The scale of the flower.">
					<InputGroup.Prepend>
						<InputGroup.Text>Scale</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl as="input" type="number" min={1} max={200} id="scale" />
				</InputGroup>
				<br />
				<InputGroup title="The amount of background pixels the flower should be surrounded with on each side.">
					<InputGroup.Prepend>
						<InputGroup.Text>Padding</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl as="input" type="number" min={0} max={20} id="padding" />
				</InputGroup>
				<br />
				<InputGroup title="The width of the flower's pot.">
					<InputGroup.Prepend>
						<InputGroup.Text>Pot Width</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl as="input" type="number" min={1} max={20} id="potWidth" />
				</InputGroup>
				<br />
				<InputGroup title="The height of the flower's pot.">
					<InputGroup.Prepend>
						<InputGroup.Text>Pot Height</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl as="input" type="number" min={1} max={20} id="potHeight" />
				</InputGroup>
				<br />
				<InputGroup title="Setting the offset to nothing will make it in the middle. A flower cannot be offset to the point where it exits the pot.">
					<InputGroup.Prepend>
						<InputGroup.Text>Flower Root Offset</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl as="input" type="number" min={1} max={20} id="flowerOffset" />
				</InputGroup>
			</Card.Body>
		</Card>;
	}
}

const OptionsCard = styled(OptionsCardUnstyled)`
	
`;
module.exports = OptionsCard;