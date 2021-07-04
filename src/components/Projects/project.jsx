import "./project.css";

const Project = (props) => {
    return ( 
        <section className="project">
            <h2 className="project-name">{props.project.name}</h2>
            <p className="project-type">Project type: {props.project.projectType}</p>
            <p className="project-description">Project description: {props.project.description}</p>
            <p className="project-tech">Used technologys: {props.project.technologys.map(item => `${item} `)}</p>
            <p className="project-date">Project created: {props.project.date}</p>
            <a href={props.project.source} target="_blank" rel="noopener noreferrer"><button className="project-visit">Visit project</button></a> 
        </section>
     );
}
 
export default Project;