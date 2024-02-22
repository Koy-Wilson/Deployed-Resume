import React, { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import Image from "./Image";
import GitHub from "../assets/images/github.jpg";
import GitLab from "../assets/images/gitlab.jpg";
import LinkedIn from "../assets/images/linkedin.jpg";
import Instagram from "../assets/images/instagram.jpg";
import DropDown from "../assets/images/dropdown.png";
import { isMobile } from "react-device-detect";

const NavBar = ({ page }) => {
    const [hoveredGitHub, setHoveredGitHub] = useState(false);
    const [hoveredGitLab, setHoveredGitLab] = useState(false);
    const [hoveredLinkedIn, setHoveredLinkedIn] = useState(false);
    const [hoveredInstagram, setHoveredInstagram] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);


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
        padding: "0 10px 0 20px",
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
        width: "75%",
        zIndex: "2"
    };
    
    const mobileBackground = {
        position: "fixed",
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column", 
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-navbar)",
        margin: "0 auto",
        borderRadius: "0 0 8px 8px",
        width: "100%",
        overflowX: "auto",
        zIndex: "2",
    };
    
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

    const dropdownIconStyle = {
        cursor: 'pointer',
        paddingTop: "2.5%"
    };

    const dropdownContentStyle = {
        display: isDropdownOpen ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "var(--color-navbar)",
        width: '100%',
        paddingTop: '10px',
    };

    const columnStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const linkStyle = {
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "50%"
    };

    const mobileLayoutStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    };

    return (
        <div style={isMobile ? mobileBackground : desktopBackground}>
            {isMobile ? (
                <div style={dropdownContentStyle}>
                    <div style={{...mobileLayoutStyle, display: isDropdownOpen ? 'flex' : 'none'}}>
                        <div style={columnStyle}>
                            <a 
                                href="https://github.com/Koy-Wilson" 
                                target="_blank" 
                                rel="noreferrer" 
                                style={linkStyle}>
                                <Image 
                                    file={GitHub} 
                                    alt="GitHub" 
                                    style={imageStyle} />
                            </a>
                            <a 
                                href="https://gitlab.com/Koy-Wilson" 
                                target="_blank" 
                                rel="noreferrer" 
                                style={linkStyle}>
                                <Image 
                                    file={GitLab} 
                                    alt="GitLab" 
                                    style={imageStyle} />
                            </a>
                        </div>
                        <div style={columnStyle}>
                            <ButtonGroup page={page} />
                        </div>
                        <div style={columnStyle}>
                            <a 
                                href="https://www.linkedin.com/in/koy-wilson-a429b821a/" 
                                target="_blank" 
                                rel="noreferrer" 
                                style={linkStyle}>
                                <Image 
                                    file={LinkedIn} 
                                    alt="LinkedIn" 
                                    style={imageStyle} />
                            </a>
                            <a 
                                href="https://www.instagram.com/koy.wilson/" 
                                target="_blank" 
                                rel="noreferrer" 
                                style={linkStyle}>
                                <Image 
                                    file={Instagram} 
                                    alt="Instagram" 
                                    style={imageStyle} />
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div style={leftLinks}>
                        <a 
                            href="https://github.com/Koy-Wilson" 
                            target="_blank" 
                            rel="noreferrer" 
                            onMouseEnter={() => setHoveredGitHub(true)}
                            onMouseLeave={() => setHoveredGitHub(false)}
                            style={{...anchorStyle, ...getHoverStyle(hoveredGitHub)}}>
                            <Image 
                                file={GitHub} 
                                alt="GitHub" 
                                style={imageStyle} />
                        </a>
                        <a 
                            href="https://gitlab.com/Koy-Wilson" 
                            target="_blank" 
                            rel="noreferrer" 
                            onMouseEnter={() => setHoveredGitLab(true)}
                            onMouseLeave={() => setHoveredGitLab(false)}
                            style={{...anchorStyle, ...getHoverStyle(hoveredGitLab)}}>
                            <Image 
                                file={GitLab} 
                                alt="GitLab" 
                                style={imageStyle} />
                        </a>
                    </div>
                    <div style={navButtons}>
                        <ButtonGroup page={page} />
                    </div>
                    <div style={rightLinks}>
                        <a 
                            href="https://www.linkedin.com/in/koy-wilson-a429b821a/" 
                            target="_blank" 
                            rel="noreferrer" 
                            onMouseEnter={() => setHoveredLinkedIn(true)}
                            onMouseLeave={() => setHoveredLinkedIn(false)}
                            style={{...anchorStyle, ...getHoverStyle(hoveredLinkedIn)}}>
                            <Image 
                                file={LinkedIn} 
                                alt="LinkedIn" 
                                style={imageStyle} />
                        </a>
                        <a 
                            href="https://www.instagram.com/koy.wilson/" 
                            target="_blank" 
                            rel="noreferrer" 
                            onMouseEnter={() => setHoveredInstagram(true)}
                            onMouseLeave={() => setHoveredInstagram(false)}
                            style={{...anchorStyle, ...getHoverStyle(hoveredInstagram)}}>
                            <Image 
                                file={Instagram} 
                                alt="Instagram" 
                                style={imageStyle} />
                        </a>
                    </div>
                </>
            )}
            {isMobile && (
                <img
                    src={DropDown}
                    alt="Dropdown"
                    style={dropdownIconStyle}
                    onClick={toggleDropdown}
                />
            )}
        </div>
    );
};

export default NavBar;
