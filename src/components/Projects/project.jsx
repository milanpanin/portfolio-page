import "./project.css";

const Project = (props) => {
    return ( 
        <section className="project">
            <h2 className="project-name">{props.project.name}</h2>
            <p className="project-type">Project type: {props.project.projectType}</p>
            <p className="project-description">{props.project.description}</p>
            <p className="project-tech">Technologys: {props.project.technologys.map(item => `${item} `)}</p>
            <p className="project-date">Project created: {props.project.date}</p>
            <a href={props.project.source}><button className="project-btn">Visit project</button></a> 
        </section>
     );
}
 
export default Project;