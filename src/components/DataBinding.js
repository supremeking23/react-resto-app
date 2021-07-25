import React from "react";

class DataBinding extends React.Component {
	state = {
		first_name: "",
		last_name: "",
	};

	inputChangeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
			// variable
			//hindi string
		});
	};

	resetButton = () => {
		this.setState({
			first_name: "",
			last_name: "",
			// variable
			//hindi string
		});
	};
	render() {
		return (
			<>
				<div className="row">
					<div className="col-md-6">
						<div className="item">
							<div class="form-group">
								<input
									type="text"
									className="form-control"
									value={this.state.first_name}
									name="first_name"
									onChange={this.inputChangeHandler}
									placeholder="First Name"
								/>
							</div>
							<div class="form-group">
								<input
									type="text"
									className="form-control"
									value={this.state.last_name}
									name="last_name"
									placeholder="Last Name"
									onChange={this.inputChangeHandler}
								/>
							</div>
							<button type="button" className="btn btn-order" onClick={this.resetButton}>
								Reset
							</button>

							<p>
								Welcome, {this.state.first_name} {this.state.last_name} !
							</p>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default DataBinding;
