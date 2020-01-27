const React = require("react");
const styled = require("styled-components").default;

const LeftColumn = require("./left-column.jsx");
const RightColumn = require("./right-column.jsx");

const Config = require("../util/config.js");
const Canvas = require("../util/canvas.js");

class AppUnstyled extends React.Component {
	constructor(props) {
		super(props);

		this.config = new Config();
		this.canvas = new Canvas();
	}

	render() {
		return <div id="main" className={this.props.className + " container"}>
			<div className="row">
				<LeftColumn config={this.config} canvas={this.canvas} />
				<RightColumn config={this.config} canvas={this.canvas} />
			</div>
		</div>;
	}
}

const App = styled(AppUnstyled)`
	width: 100%;
	height: 100%;
`;
module.exports = App;