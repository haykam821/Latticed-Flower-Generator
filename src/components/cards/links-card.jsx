const React = require("react");
const styled = require("styled-components").default;

class LinksCardUnstyled extends React.Component {
	render() {
		return <div className="card bg-dark">
			<div className="card-body">
				<h2>Links</h2>
				<a className="btn btn-secondary btn-block" href="https://github.com/haykam821/Latticed-Flower-Generator" title="View the source code for this project on GitHub.">View on GitHub</a>
				<a className="btn btn-secondary btn-block" href="https://github.com/haykam821/Latticed-Flower-Generator/issues/new" title="Open an issue so we can fix the bug or problem you reported.">Submit an Issue</a>
			</div>
		</div>;
	}
}

const LinksCard = styled(LinksCardUnstyled)`
	
`;
module.exports = LinksCard;