import React from "react";
import NavBar from "../components/NavBar";
import ContactMe from "../components/ContactMe";
import ProjectsLists from "../components/texts/ProjectsLists";

const Projects = () => {
    return(
        <div>
            <NavBar
                page={"Projects"}
            />
            <ProjectsLists />
            <ContactMe />
        </div>
    );
}

export default Projects;