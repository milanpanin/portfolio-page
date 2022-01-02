import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
    return ( 
        <nav className="navigation">
            <div className="navigation-logo">
                <i className="fa fa-code" aria-hidden="true"></i>
                <p> Milan Panin</p>
            </div>
            <ul className="navigation-list">
                <Link to="/" className="navigation-item">Home</Link>
                <Link to="/projects" className="navigation-item">Projects</Link>
                <Link to="/blog" className="navigation-item">Blog</Link>
            </ul>
        </nav>
     );
}
 
export default Navigation;