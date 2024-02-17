import React from "react";
import { isMobile } from "react-device-detect";

const HomeIntroduction = () => {
    const desktopStyle = {
        fontSize: "26px",
        alignItems: "center",
        margin: "5%",
        overflowY: "auto"
    }

    const mobileStyle = {
        fontSize: "14px",
        alignItems: "center",
        margin: "5%",
        overflowY: "auto"
    }

    return(
        <p style={isMobile ? mobileStyle : desktopStyle}>
            Hello there!<br />

            Welcome to my resume website. 
            My name is Koy Wilson, and I'm currently pursuing my graduate studies at the University of Oklahoma. 
            I anticipate completing my Master's degree in computer science by December 2024, 
            building upon the foundation of my Bachelor's degree in computer science, which I earned in December 2023. <br />

            Please feel free to explore my page to learn more about my academic background, professional experience, and skill set. Thank you for visiting!
        </p>
    )
}

export default HomeIntroduction;