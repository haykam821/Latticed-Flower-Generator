const React = require("react");
const styled = require("styled-components").default;

const { Card, Button, FormControl } = require("react-bootstrap");

class ExportCardUnstyled extends React.Component {
	render() {
		return <Card className="bg-dark">
			<Card.Body>
				<h2>
					Export
				</h2>
				<FormControl as="textarea" className="json" id="output" rows={5} title="Paste this later in the 'Import' box to import it."></FormControl>
				<br />
				<Button variant="secondary" block id="lsSave" title="You can use the 'Load in Local Storage' button in the Import section to load data after clicking this button.">
					Save in Local Storage
				</Button>
				<Button variant="secondary" block id="fiddle" title="Opens the flower in the PxlsFiddle.com online tool.">
					Open in PxlsFiddle.com
				</Button>
				<Button variant="secondary" block id="pxls" title="Use as a template in Pxls.space without needing to upload it to an image host.">
					Open in Pxls.space
				</Button>
			</Card.Body>
		</Card>;
	}
}

const ExportCard = styled(ExportCardUnstyled)`
	
`;
module.exports = ExportCard;