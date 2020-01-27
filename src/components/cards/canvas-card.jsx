const React = require("react");
const styled = require("styled-components").default;

const { Card } = require("react-bootstrap");

class CanvasCardUnstyled extends React.Component {
	render() {
		return <Card className="bg-dark">
			<Card.Body className="card-body">
				<canvas id="flowerDisplay" className="mx-auto"></canvas>
			</Card.Body>
		</Card>;
	}
}

const CanvasCard = styled(CanvasCardUnstyled)`
	
`;
module.exports = CanvasCard;