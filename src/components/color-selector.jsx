const React = require("react");
const styled = require("styled-components").default;

const { InputGroup, FormControl } = require("react-bootstrap");
const colors = require("../util/colors.js");
const defaultColors = colors.map(color => color.color);

class ColorSelectorUnstyled extends React.Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);

		const value = this.props.config.get(this.props.id);
		this.state = {
			isCustom: !defaultColors.includes(value),
			value,
		};
	}

	componentDidMount() {
		this.changeListener = this.props.config.on("change", ({ key, value }) => {
			if (key === this.props.id) {
				this.setState({
					isCustom: !defaultColors.includes(value),
					value,
				});
			}
		});
	}

	componentWillUnmount() {
		this.props.config.removeListener(this.changeListener);
	}

	onChange(event) {
		if (!event || !event.target) return;
		const value = event.target.value;

		if (value === "custom") {
			this.setState({
				isCustom: true,
			});
		} else {
			this.props.config.set(this.props.id, event.target.value);
		}
	}

	render() {
		return <InputGroup className={this.props.className} title={this.props.description}>
			<InputGroup.Prepend>
				<InputGroup.Text>
					{this.props.title}
				</InputGroup.Text>
			</InputGroup.Prepend>
			<FormControl className="custom-select" as="select" value={this.state.isCustom ? "custom" : this.state.value} onChange={this.onChange}>
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
				<FormControl as="input" type="color" value={this.state.value} onChange={this.onChange}>

				</FormControl>
			</InputGroup.Append>}
		</InputGroup>;
	}
}

const ColorSelector = styled(ColorSelectorUnstyled)`
	input[type="color"] {
		border: none;
		outline: none;
		-webkit-appearance: none;

		width: 100%;
		height: 100%;
		min-width: 50px;

		&::-webkit-color-swatch-wrapper {
			padding: 0;	
		}
		&::-webkit-color-swatch {
			border: none;
		}
	}
`;
module.exports = ColorSelector;