import React, { useState } from "react";
import { dados } from "../dados/dados";

function VideoGallery() {

    const [file, setFile] = useState(null);
    return ( 
        <div className="containerVideo">
            <h1>ola galeria de videos</h1>

            <div className="mediaContainer">
                {dados.map((file, index) =>(
                    <div  className="media" key={index} onClick={() => setFile(file)}>
                        {
                            file.type === "image"
                            ? <img  src={file.url} alt=""/>
                            : <video src={file.url} controls />
                        }  
                    </div>
                ))}
            </div>

            <div className="popUpMedia">
                <span> &times; </span>

                {
                    file?.type === "video" 
                    ? <video src={file?.url} autoPlay controls />     
                    : <img src={file?.url} />
                }

            </div>
        </div>
     );
}

export default VideoGallery;