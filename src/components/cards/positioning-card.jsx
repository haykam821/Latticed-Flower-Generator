const React = require("react");
const styled = require("styled-components").default;

const { Card, Table } = require("react-bootstrap");

class PositioningCardUnstyled extends React.Component {
	render() {
		return <Card className="bg-dark">
			<Card.Body>
				<h2>
					Positioning
				</h2>
				<p>
					As it is generally easier to position a flower at a tangible point, this tool allows you to use the position of the flower
					core to get the corner position for use as the template&apos;s position.
				</p>
				<Table bordered variant="dark">
					<thead>
						<tr>
							<th></th>
							<th>Core</th>
							<th>Top-Right</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>X</td>
							<td>
								<input className="noConfig" id="posCoreX" type="number" />
							</td>
							<td id="posTopX"></td>
						</tr>
						<tr>
							<td>Y</td>
							<td>
								<input className="noConfig" id="posCoreY" type="number" />
							</td>
							<td id="posTopY"></td>
						</tr>
					</tbody>
				</Table>
			</Card.Body>
		</Card>;
	}
}

const PositioningCard = styled(PositioningCardUnstyled)`
	
`;
module.exports = PositioningCard;