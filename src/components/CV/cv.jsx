import "./cv.css";
import CvImg from "../../content/cv.jpg";
import CvPdf from "../../content/Milan-Panin-CV.pdf";

const Cv = () => {
    return (
        <section className="cv">
            <img className="cv-img" src={CvImg} alt="CV" /><br/>
            <a href={CvPdf} download><button className="cv-downloadBtn">Download CV</button></a>
            
        </section>
     );
}
 
export default Cv;