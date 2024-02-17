import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Image from "../components/Image";
import Photo from "../assets/images/Home Photo.JPG"
import HomeIntroduction from "../components/texts/HomeIntroduction";
import ContactMe from "../components/ContactMe";
import { isMobile } from "react-device-detect";

const Home = () => {
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
        paddingTop: "40%"
      };
      

    const leftChild = {
        width: "100%",
        marginLeft: "5%",
        transition: "transform 1s ease-in-out",
        transform: showLeftChild ? "translateX(0)" : "translateX(-100vw)",
        background: "white",
        border: "4px solid black",
        color: "black",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
    }

    const rightChild = {
        width: "100%",
        objectFit: "contain",
        marginRight: "5%",
        marginLeft: "5%",
    }

    const containerStyle = {
        height: "100vh",
        overflowY: "auto"
    }

    return(
        <div style={containerStyle}> 
            <NavBar 
                page={"Home"}
            />
            <div style={isMobile ? mobileParent : desktopParent}>
                <div style={leftChild}>
                    <HomeIntroduction />
                </div>
                <div style={rightChild}>
                    <Image 
                        style={imageStyle}
                        file={Photo}
                    />
                </div>
            </div>
            <ContactMe />
        </div>
    );
}

export default Home;
