import React from "react";
import ItemBox from "./ItemBox";
import AddItemForm from "./AddItemForm";
import EditItemForm from "./EditItemForm";

// import DataBinding from "./DataBinding";
import CartItem from "./CartItem";

class Items extends React.Component {
	state = {
		items: [
			{
				id: 1,
				name: "Burger",
				price: 50,
				category: "Food",
				status: "active",
				image: "https://image.flaticon.com/icons/svg/1046/1046784.svg",
			},
			{
				id: 2,
				name: "Pizza",
				price: 100,
				category: "Food",
				status: "active",
				image: "https://image.flaticon.com/icons/svg/1046/1046771.svg",
			},
			{
				id: 3,
				name: "Fries",
				price: 25,
				category: "Food",
				status: "active",
				image: "https://image.flaticon.com/icons/svg/1046/1046786.svg",
			},
			{
				id: 4,
				name: "Coffee",
				price: 35,
				category: "Drink",
				status: "active",
				image: "https://image.flaticon.com/icons/svg/1046/1046785.svg",
			},
			{
				id: 5,
				name: "Iced Tea",
				price: 45,
				category: "Drink",
				status: "active",
				image: "https://image.flaticon.com/icons/svg/1046/1046782.svg",
			},
			{
				id: 6,
				name: "Hot Tea",
				price: 45,
				category: "Drink",
				status: "active",
				image: "https://image.flaticon.com/icons/svg/1046/1046792.svg",
			},
		],

		// dapat may quantity sa object
		cart: [],
		totalInCart: 0,
		isEdit: false,
		itemToEdit: {},
		filter: "All",
	};

	changeDisplay = (category) => {
		this.setState({ filter: category });
	};

	// 1. create a function in parent
	// 2. pass that function as props to the child
	// 3. invoke the function in child
	addItem = (newItem) => {
		newItem.id = this.state.items.length + 1;
		let itemsCopy = [...this.state.items];
		itemsCopy.push(newItem);

		this.setState({
			items: itemsCopy,
		});
	};

	addItemToCart = (newItem) => {
		newItem.id = this.state.cart.length + 1;
		let isInTheCart = this.state.cart.findIndex((item) => item.name === newItem.name);
		let cartCopy;
		cartCopy = [...this.state.cart];
		if (isInTheCart === -1) {
			newItem.qty = 1;
			cartCopy.push(newItem);
			this.setState({ cart: cartCopy });
		} else {
			// let updateQuantityItem = this.state.cart.filter((item) => item.name === newItem.name);
			// let updateQuantityItem = this.state.cart.map((item) => {
			// 	if (item.name === newItem.name) {
			// 		item.qty = item.qty + 1;
			// 	}
			// 	return item;
			// });
			cartCopy[isInTheCart].qty++;
			this.setState({ cart: cartCopy });
		}

		// compute total
		let totalInCart = 0;
		for (let i = 0; i < this.state.cart.length; i++) {
			totalInCart = this.state.cart[i].qty * this.state.cart[i].price;
		}

		this.setState({
			totalInCart: this.state.totalInCart + totalInCart,
		});
	};

	editItem = (item) => {
		// alert(item.name);
		this.setState({
			itemToEdit: item,
			isEdit: true,
		});
	};

	editItemAction = (editItem) => {
		let findItemToEdit = this.state.items.findIndex((item) => item.id === editItem.id);

		let itemCopy = [...this.state.items];

		itemCopy[findItemToEdit].name = editItem.name;

		this.setState({
			itemToEdit: {},
			isEdit: false,
			items: itemCopy,
		});
	};

	render() {
		// let totalInCart = this.state.cart.map((item) => {
		// 	let total = 0;
		// 	total = item.qty * item.price;
		// 	return total;
		// });

		let items = this.state.filter === "All" ? this.state.items : this.state.items.filter((item) => item.category === this.state.filter);
		return (
			<>
				<div className="container mt-5">
					<div className="row">
						{this.state.isEdit ? (
							<EditItemForm itemTodEdit={this.state.itemToEdit} editItemAction={this.editItemAction} />
						) : (
							<AddItemForm addItem={this.addItem} />
						)}
					</div>

					{/* <DataBinding /> */}
					<div className="row">
						<div className="col-md-12 filter-buttons">
							<button
								type="button"
								className="btn btn-danger"
								onClick={() => {
									this.changeDisplay("All");
								}}>
								All
							</button>
							<button
								type="button"
								className="btn btn-warning"
								onClick={() => {
									this.changeDisplay("Drink");
								}}>
								Drink
							</button>
							<button
								type="button"
								className="btn btn-success"
								onClick={() => {
									this.changeDisplay("Food");
								}}>
								Food
							</button>
						</div>
					</div>
					<div className="row">
						{items.map((item) => (
							<ItemBox item={item} key={item.id} addItemToCart={this.addItemToCart} editItem={this.editItem} />
						))}
					</div>

					<div className="row">
						<div className="col-md-12">
							<hr style={{ backgroundColor: "#fff" }} />
							<div className="cart-heading">
								<h2>Cart</h2>
								<h2>Total: Php {this.state.totalInCart}</h2>
							</div>
						</div>

						{this.state.cart.map((item) => (
							<CartItem item={item} key={item.id} />
						))}
					</div>
				</div>
			</>
		);
	}
}

export default Items;
