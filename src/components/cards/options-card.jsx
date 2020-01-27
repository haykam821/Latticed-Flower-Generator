const React = require("react");
const styled = require("styled-components").default;

const { Card, FormControl, InputGroup } = require("react-bootstrap");
const Option = require("../option.jsx");

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
				<Option title="Stem Length" description="The height of the stem." id="stemLength" config={this.props.config}>
					<FormControl as="input" type="number" min={1} />
				</Option>
				<br />
				<Option title="Stem Type" description="The style of the stem." id="stemType" config={this.props.config}>
					<select className="custom-select" id="stemType">
						<option value="top">Classic</option>
						<option value="alternating">Alternating</option>
						<option value="alternating_reverse">Alternating, reversed</option>
					</select>
				</Option>
				<br />
				<Option title="Scale" description="The scale of the flower." id="scale" config={this.props.config}>
					<FormControl as="input" type="number" min={1} max={200} />
				</Option>
				<br />
				<Option title="Padding" description="The amount of background pixels the flower should be surrounded with on each side." id="padding" config={this.props.config}>
					<FormControl as="input" type="number" min={0} max={20} />
				</Option>
				<br />
				<Option title="Pot Width" description="The width of the flower's pot." id="potWidth" config={this.props.config}>
					<FormControl as="input" type="number" min={1} max={20} />
				</Option>
				<br />
				<Option title="Pot Height" description="The height of the flower's pot." id="potHeight" config={this.props.config}>
					<FormControl as="input" type="number" min={1} max={20} />
				</Option>
				<br />
				<Option title="Flower Root Offset" description="Setting the offset to nothing will make it in the middle. A flower cannot be offset to the point where it exits the pot." id="flowerOffset" config={this.props.config}>
					<FormControl as="input" type="number" min={1} max={20} />
				</Option>
			</Card.Body>
		</Card>;
	}
}

const OptionsCard = styled(OptionsCardUnstyled)`
	
`;
module.exports = OptionsCard;