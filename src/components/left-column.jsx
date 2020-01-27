const React = require("react");
const styled = require("styled-components").default;

const InfoCard = require("./cards/info-card.jsx");
const CanvasCard = require("./cards/canvas-card.jsx");
const LinksCard = require("./cards/links-card.jsx");

class LeftColumnUnstyled extends React.Component {
	render() {
		return <div className="col text-light">
			<InfoCard config={this.props.config} />
			<br />
			<CanvasCard config={this.props.config} />
			<br />
			<LinksCard config={this.props.config} />
		</div>;
	}
}

const LeftColumn = styled(LeftColumnUnstyled)`
	
`;
module.exports = LeftColumn;