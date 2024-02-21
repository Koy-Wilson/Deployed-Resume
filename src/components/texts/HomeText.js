import React, { useEffect, useState } from "react"
import { isMobile } from "react-device-detect";
import Image from "../Image";
import Photo from "../../assets/images/Home Photo.JPG"

const HomeText = () => {
    const [showLeftChild, setShowLeftChild] = useState(false);
    const [showRightChild, setShowRightChild] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowLeftChild(true), 100);
        setTimeout(() => setShowRightChild(true), 100);
    }, []);

    const imageStyle = {
        height: "100%",
        width: "100%",
        transition: "opacity 1s ease-in-out",
        opacity: showRightChild ? 1 : 0,
        borderRadius: "10px",
        border: "4px solid black",
        zIndex: 1
    }

    const rightChild = {
        width: isMobile ? "95%" : "100%",
        objectFit: "contain",
        marginRight: "5%",
        marginLeft: "2.5%",
    }

    const leftChild = {
        width: isMobile ? "95%" : "100%",
        marginBottom: isMobile ? "5%" : "0%",
        marginLeft: isMobile ? "" : "5%",
        transition: "transform 1s ease-in-out",
        transform: showLeftChild ? "translateX(0)" : "translateX(-100vw)",
        background: "white",
        border: "4px solid black",
        color: "black",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
    }

    const desktopParent = {
        display: "flex",
        justifyContent: "space-between",
        width: "100vw",
        paddingTop: "10%",
    }

    const mobileParent = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: "100vw",
        marginTop: "35%",
        marginBottom: "25%",
    }

    const desktopStyle = {
        fontSize: "26px",
        alignItems: "center",
        margin: "5%",
    }

    const mobileStyle = {
        fontSize: "20px",
        alignItems: "center",
        margin: "5%",
    }

    const containerStyle = {
        height: "100vh",
        overflowY: "auto",
        position: "relative",
        zIndex: 1,
    }

    return(
        <div style={containerStyle}>
            <div style={isMobile ? mobileParent : desktopParent}>
                <div style={leftChild}>
                    <p style={isMobile ? mobileStyle : desktopStyle}>
                    Hello there!<br /> <br />
                    Welcome to my resume website. 
                    My name is Koy Wilson, and I'm currently pursuing my graduate studies at the University of Oklahoma. 
                    I anticipate completing my Master's degree in computer science by December 2024, 
                    building upon the foundation of my Bachelor's degree in computer science, which I earned in December 2023. <br /> <br />
                    Please feel free to explore my page to learn more about my academic background, professional experience, and skill set. Thank you for visiting!
                    </p>
                </div>
                <div style={rightChild}>
                    <Image 
                        style={imageStyle}
                        file={Photo}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeText
