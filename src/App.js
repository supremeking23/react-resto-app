import "./App.css";

import Items from "./components/Items";
function App() {
	return (
		<>
			<nav className="navbar navbar-dark">
				<div className="container">
					<span className="navbar-brand mb-0 h1">Resto Dash</span>
				</div>
			</nav>

			<Items />
		</>
	);
}

export default App;
