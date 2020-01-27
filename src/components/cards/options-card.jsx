const React = require("react");
const styled = require("styled-components").default;

class OptionsCardUnstyled extends React.Component {
	render() {
		return <div className="card bg-dark">
			<div className="card-body">
				<h2>
					Options
				</h2>
				<p>
					This section allows you to configure the flower&apos;s general properties.
				</p>
				<div className="input-group" title="The height of the stem.">
					<div className="input-group-prepend">
						<span className="input-group-text">Stem Height</span>
					</div>
					<input className="form-control" type="number" min={1} id="stemLength" />
				</div>
				<br />
				<div className="input-group" title="The style of the stem.">
					<div className="input-group-prepend">
						<span className="input-group-text">Stem Type</span>
					</div>
					<select className="custom-select" id="stemType">
						<option value="top">Classic</option>
						<option value="alternating">Alternating</option>
						<option value="alternating_reverse">Alternating, reversed</option>
					</select>
				</div>
				<br />
				<div className="input-group" title="The scale of the flower.">
					<div className="input-group-prepend">
						<span className="input-group-text">Scale</span>
					</div>
					<input className="form-control" type="number" min={1} max={200} id="scale" />
				</div>
				<br />
				<div className="input-group" title="The amount of background pixels the flower should be surrounded with on each side.">
					<div className="input-group-prepend">
						<span className="input-group-text">Padding</span>
					</div>
					<input className="form-control" type="number" min={0} max={20} id="padding" />
				</div>
				<br />
				<div className="input-group" title="The width of the flower's pot.">
					<div className="input-group-prepend">
						<span className="input-group-text">Pot Width</span>
					</div>
					<input className="form-control" type="number" min={1} max={20} id="potWidth" />
				</div>
				<br />
				<div className="input-group" title="The height of the flower's pot.">
					<div className="input-group-prepend">
						<span className="input-group-text">Pot Height</span>
					</div>
					<input className="form-control" type="number" min={1} max={20} id="potHeight" />
				</div>
				<br />
				<div className="input-group" title="Setting the offset to nothing will make it in the middle. A flower cannot be offset to the point where it exits the pot.">
					<div className="input-group-prepend">
						<span className="input-group-text">Flower Root Offset</span>
					</div>
					<input className="form-control" type="number" min={1} max={20} id="flowerOffset" />
				</div>
			</div>
			<br />
		</div>;
	}
}

const OptionsCard = styled(OptionsCardUnstyled)`
	
`;
module.exports = OptionsCard;