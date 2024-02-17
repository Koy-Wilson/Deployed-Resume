import React from "react";
import NavBar from "../components/NavBar";
import ContactMe from "../components/ContactMe";
import ExperienceList from "../components/texts/ExperienceList";

const Experience = () => {
    return(
        <div>
            <NavBar
                page={"Experience"}
            />
            <ExperienceList />
            <ContactMe />
        </div>
    );
}

export default Experience;