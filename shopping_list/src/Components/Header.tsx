import {Link} from "react-router-dom";

export function Header(){
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </header>
    );
}
