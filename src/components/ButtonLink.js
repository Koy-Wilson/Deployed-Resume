import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({link = "/", name = "Home", active = false}) => {
    const ou = {
        background: "linear-gradient(-45deg, #9e1b32, #820e1f, #c03f4d, #ffffff)",
        borderColor:  "#9e1b32",
    }

    return(
        <Link to={link}>
            <button style={active ? ou : {}}>
                {name}
            </button>
        </Link>
    )
}

export default ButtonLink;