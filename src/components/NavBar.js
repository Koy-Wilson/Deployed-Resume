import React, { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import Image from "./Image";
import GitHub from "../assets/images/github.jpg";
import GitLab from "../assets/images/gitlab.jpg";
import LinkedIn from "../assets/images/linkedin.jpg";
import Instagram from "../assets/images/instagram.jpg";
import { isMobile } from "react-device-detect";

const NavBar = ({ page }) => {
    const [hoveredGitHub, setHoveredGitHub] = useState(false);
    const [hoveredGitLab, setHoveredGitLab] = useState(false);
    const [hoveredLinkedIn, setHoveredLinkedIn] = useState(false);
    const [hoveredInstagram, setHoveredInstagram] = useState(false);

    const imageStyle = {
        width: "100%",
        height: "100%",
        transition: "transform 0.3s ease-in-out",
    };

    const getHoverStyle = (isHovered) => ({
        transition: "transform 0.3s ease-in-out",
        transform: isHovered ? "scale(1.5)" : "scale(1)",
    });
    
    const navButtons = {
        display: "flex",
        justifyContent: "spaceBetween",
        padding: "10px 20px",
        margin: "0 auto",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "0 0 8px 8px"
    };
    
    const leftLinks = {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        margin: "0 auto",
        alignItems: "center",
        justifyContent: "center",
        objectFit: "contain",
    };
    
    const desktopBackground = {
        position: "fixed",
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        justifyContent: "spaceBetween",
        backgroundColor: "var(--color-navbar)",
        padding: "10px 10px",
        margin: "0 auto",
        borderRadius: "0 0 8px 8px",
        width: "75%"
    };
    
    const mobileBackground = {
        position: "fixed",
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        justifyContent: "spaceBetween",
        backgroundColor: "var(--color-navbar)",
        padding: "10px 10px",
        margin: "0 auto",
        borderRadius: "0 0 8px 8px",
        width: "100%",
        overflowX: "auto",
    }
    
    const rightLinks = {
        display: "flex",
        objectFit: "contain",
        justifyContent: "space-between",
        padding: "10px 20px",
        margin: "0 auto",
        alignItems: "center",
        justifyContent: "center",
    };
    
    const anchorStyle = {
        margin: "0px 20px 0px 20px"
    };

    return (
        <div style={isMobile ? mobileBackground : desktopBackground}>
            <div style={leftLinks}>
                <a
                    style={{ ...anchorStyle, ...getHoverStyle(hoveredGitHub) }}
                    href="https://github.com/Koy-Wilson"
                    rel="noreferrer"
                    target="_blank"
                    onMouseEnter={() => setHoveredGitHub(true)}
                    onMouseLeave={() => setHoveredGitHub(false)}
                >
                    <Image
                        style={imageStyle}
                        file={GitHub}
                    />
                </a>
                <a
                    style={{ ...anchorStyle, ...getHoverStyle(hoveredGitLab) }}
                    href="https://gitlab.com/Koy-Wilson"
                    rel="noreferrer"
                    target="_blank"
                    onMouseEnter={() => setHoveredGitLab(true)}
                    onMouseLeave={() => setHoveredGitLab(false)}
                >
                    <Image
                        style={imageStyle}
                        file={GitLab}
                    />
                </a>
            </div>
            <div style={navButtons}>
                <ButtonGroup page={page} />
            </div>
            <div style={rightLinks}>
                <a
                    style={{ ...anchorStyle, ...getHoverStyle(hoveredLinkedIn) }}
                    href="https://www.linkedin.com/in/koy-wilson-a429b821a/"
                    rel="noreferrer"
                    target="_blank"
                    onMouseEnter={() => setHoveredLinkedIn(true)}
                    onMouseLeave={() => setHoveredLinkedIn(false)}
                >
                    <Image
                        style={imageStyle}
                        file={LinkedIn}
                    />
                </a>
                <a
                    style={{ ...anchorStyle, ...getHoverStyle(hoveredInstagram) }}
                    href="https://www.instagram.com/koy.wilson/"
                    rel="noreferrer"
                    target="_blank"
                    onMouseEnter={() => setHoveredInstagram(true)}
                    onMouseLeave={() => setHoveredInstagram(false)}
                >
                    <Image
                        style={imageStyle}
                        file={Instagram}
                    />
                </a>
            </div>
        </div>
    );
};

export default NavBar;
