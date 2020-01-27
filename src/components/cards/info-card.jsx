const React = require("react");
const styled = require("styled-components").default;

const { Card } = require("react-bootstrap");

class InfoCardUnstyled extends React.Component {
	render() {
		return <Card className="bg-dark">
			<Card.Body>
				<h1>
					Latticed Flower Generator
				</h1>
				<p>
					Use this tool to generate latticed flowers of all your needs! Most buttons and fields can be hovered over to get more information
					about them.
				</p>
			</Card.Body>
		</Card>;
	}
}

const InfoCard = styled(InfoCardUnstyled)`
	
`;
module.exports = InfoCard;