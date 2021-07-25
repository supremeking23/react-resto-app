import React from "react";

class ItemBox extends React.Component {
	order = (data) => {
		// alert(data.name);
		let item = {
			name: data.name,
			category: data.category,
			price: data.price,
			image: data.image,
		};

		this.props.addItemToCart(item);
	};

	edit = (data) => {
		this.props.editItem(data);
	};

	render() {
		let { name, image, price, category } = this.props.item;
		return (
			<>
				<div className="col-md-4">
					<div className="item">
						<div className="row">
							<div className="col-md-6">
								<img src={image} alt={name} />
							</div>
							<div className="col-md-6 d-flex flex-column text-center">
								<h4>{name}</h4>
								<h6>{category}</h6>
								<p>Php {price}</p>
								<button type="button" className="btn btn-order" onClick={() => this.order(this.props.item)}>
									Order
								</button>
								<button type="button" className="btn btn-info mt-1" onClick={() => this.edit(this.props.item)}>
									Edit
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default ItemBox;
