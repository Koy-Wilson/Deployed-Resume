import React from "react";
import NavBar from "../components/NavBar";
import ContactMe from "../components/ContactMe";
import HomeText from "../components/texts/HomeText";

const Home = () => {
    return(
        <div> 
            <NavBar 
                page={"Home"}
            />
            <HomeText />
            <ContactMe />
        </div>
    );
}

export default Home;
