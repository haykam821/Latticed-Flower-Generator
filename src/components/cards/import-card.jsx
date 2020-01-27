const React = require("react");
const styled = require("styled-components").default;

const { Card, Button, FormControl } = require("react-bootstrap");

class ImportCardUnstyled extends React.Component {
	render() {
		return <Card className="bg-dark">
			<Card.Body>
				<h2>
					Import
				</h2>
				<FormControl as="textarea" className="json" id="importInput" rows={5} title="Paste in data from the 'Export' box to use it again."></FormControl>
				<br />
				<Button variant="secondary" block id="import" title="Click this to import data from the above box. It must be valid JSON (if it is from that box unedited, it should be).">
					Import
				</Button>
				<Button variant="secondary" block id="lsLoad" title="You must have used the 'Save in Local Storage' button in the Export section first to use this feature.">
					Import from Local Storage
				</Button>
			</Card.Body>
		</Card>;
	}
}

const ImportCard = styled(ImportCardUnstyled)`
	
`;
module.exports = ImportCard;