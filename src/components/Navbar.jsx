import { Link } from "react-router-dom";
import "../index.css"

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
				<img className="navbar-brand test-black ms-5 logostarwars" src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png" alt="Star Wars Logo" />
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Favoritos</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};