import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="green accent-2">
            <div className="nav-wrapper">
            <Link to="/" className="brand-logo">React Movies Library</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Header;