import React from "react";
import NavBar from "../components/NavBar";
import ContactMe from "../components/ContactMe";
import InterestsList from "../components/texts/InterestsList";

const Interests = () => {
    return(
        <div>
            <NavBar
                page={"Interests"}
            />
            <InterestsList />
            <ContactMe />
        </div>
    );
}

export default Interests;