import React from "react";
import ButtonLink from "./ButtonLink";
import { isMobile } from "react-device-detect";

const ButtonGroup = ({ page }) => {
    const pages = [
        {
            "page": "Home",
            "route": "/",
            "active": page === "Home"
        },
        {
            "page": "Interests",
            "route": "/interests",
            "active": page === "Interests"
        },
        {
            "page": "Projects",
            "route": "/projects",
            "active": page === "Projects"
        },
        {
            "page": "Experience",
            "route": "/experience",
            "active": page === "Experience"
        },
        {
            "page": "Accomplishments",
            "route": "/accomplishments",
            "active": page === "Accomplishments"
        }
    ];

    // Adjusted style for mobile (vertical layout) and desktop (horizontal layout)
    const containerStyle = {
        display: 'flex',
        flexDirection: isMobile ? "column" : "row", // Column layout for mobile, row for desktop
        gap: '5px',
        overflowY: isMobile ? "auto" : "hidden" // Enable vertical scrolling on mobile if needed
    };

    return (
        <div style={containerStyle}>
            {pages.map(option => (
                <ButtonLink
                    key={option.page}
                    link={option.route}
                    name={option.page}
                    active={option.active}
                />
            ))}
        </div>
    );
};

export default ButtonGroup;
