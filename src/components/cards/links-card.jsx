const React = require("react");
const styled = require("styled-components").default;

const { Card, Button } = require("react-bootstrap");

class LinksCardUnstyled extends React.Component {
	render() {
		return <Card className="bg-dark">
			<Card.Body>
				<h2>Links</h2>
				<Button className="btn btn-secondary btn-block" href="https://github.com/haykam821/Latticed-Flower-Generator" title="View the source code for this project on GitHub.">
					View on GitHub
				</Button>
				<Button className="btn btn-secondary btn-block" href="https://github.com/haykam821/Latticed-Flower-Generator/issues/new" title="Open an issue so we can fix the bug or problem you reported.">
					Submit an Issue
				</Button>
			</Card.Body>
		</Card>;
	}
}

const LinksCard = styled(LinksCardUnstyled)`
	
`;
module.exports = LinksCard;