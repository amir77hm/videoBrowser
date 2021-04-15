import React from 'react'

export default function VideoItem({ video, onSelectedVideo }) {

    const SelectedVideo = (e) => {
        onSelectedVideo(video)
    }

    return (
        <div className='VideoItem' onClick={SelectedVideo}>
            <div className='VideoItem__img'>
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            </div>
            <div className="VideoItem__content">
                <h2>{video.snippet.title}</h2>
                <p className="Channel">Channel:{video.snippet.channelTitle}</p>
                <p className='description'>{video.snippet.description}</p>
            </div>
        </div>
    )
}
