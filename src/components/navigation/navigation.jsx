import "./navigation.css";

const Navigation = () => {
    return ( 
        <nav className="navigation">
            <div className="navigation-logo">
                <i className="fa fa-code" aria-hidden="true"></i>
                <p> Milan Panin</p>
            </div>
            <ul className="navigation-list">
                <li className="navigation-item">Home</li>
                <li className="navigation-item">Skills</li>
                <li className="navigation-item">Projects</li>
                <li className="navigation-item">Blog</li>
            </ul>
        </nav>
     );
}
 
export default Navigation;