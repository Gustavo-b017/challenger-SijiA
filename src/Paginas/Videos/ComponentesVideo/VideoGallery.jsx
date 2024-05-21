import React, { useState } from "react";
import { dados } from "../dados/dados";
import bannerVideos from './img/bannerVideos.gif'

function VideoGallery() {

    const [file, setFile] = useState(null);
    return ( 

        <div className="containerVideo">

            <div className="bannerVideos">
                <img src={bannerVideos} alt="Videos"/>
            </div>

            <div className="mediaContainer">
                {dados.map((file, index) =>(
                    <div  className="media" key={index} onClick={() => setFile(file)}>
                        {
                            file.type === "image"
                            ? <video src={`${file.url}#t=0.001`} muted preload="metadata" />
                            : <img  src={file.poster} alt=""/>
                        }  
                    </div>
                ))}
            </div>

            <div className="popUpMedia" style={{display : file ? 'block' : 'none'}}>
                <span onClick={() => setFile(null)}> &times; </span>

                {
                    file?.type === "video" 
                    ? <video src={file?.url} autoPlay loop controls />     
                    : <img src={file?.url} />
                }

            </div>
        </div>
     );
}

export default VideoGallery;