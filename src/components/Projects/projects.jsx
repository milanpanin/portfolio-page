import "./projects.css";
import Project from "./project";
import { useState } from "react";

const Projects = () => {
    const [projects] = useState([
        {
            id: "03",
            name: "CRUD User",
            description: "Small React CRUD application for abstract customer management. ",
            projectType: "CRUD Web Application",
            technologys: ["React.js / Function components"],
            date: "2021",
            source: "https://github.com/milanpanin/crud-user"
        },
        {
            id: "02",
            name: "Korpica",
            description: "Small web store application created to master the basics of React.",
            projectType: "Web Application",
            technologys: ["React.js / Class components"],
            date: "2020",
            source: "https://github.com/milanpanin/Korpica"
        },
        {
            id: "01",
            name: "Pet Shop",
            description: "PetHouse is one of my landing page projects created for personal training and improvement my skills. ",
            projectType: "Landing Page",
            technologys: ["HTML", "CSS"],
            date: "2019",
            source: "https://github.com/milanpanin/PetHouse"
        }
    ]);

    return ( 
        <section className="projects">
            <h1 className="projects-header">Projects</h1>
            {projects.map(project => <Project key={project.id} project={project}/>)}
        </section>
     );
}
 
export default Projects;