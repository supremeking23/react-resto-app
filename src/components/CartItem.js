import React from "react";

class CartItem extends React.Component {
	render() {
		let { name, image, price, category, qty } = this.props.item;
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
								<h6>Php {price}</h6>
								<h6>Qty {qty}</h6>
								<h6>Subtotal: Php {price * qty}</h6>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default CartItem;
