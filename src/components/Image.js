import React from "react";

const Image = ({file, alt, style}) => {
    return(
        <div>
            <img style={style}src={file} alt={alt} />
        </div>
    )
}

export default Image;