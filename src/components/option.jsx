const React = require("react");
const styled = require("styled-components").default;

const { InputGroup, FormControl } = require("react-bootstrap");

class OptionUnstyled extends React.Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
		if (!event || !event.target) return;

		const { value, type } = event.target;
		const parsed = type === "number" ? parseInt(value) : value;

		this.props.config.set(this.props.id, parsed);
	}

	render() {
		return <InputGroup className={this.props.className} title={this.props.description} onChange={this.onChange}>
			<InputGroup.Prepend>
				<InputGroup.Text>
					{this.props.title}
				</InputGroup.Text>
			</InputGroup.Prepend>
			{React.cloneElement(this.props.children, {
				defaultValue: this.props.config.get(this.props.id),
			})}
		</InputGroup>;
	}
}

const Option = styled(OptionUnstyled)`
	color: red;
`;
module.exports = Option;