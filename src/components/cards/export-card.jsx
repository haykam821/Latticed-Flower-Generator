const React = require("react");
const styled = require("styled-components").default;

const { Card, Button, FormControl } = require("react-bootstrap");

class ExportCardUnstyled extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			config: this.props.config.export() || "{}",
		};

		this.saveInLocalStorage = this.saveInLocalStorage.bind(this);
		this.openInPxlsFiddle = this.openInPxlsFiddle.bind(this);
		this.openInPxls = this.openInPxls.bind(this);
	}

	componentDidMount() {
		this.changeListener = this.props.config.on("change", () => {
			this.setState({
				config: this.props.config.export(),
			});
		});
	}

	componentWillUnmount() {
		this.props.config.removeListener(this.changeListener);
	}

	saveInLocalStorage() {
		localStorage.setItem("savedConfig", this.props.config.export());
	}

	openInPxlsFiddle() {
		window.open(`https://pxlsfiddle.com/?img=${this.props.canvas.getImageURL()}`);
	}

	openInPxls() {
		window.open(`https://pxls.space/#template=${this.props.canvas.getImageURL()}`);
	}

	render() {
		return <Card className="bg-dark">
			<Card.Body>
				<h2>
					Export
				</h2>
				<FormControl as="textarea" className="json" id="output" rows={5} title="Paste this later in the 'Import' box to import it." value={this.state.config} readOnly />
				<br />
				<Button variant="secondary" block id="lsSave" title="You can use the 'Load in Local Storage' button in the Import section to load data after clicking this button." onClick={this.saveInLocalStorage}>
					Save in Local Storage
				</Button>
				<Button variant="secondary" block id="fiddle" title="Opens the flower in the PxlsFiddle.com online tool." onClick={this.openInPxlsFiddle}>
					Open in PxlsFiddle.com
				</Button>
				<Button variant="secondary" block id="pxls" title="Use as a template in Pxls.space without needing to upload it to an image host." onClick={this.openInPxls}>
					Open in Pxls.space
				</Button>
			</Card.Body>
		</Card>;
	}
}

const ExportCard = styled(ExportCardUnstyled)`
	
`;
module.exports = ExportCard;