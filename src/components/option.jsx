const React = require("react");
const styled = require("styled-components").default;

const { InputGroup, FormControl } = require("react-bootstrap");

class OptionUnstyled extends React.Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);

		this.state = {
			value: this.props.config.get(this.props.id),
		};
	}

	componentDidMount() {
		this.changeListener = this.props.config.on("change", ({ key, value }) => {
			if (key === this.props.id) {
				this.setState({
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
				value: this.state.value,
			})}
		</InputGroup>;
	}
}

const Option = styled(OptionUnstyled)`
	
`;
module.exports = Option;