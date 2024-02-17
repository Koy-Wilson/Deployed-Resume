import React from "react";
import NavBar from "../components/NavBar";
import ContactMe from "../components/ContactMe";
import AccomplishmentList from "../components/texts/AccomplishmentList";

const Accomplishments = () => {
    return(
        <div>
            <NavBar
                page={"Accomplishments"}
            />
            <AccomplishmentList />
            <ContactMe />
        </div>
    );
}

export default Accomplishments;