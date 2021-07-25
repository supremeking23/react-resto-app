import { useState } from "react";
import ItemBox from "./ItemBox";
import AddItemForm from "./AddItemForm";
import EditItemForm from "./EditItemForm";

// import DataBinding from "./DataBinding";
import CartItem from "./CartItem";

const Items = () => {
	const [items, setItems] = useState([
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
	]);
	const [cart, setCart] = useState([]);
	const [totalInCart, setTotalInCart] = useState(0);
	const [itemToEdit, setItemToEdit] = useState({});
	const [filter, setFilter] = useState("All");

	const [isEdit, setIsEdit] = useState(false);

	const changeDisplay = (category) => {
		// this.setState({ filter: category });
		setFilter(category);
	};

	// 1. create a function in parent
	// 2. pass that function as props to the child
	// 3. invoke the function in child
	const addItem = (newItem) => {
		newItem.id = items.length + 1;
		let itemsCopy = [...items];
		itemsCopy.push(newItem);

		setItems(itemsCopy);
	};

	const addItemToCart = (newItem) => {
		newItem.id = cart.length + 1;
		let isInTheCart = cart.findIndex((item) => item.name === newItem.name);
		let cartCopy;
		cartCopy = [...cart];
		if (isInTheCart === -1) {
			newItem.qty = 1;
			cartCopy.push(newItem);
			setCart(cartCopy);
		} else {
			cartCopy[isInTheCart].qty++;
			setCart(cartCopy);
		}

		// compute total
		let total = 0;
		for (let i = 0; i < cart.length; i++) {
			total = cart[i].qty * cart[i].price;
		}

		// this.setState({
		// 	totalInCart: this.state.totalInCart + totalInCart,
		// });

		setTotalInCart(totalInCart + total);
	};

	const editItem = (item) => {
		// this.setState({
		// 	itemToEdit: item,
		// 	isEdit: true,
		// });

		setItemToEdit(item);
		setIsEdit(true);
	};

	const editItemAction = (editItem) => {
		let findItemToEdit = items.findIndex((item) => item.id === editItem.id);

		let itemCopy = [...items];

		itemCopy[findItemToEdit].name = editItem.name;

		setItemToEdit({});
		setIsEdit(false);
		setItems(itemCopy);
	};

	let item_list = filter === "All" ? items : items.filter((item) => item.category === filter);

	return (
		<>
			<div className="container mt-5">
				<div className="row">
					{isEdit ? <EditItemForm itemTodEdit={itemToEdit} editItemAction={editItemAction} /> : <AddItemForm addItem={addItem} />}
				</div>

				{/* <DataBinding /> */}
				<div className="row">
					<div className="col-md-12 filter-buttons">
						<button
							type="button"
							className="btn btn-danger"
							onClick={() => {
								changeDisplay("All");
							}}>
							All
						</button>
						<button
							type="button"
							className="btn btn-warning"
							onClick={() => {
								changeDisplay("Drink");
							}}>
							Drink
						</button>
						<button
							type="button"
							className="btn btn-success"
							onClick={() => {
								changeDisplay("Food");
							}}>
							Food
						</button>
					</div>
				</div>
				<div className="row">
					{item_list.map((item) => (
						<ItemBox item={item} key={item.id} addItemToCart={addItemToCart} editItem={editItem} />
					))}
				</div>

				<div className="row">
					<div className="col-md-12">
						<hr style={{ backgroundColor: "#fff" }} />
						<div className="cart-heading">
							<h2>Cart</h2>
							<h2>Total: Php {totalInCart}</h2>
						</div>
					</div>

					{cart.map((item) => (
						<CartItem item={item} key={item.id} />
					))}
				</div>
			</div>
		</>
	);
};

// class Items extends React.Component {
// 	state = {
// 		items: [
// 			{
// 				id: 1,
// 				name: "Burger",
// 				price: 50,
// 				category: "Food",
// 				status: "active",
// 				image: "https://image.flaticon.com/icons/svg/1046/1046784.svg",
// 			},
// 			{
// 				id: 2,
// 				name: "Pizza",
// 				price: 100,
// 				category: "Food",
// 				status: "active",
// 				image: "https://image.flaticon.com/icons/svg/1046/1046771.svg",
// 			},
// 			{
// 				id: 3,
// 				name: "Fries",
// 				price: 25,
// 				category: "Food",
// 				status: "active",
// 				image: "https://image.flaticon.com/icons/svg/1046/1046786.svg",
// 			},
// 			{
// 				id: 4,
// 				name: "Coffee",
// 				price: 35,
// 				category: "Drink",
// 				status: "active",
// 				image: "https://image.flaticon.com/icons/svg/1046/1046785.svg",
// 			},
// 			{
// 				id: 5,
// 				name: "Iced Tea",
// 				price: 45,
// 				category: "Drink",
// 				status: "active",
// 				image: "https://image.flaticon.com/icons/svg/1046/1046782.svg",
// 			},
// 			{
// 				id: 6,
// 				name: "Hot Tea",
// 				price: 45,
// 				category: "Drink",
// 				status: "active",
// 				image: "https://image.flaticon.com/icons/svg/1046/1046792.svg",
// 			},
// 		],

