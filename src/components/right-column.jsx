const React = require("react");
const styled = require("styled-components").default;

const ColorsCard = require("./cards/colors-card.jsx");
const OptionsCard = require("./cards/options-card.jsx");
const PositioningCard = require("./cards/positioning-card.jsx");
const ExportCard = require("./cards/export-card.jsx");
const ImportCard = require("./cards/import-card.jsx");

class RightColumnUnstyled extends React.Component {
	render() {
		return <div className="col text-light">
			<ColorsCard config={this.props.config} canvas={this.props.canvas} />
			<br/>
			<OptionsCard config={this.props.config} canvas={this.props.canvas} />
			<br/>
			<PositioningCard config={this.props.config} canvas={this.props.canvas} />
			<br/>
			<ExportCard config={this.props.config} canvas={this.props.canvas} />
			<br/>
			<ImportCard config={this.props.config} canvas={this.props.canvas} />
		</div>;
	}
}

const RightColumn = styled(RightColumnUnstyled)`
	
`;
module.exports = RightColumn;