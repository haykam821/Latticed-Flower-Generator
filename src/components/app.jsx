const React = require("react");
const styled = require("styled-components").default;

const LeftColumn = require("./left-column.jsx");
const RightColumn = require("./right-column.jsx");

class AppUnstyled extends React.Component {
	render() {
		return <div id="main" className={this.props.className + " container"}>
			<div className="row">
				<LeftColumn />
				<RightColumn />
			</div>
		</div>;
	}
}

const App = styled(AppUnstyled)`
	width: 100%;
	height: 100%;
`;
module.exports = App;