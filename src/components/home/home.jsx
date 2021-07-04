import "./home.css";

const Home = () => {
    return ( 
        <section className="home">
            <h1 className="header-text">Milan - Web Developer</h1>
            <p className="header-details">
                Milan is a student from Novi Sad / Serbia, who likes to spend his time exploring the 
                interesting world of JavaScript and learning how to develop the web in the best ways!
            </p>
            <div className="header-social">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/milan-panin/"><span>a</span><i className="fa fa-linkedin-square" aria-hidden="true"></i></a> 
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/milanpanin"><span>a</span><i className="fa fa-github" aria-hidden="true"></i></a> 
                <a href="mailto: milanpanin@gmail.com"><span>a</span><i className="fa fa-envelope" aria-hidden="true"></i></a> 
            </div>
        </section>
    );
}
 
export default Home;