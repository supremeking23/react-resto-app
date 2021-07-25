import React from "react";

class AddItemForm extends React.Component {
	state = {
		name: "",
		category: "",
		price: 0,
		image: "",
	};

	inputChangeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
			// variable
			//hindi string
		});
	};

	addNewItem = () => {
		// this.props.addItem("test");

		let newItem = {
			name: this.state.name,
			category: this.state.category,
			price: this.state.price,
			image: this.state.image,
		};

		this.props.addItem(newItem);
		this.setState({
			name: "",
			category: "",
			price: 0,
			image: "",
		});
	};
	render() {
		return (
			<div className="col-md-6 offset-md-3">
				<h2>Add Item Form</h2>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						placeholder="Name"
						value={this.state.name}
						name="name"
						onChange={this.inputChangeHandler}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Category"
						className="form-control"
						value={this.state.category}
						name="category"
						onChange={this.inputChangeHandler}
					/>
				</div>

				<div className="form-group">
					<input
						type="text"
						placeholder="Price"
						className="form-control"
						value={this.state.price}
						name="price"
						onChange={this.inputChangeHandler}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Image"
						className="form-control"
						value={this.state.image}
						name="image"
						onChange={this.inputChangeHandler}
					/>
				</div>
				<button type="button" className="btn btn-order float-right" onClick={this.addNewItem}>
					Add Item
				</button>
			</div>
		);
	}
}

export default AddItemForm;
