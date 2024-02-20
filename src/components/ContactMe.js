import React from "react";
import Envelope from "../assets/images/Envelope.png";
import Image from "./Image";
import Phone from "../assets/images/Phone.png";
import { isMobile } from "react-device-detect";
import Resume from "../assets/Resume.pdf";
import ResumeImage from "../assets/images/Resume.png"

const ContactMe = () => {
    const desktopBackground = {
        position: "fixed",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        justifyContent: "spaceBetween",
        backgroundColor: "var(--color-navbar)",
        padding: "10px 10px",
        margin: "0 auto",
        borderRadius: "8px 8px 0 0",
        width: "75%"
    };

    const mobileBackground = {
        position: "fixed",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        justifyContent: "spaceBetween",
        backgroundColor: "var(--color-navbar)",
        padding: "10px 10px",
        margin: "0 auto",
        borderRadius: "8px 8px 0 0",
        width: "100%"
    }

    const imageStyle = {
        width: "100%",
        height: "100%",
        marginLeft: "5%",
        marginRight: "5%",
        paddingRight: "10%",
    };

    const parent = {
        display: "flex",
        justifyContent: "space-between",
        width: "100vw",
    }

    const resumeLink = {
        display: "flex",
        padding: "10px 20px",
        margin: "0 auto",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "0 0 8px 8px"
    }

    const child = {
        width: "50%",
        border: "4px solid black",
        color: "black",
        borderRadius: "10px",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        margin: "0"
    }

    const handleHover = (e) => {
        e.target.style.transform = "scale(1.5)";
    };

    const handleHoverOut = (e) => {
        e.target.style.transform = "scale(1)";
    };

    const text = {
        fontSize: isMobile ? "8px" : "16px",
        marginLeft: "2.5%",
        marginRight: "2.5%",
    }

    return(
        <div style={isMobile ? mobileBackground : desktopBackground}>
            <div style={parent}>
                <div style={Object.assign({}, child, {})}>
                    <Image
                        style={imageStyle}
                        file={Envelope} />
                    <p style={text}>
                        koyman41@gmail.com
                    </p>
                </div>
                <div style={resumeLink}>
                    <a 
                        href={Resume}
                        rel="noreferrer"
                        target="_blank"
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHoverOut}
                    >
                        <Image
                            style={imageStyle}
                            file={ResumeImage}
                        />
                    </a>
                </div>
                <div style={Object.assign({}, child, {})}>
                    <Image
                        style={imageStyle}
                        file={Phone} />
                    <p style={text}>
                        +1-(405)-919-2090
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