// 		// dapat may quantity sa object
// 		cart: [],
// 		totalInCart: 0,
// 		isEdit: false,
// 		itemToEdit: {},
// 		filter: "All",
// 	};

// 	changeDisplay = (category) => {
// 		this.setState({ filter: category });
// 	};

// 	// 1. create a function in parent
// 	// 2. pass that function as props to the child
// 	// 3. invoke the function in child
// 	addItem = (newItem) => {
// 		newItem.id = this.state.items.length + 1;
// 		let itemsCopy = [...this.state.items];
// 		itemsCopy.push(newItem);

// 		this.setState({
// 			items: itemsCopy,
// 		});
// 	};

// 	addItemToCart = (newItem) => {
// 		newItem.id = this.state.cart.length + 1;
// 		let isInTheCart = this.state.cart.findIndex((item) => item.name === newItem.name);
// 		let cartCopy;
// 		cartCopy = [...this.state.cart];
// 		if (isInTheCart === -1) {
// 			newItem.qty = 1;
// 			cartCopy.push(newItem);
// 			this.setState({ cart: cartCopy });
// 		} else {
// 			cartCopy[isInTheCart].qty++;
// 			this.setState({ cart: cartCopy });
// 		}

// 		// compute total
// 		let totalInCart = 0;
// 		for (let i = 0; i < this.state.cart.length; i++) {
// 			totalInCart = this.state.cart[i].qty * this.state.cart[i].price;
// 		}

// 		this.setState({
// 			totalInCart: this.state.totalInCart + totalInCart,
// 		});
// 	};

// 	editItem = (item) => {
// 		// alert(item.name);
// 		this.setState({
// 			itemToEdit: item,
// 			isEdit: true,
// 		});
// 	};

// 	editItemAction = (editItem) => {
// 		let findItemToEdit = this.state.items.findIndex((item) => item.id === editItem.id);

// 		let itemCopy = [...this.state.items];

// 		itemCopy[findItemToEdit].name = editItem.name;

// 		this.setState({
// 			itemToEdit: {},
// 			isEdit: false,
// 			items: itemCopy,
// 		});
// 	};

// 	render() {
// 		let items = this.state.filter === "All" ? this.state.items : this.state.items.filter((item) => item.category === this.state.filter);
// 		return (
// 			<>
// 				<div className="container mt-5">
// 					<div className="row">
// 						{this.state.isEdit ? (
// 							<EditItemForm itemTodEdit={this.state.itemToEdit} editItemAction={this.editItemAction} />
// 						) : (
// 							<AddItemForm addItem={this.addItem} />
// 						)}
// 					</div>

// 					{/* <DataBinding /> */}
// 					<div className="row">
// 						<div className="col-md-12 filter-buttons">
// 							<button
// 								type="button"
// 								className="btn btn-danger"
// 								onClick={() => {
// 									this.changeDisplay("All");
// 								}}>
// 								All
// 							</button>
// 							<button
// 								type="button"
// 								className="btn btn-warning"
// 								onClick={() => {
// 									this.changeDisplay("Drink");
// 								}}>
// 								Drink
// 							</button>
// 							<button
// 								type="button"
// 								className="btn btn-success"
// 								onClick={() => {
// 									this.changeDisplay("Food");
// 								}}>
// 								Food
// 							</button>
// 						</div>
// 					</div>
// 					<div className="row">
// 						{items.map((item) => (
// 							<ItemBox item={item} key={item.id} addItemToCart={this.addItemToCart} editItem={this.editItem} />
// 						))}
// 					</div>

// 					<div className="row">
// 						<div className="col-md-12">
// 							<hr style={{ backgroundColor: "#fff" }} />
// 							<div className="cart-heading">
// 								<h2>Cart</h2>
// 								<h2>Total: Php {this.state.totalInCart}</h2>
// 							</div>
// 						</div>

// 						{this.state.cart.map((item) => (
// 							<CartItem item={item} key={item.id} />
// 						))}
// 					</div>
// 				</div>
// 			</>
// 		);
// 	}
// }

export default Items;
