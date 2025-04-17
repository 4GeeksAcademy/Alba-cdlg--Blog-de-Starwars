const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="#">
                <img
                    src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png"
                    alt="Star Wars Logo"
                    className="logo-navbar me-2"
                />
            </a>
        </div>
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Favoritos
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
                <li className="dropdown-item text-muted">No Favoritos</li>
            </ul>
        </div>
    </nav>
)
}

export default Navbar