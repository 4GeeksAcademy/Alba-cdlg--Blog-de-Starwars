import { useGlobalContext } from "../context/GlobalContext"

const Navbar = () => {
    const {state, dispatch} = useGlobalContext();

    const handleRemove = (item) => {
        dispatch({type: 'REMOVE_FAVORITE', payload: item})
    };


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
                Favoritos {state.favorites.length}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
                {
                    state.favorites.length === 0 ? (
                        <li className="dropdown-item text-muted">No Favoritos</li>
                    ) : (
                        state.favorites.map((item) => (
                            <li key={item.uid}>
                                {item.name}
                                <button className="btn btn-sm" onClick={() => handleRemove(item)}>
                                    <i className="bi bi-trash"></i>
                                    
                                </button>
                            </li>
                        ))
                    )
                }
                
            </ul>
        </div>
    </nav>
)
}

export default Navbar