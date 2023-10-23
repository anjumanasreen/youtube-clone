import { useEffect, useState } from "react"
import {YOUTUBE_VIDEO_API} from "../utils/constants"
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const VideoContainer = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos()
    }, [])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API)
        const json = await data.json()
        setVideos(json.items);
    }

    return(
        <div>
            <div className="flex flex-wrap">
                {videos.map((video) => <Link to = {"/watch?v=" + video.id}> <VideoCard info={video} /> </Link>)}
            </div>
        </div>
    )

}
export default VideoContainer