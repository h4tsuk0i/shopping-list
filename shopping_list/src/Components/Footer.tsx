import {Link} from "react-router-dom";

export function Footer(){
    return (
        <footer>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </footer>
    );
}