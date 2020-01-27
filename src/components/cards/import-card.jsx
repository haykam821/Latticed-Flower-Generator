const React = require("react");
const styled = require("styled-components").default;

class ImportCardUnstyled extends React.Component {
	render() {
		return <div className="card bg-dark">
			<div className="card-body">
				<h2>
					Import
				</h2>
				<textarea className="json form-control" id="importInput" rows={5} title="Paste in data from the 'Export' box to use it again."></textarea>
				<br />
				<button className="btn btn-secondary btn-block" id="import" title="Click this to import data from the above box. It must be valid JSON (if it is from that box unedited, it should be).">
					Import
				</button>
				<button className="btn btn-secondary btn-block" id="lsLoad" title="You must have used the 'Save in Local Storage' button in the Export section first to use this feature.">
					Import from Local Storage
				</button>
			</div>
		</div>;
	}
}

const ImportCard = styled(ImportCardUnstyled)`
	
`;
module.exports = ImportCard;