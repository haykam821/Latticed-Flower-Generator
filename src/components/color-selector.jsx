const React = require("react");
const styled = require("styled-components").default;

const { InputGroup, FormControl } = require("react-bootstrap");
const colors = require("../util/colors.js");

class ColorSelectorUnstyled extends React.Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
		this.state = {
			isCustom: false,
		};
	}

	onChange(event) {
		if (!event || !event.target) return;

		const { value, type } = event.target;
		const parsed = type === "number" ? parseInt(value) : value;

		this.setState({
			isCustom: value === "custom",
		});
		this.props.config.set(this.props.id, parsed);
	}

	render() {
		return <InputGroup className={this.props.className} title={this.props.description} onChange={this.onChange}>
			<InputGroup.Prepend>
				<InputGroup.Text>
					{this.props.title}
				</InputGroup.Text>
			</InputGroup.Prepend>
			<FormControl className="custom-select" as="select" defaultValue={this.props.config.get(this.props.id)}>
				{colors.map((color, index) => {
					return <option value={color.color} key={index}>
						{color.name}
					</option>;
				})}
				<option value="custom">
					Custom Color
				</option>
			</FormControl>
			{this.state.isCustom && <InputGroup.Append>
				<FormControl as="input" type="color" defaultValue={this.props.config.get(this.props.id)}>

				</FormControl>
			</InputGroup.Append>}
		</InputGroup>;
	}
}

const ColorSelector = styled(ColorSelectorUnstyled)`
	
`;
module.exports = ColorSelector;