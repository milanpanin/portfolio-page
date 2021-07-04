import "./blog.css";

const Blog = () => {
    return ( 
        <section className="blog">
            <h1 className="blog-header">Blog</h1><br/>
            <p className="blog-info">
                <span>Coming soon...</span><br/>
                Until then, read my blog on the Medium service: <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@milanpanin">https://medium.com/@milanpanin</a><br/>
                I hope you like my articles, and that you learned something new from them :)
            </p>
        </section>
     );
}
 
export default Blog;