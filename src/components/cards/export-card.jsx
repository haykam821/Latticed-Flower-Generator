const React = require("react");
const styled = require("styled-components").default;

class ExportCardUnstyled extends React.Component {
	render() {
		return <div className="card bg-dark">
			<div className="card-body">
				<h2>
					Export
				</h2>
				<textarea className="json form-control" id="output" rows={5} title="Paste this later in the 'Import' box to import it."></textarea>
				<br />
				<button className="btn btn-secondary btn-block" id="lsSave" title="You can use the 'Load in Local Storage' button in the Import section to load data after clicking this button.">
					Save in Local Storage
				</button>
				<button className="btn btn-secondary btn-block" id="fiddle" title="Opens the flower in the PxlsFiddle.com online tool.">
					Open in PxlsFiddle.com
				</button>
				<button className="btn btn-secondary btn-block" id="pxls" title="Use as a template in Pxls.space without needing to upload it to an image host.">
					Open in Pxls.space
				</button>
			</div>
		</div>;
	}
}

const ExportCard = styled(ExportCardUnstyled)`
	
`;
module.exports = ExportCard;