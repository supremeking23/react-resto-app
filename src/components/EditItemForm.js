import React from "react";

class EditItemForm extends React.Component {
	state = {
		name: this.props.itemTodEdit.name,
		category: this.props.itemTodEdit.category,
		price: this.props.itemTodEdit.price,
		image: this.props.itemTodEdit.image,
		// name: "",
		// category: "",
		// price: 0,
		// image: "",
	};

	inputChangeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
			// variable
			//hindi string
		});
	};

	editItemInformation = () => {
		// this.props.addItem("test");

		let item = {
			id: this.props.itemTodEdit.id,
			name: this.state.name,
			category: this.state.category,
			price: this.state.price,
			image: this.state.image,
		};

		this.props.editItemAction(item);
		this.setState({
			name: "",
			category: "",
			price: 0,
			image: "",
		});
	};
	render() {
		let { name, category, price, image } = this.state;

		// alert(this.props.itemTodEdit.name);

		return (
			<div className="col-md-6 offset-md-3">
				<h2>Add Item Form</h2>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Name" value={name} name="name" onChange={this.inputChangeHandler} />
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Category"
						className="form-control"
						value={category}
						name="category"
						onChange={this.inputChangeHandler}
					/>
				</div>

				<div className="form-group">
					<input type="text" placeholder="Price" className="form-control" value={price} name="price" onChange={this.inputChangeHandler} />
				</div>
				<div className="form-group">
					<input type="text" placeholder="Image" className="form-control" value={image} name="image" onChange={this.inputChangeHandler} />
				</div>
				<button type="button" className="btn btn-order float-right" onClick={this.editItemInformation}>
					Edit Item
				</button>
			</div>
		);
	}
}

export default EditItemForm;
