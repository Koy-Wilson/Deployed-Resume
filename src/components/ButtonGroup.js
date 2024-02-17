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

    const mobileButtons = {
        display: 'flex', 
        gap: '5px',
        overflowX: "auto"
    }

    return (
        <div style={isMobile ? mobileButtons : {}}>
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
