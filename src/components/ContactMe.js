import React from "react";
import Envelope from "../assets/images/Envelope.png";
import Image from "./Image";
import Phone from "../assets/images/Phone.png";

const ContactMe = () => {
    const background = {
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

    const child = {
        width: "100%",
        border: "4px solid black",
        color: "black",
        borderRadius: "10px",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    }

    return(
        <div style={background}>
            <div style={parent}>
                <div style={Object.assign({}, child, { marginRight: "5%" })}>
                    <Image
                        style={imageStyle}
                        file={Envelope} />
                    <p style={{fontSize: "16px", marginLeft: "2.5%", marginRight: "2.5%"}}>
                        koyman41@gmail.com
                    </p>
                </div>
                <div style={Object.assign({}, child, { marginLeft: "5%" })}>
                    <Image
                        style={imageStyle}
                        file={Phone} />
                    <p style={{fontSize: "16px", marginLeft: "2.5%", marginRight: "2.5%"}}>
                        +1-(405)-919-2090
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
