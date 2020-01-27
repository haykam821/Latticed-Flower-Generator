const React = require("react");
const styled = require("styled-components").default;

const { Card } = require("react-bootstrap");

class CanvasCardUnstyled extends React.Component {
	constructor(props) {
		super(props);
		this.canvasRef = React.createRef();
	}

	componentDidMount() {
		this.props.canvas.setCanvas(this.canvasRef.current);
		window.conf = this.props.config;
		this.changeListener = this.props.config.on("change", ({ config }) => {
			this.props.canvas.renderFlower(config);
		});
		this.props.canvas.renderFlower(this.props.config.store);
	}

	componentWillUnmount() {
		this.props.canvas.setCanvas(null);
		this.props.config.removeListener(this.changeListener);
	}

	render() {
		return <Card className="bg-dark">
			<Card.Body className="card-body">
				<canvas ref={this.canvasRef} className="mx-auto"></canvas>
			</Card.Body>
		</Card>;
	}
}

const CanvasCard = styled(CanvasCardUnstyled)`
	
`;
module.exports = CanvasCard;