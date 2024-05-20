import React, {useState, useRef} from 'react';

import adao from '../videos&img/adao.jpg'
import adaoVideo from '../videos&img/adaoVideo.mp4'
import blizzard from '../videos&img/blizzard.jpg'
import blizzardVideo from '../videos&img/blizzardVideo.mp4'
import corrida from '../videos&img/corrida.jpg'
import corridaVideo from '../videos&img/corridaVideo.mp4'
import kaiju from '../videos&img/kaiju.jpg'
import kaijuVideo from '../videos&img/kaijuVideo.mp4'
import morte from '../videos&img/morte.jpg'
import morteVideo from '../videos&img/morteVideo.mp4'
import omniMan from '../videos&img/omniMan.jpg'
import omniManVideo from '../videos&img/omniManVideo.mp4'
import singAlone from '../videos&img/sing_alone.jpg'
import singAloneVideo from '../videos&img/singAloneVideo.mp4'

import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'

function VideoGallery() {

    const [model, setModel] = useState(false)
    let dados = [
        {
            id: 1,
            poster: adao,
            video: adaoVideo
        },
        {
            id: 2,
            poster: blizzard,
            video: blizzardVideo
        },
        {
            id: 3,
            poster: corrida,
            video: corridaVideo
        },
        {
            id: 4,
            poster: kaiju,
            video: kaijuVideo
        },
        {
            id: 5,
            poster: morte,
            video: morteVideo
        },
        {
            id: 6,
            poster: omniMan,
            video: omniManVideo
        },
        {
            id: 7,
            poster: singAlone,
            video: singAloneVideo
        }
    ]

    let divRef = useRef(null)
    const openModel = () => {
        divRef.current.classList.remove('video')
        divRef.current.classList.add('model')
        setModel(true)
    }

    const closeModel = () => {

    }
    
    return ( 
        <div ref={divRef} className="video-gallery">
            <h1 style={{textAlign: 'center'}}> video gallery</h1>
            <div className='gallery'>
                let divRef = useRef(null)
                {dados.map((item, index) => (
                    <div className="video" key={index}>
                        <div className="videoContainer" onClick={() => openModel()} >
                            <Video
                                style={{width: '100%'}}
                                autoPlay={model}
                                controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                                poster={item.poster}
                            >

                                <source src={item.video} type="video/mp4"/>
                            </Video>

                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}

export default VideoGallery;