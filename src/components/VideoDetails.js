import React from 'react'

export default function VideoDetails({ video }) {

    if (video === '') {
        return <div></div>
    }

    let videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div className='VideoDetails'>
            <div className='VideoDetails__Video'>
                <iframe title='video' src={videoSrc} />
            </div>
            <div className='VideoDetails__title'>
                <p>{video.snippet.title}</p>
            </div>
        </div >
    )
}
