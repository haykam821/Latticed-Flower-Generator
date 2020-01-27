const React = require("react");
const styled = require("styled-components").default;

class InfoCardUnstyled extends React.Component {
	render() {
		return <div className="card bg-dark">
			<div className="card-body">
				<h1>
					Latticed Flower Generator
				</h1>
				<p>
					Use this tool to generate latticed flowers of all your needs! Most buttons and fields can be hovered over to get more information
					about them.
				</p>
			</div>
		</div>;
	}
}

const InfoCard = styled(InfoCardUnstyled)`
	
`;
module.exports = InfoCard;