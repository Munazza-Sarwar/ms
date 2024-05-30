import "./Videos.css"
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

const Videos = () => {

    const [videos, setVideos] = useState([
        {
            location: "media/circumcircle.mp4",
            title: "Circumcircle"
        },
        {
            location: "media/completing_the_square.mp4",
            title: "Completing the square"
        },
        {
            location: "media/domain_range_composite_functions.mp4",
            title: "Domain and range of composite function"
        },
        {
            location: "media/long_division.mp4",
            title: "Long division"
        },
        {
            location: "media/resultant_quadratics.mp4",
            title: "Resultant quadratics"
        },
        {
            location: "media/sin_inverse.mp4",
            title: "Sin inverse"
        },
        {
            location: "media/tan_inverse.mp4",
            title: "Tan inverse"
        },
        {
            location: "media/two_pulleys.mp4",
            title: "Two pulleys"
        },
    ])

    const [mainVideo,setMainVideo] = useState(videos[0]);


    const displayVideos = videos.map((temp) => {
            const display = () => {
                if(temp === mainVideo){
                    return(
                        <div className="list active" onClick={() => {setMainVideo(temp)}}>
                            <video src={temp.location} className="video-list"></video>
                            <h3 className="list-title">{temp.title}</h3>
                        </div>
                    )
                } else {
                    return(
                        <div className="list" onClick={() => {setMainVideo(temp)}}>
                            <video src={temp.location} className="video-list"></video>
                            <h3 className="list-title">{temp.title}</h3>
                        </div>
                    )
                }
            }
            return(
                <div>
                    {display()}
                </div>
            )
        })

    
    return(
        <div>
            <Header/>
            <section className="gallery">
                <div className="main-video-container">
                    <video src={mainVideo.location} loop controls className="main-video"></video>
                    <h3 className="main-video-title">{mainVideo.title}</h3>
                </div>

                <div className="video-list-container">
                    {displayVideos}
                </div>

            </section>

            <Footer/>
        </div>
    )
}

export default Videos;