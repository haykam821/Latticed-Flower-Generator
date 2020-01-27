const React = require("react");
const styled = require("styled-components").default;

class CanvasCardUnstyled extends React.Component {
	render() {
		return <div className="card bg-dark">
			<div className="card-body">
				<canvas id="flowerDisplay" className="mx-auto"></canvas>
			</div>
		</div>;
	}
}

const CanvasCard = styled(CanvasCardUnstyled)`
	
`;
module.exports = CanvasCard;