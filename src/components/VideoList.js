import React from 'react'
import VideoItem from "./VideoItem";

export default function VideoList({ videos, onSelectedVideo }) {

    const renderVideos = videos.map(video => {
        return <VideoItem key={video.id.videoId} video={video} onSelectedVideo={onSelectedVideo} />
    })

    return (
        <div className='VideoList'>
            {renderVideos}
        </div>
    )
}
