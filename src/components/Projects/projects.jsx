import "./projects.css";
import Project from "./project";
import { useState } from "react";

const Projects = () => {
    const [projects] = useState([
        {
            id: "01",
            name: "Pet Shop",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, harum. Saepe earum exercitationem distinctio, hic consequatur officia illum excepturi iste corporis labore quo fugiat harum? Ipsa provident exercitationem odio temporibus.",
            projectType: "Landing page",
            technologys: ["HTML", "CSS", "JavaScript"],
            date: "2019",
            source: "https://github.com/milanpanin/PetHouse"
        },
        {
            id: "02",
            name: "Pet Shop",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, harum. Saepe earum exercitationem distinctio, hic consequatur officia illum excepturi iste corporis labore quo fugiat harum? Ipsa provident exercitationem odio temporibus.",
            projectType: "Landing page",
            technologys: ["HTML", "CSS", "JavaScript"],
            date: "2019",
            source: "https://github.com/milanpanin/PetHouse"
        },
        {
            id: "03",
            name: "Pet Shop",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, harum. Saepe earum exercitationem distinctio, hic consequatur officia illum excepturi iste corporis labore quo fugiat harum? Ipsa provident exercitationem odio temporibus.",
            projectType: "Landing page",
            technologys: ["HTML", "CSS", "JavaScript"],
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