const React = require("react");
const styled = require("styled-components").default;

const LeftColumn = require("./left-column.jsx");
const RightColumn = require("./right-column.jsx");

const Config = require("../util/config.js");

class AppUnstyled extends React.Component {
	constructor(props) {
		super(props);
		this.config = new Config();
	}

	render() {
		return <div id="main" className={this.props.className + " container"}>
			<div className="row">
				<LeftColumn config={this.config} />
				<RightColumn config={this.config} />
			</div>
		</div>;
	}
}

const App = styled(AppUnstyled)`
	width: 100%;
	height: 100%;
`;
module.exports = App;