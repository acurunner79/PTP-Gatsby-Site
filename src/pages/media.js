import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import ReactPlayer from 'react-player/youtube'
import VideoPlayer from '../components/VideoPlayer/index'
import '../styles/media.css'

const Media = (props) => {
    // console.log('propss', props.data.allYoutubeVideo.edges)

    
    return (
        <Layout>
            {/* <VideoPlayer video={props.data.allYoutubeVideo.edges[0].node.videoId} poster={props.data.allYoutubeVideo.edges[0].node.thumbnail.url} title={props.data.allYoutubeVideo.edges[0].node.title}/> */}
            <h1 className="media-headers">Media Layout</h1>
            <div id="main-video-card">
                <ReactPlayer id="main-video"
                    url={`"https://www.youtube.com/embed/${props.data.allYoutubeVideo.edges[0].node.videoId}"`}
                    light={props.data.allYoutubeVideo.edges[0].node.thumbnail.url}
                    controls="true"/>
                <div className="main-video-title">
                    <h3>{props.data.allYoutubeVideo.edges[0].node.title}</h3>
                </div>
            </div><br/>
            <div id="featured-videos">
                <h2 className="vids-cont-label">Latest Videos</h2>
                <div className="video-card-container">
                    <div className="vid-slot">
                        <ReactPlayer className="video-card"
                            url={`"https://www.youtube.com/embed/${props.data.allYoutubeVideo.edges[1].node.videoId}"`}
                            light={props.data.allYoutubeVideo.edges[1].node.thumbnail.url}
                            controls="true"/>
                        <h3 className="video-title">{props.data.allYoutubeVideo.edges[1].node.title}</h3>
                    </div>
                    <div className="vid-slot">
                        <ReactPlayer className="video-card"
                            url={`"https://www.youtube.com/embed/${props.data.allYoutubeVideo.edges[2].node.videoId}"`}
                            light={props.data.allYoutubeVideo.edges[2].node.thumbnail.url}/>
                        <h3 className="video-title">{props.data.allYoutubeVideo.edges[2].node.title}</h3>
                    </div>
                    <div className="vid-slot">
                        <ReactPlayer className="video-card"
                            url={`"https://www.youtube.com/embed/${props.data.allYoutubeVideo.edges[3].node.videoId}"`}
                            light={props.data.allYoutubeVideo.edges[3].node.thumbnail.url}/>
                        <h3 className="video-title">{props.data.allYoutubeVideo.edges[3].node.title}</h3>
                    </div>
                    <div className="vid-slot">
                        <ReactPlayer className="video-card"
                            url={`"https://www.youtube.com/embed/${props.data.allYoutubeVideo.edges[4].node.videoId}"`}
                            light={props.data.allYoutubeVideo.edges[4].node.thumbnail.url}/>
                        <h3 className="video-title">{props.data.allYoutubeVideo.edges[4].node.title}</h3>
                    </div>
                    <div className="vid-slot">
                        <ReactPlayer className="video-card"
                            url={`"https://www.youtube.com/embed/${props.data.allYoutubeVideo.edges[5].node.videoId}"`}
                            light={props.data.allYoutubeVideo.edges[5].node.thumbnail.url}/>
                        <h3 className="video-title">{props.data.allYoutubeVideo.edges[5].node.title}</h3>
                    </div>
                    <div className="vid-slot">
                        <ReactPlayer className="video-card"
                            url={`"https://www.youtube.com/embed/${props.data.allYoutubeVideo.edges[6].node.videoId}"`}
                            light={props.data.allYoutubeVideo.edges[6].node.thumbnail.url}/>
                        <h3 className="video-title">{props.data.allYoutubeVideo.edges[6].node.title}</h3>
                    </div>
                </div>
            </div><br/>
            <div id="featured-videos">
                <h2 className="vids-cont-label">More Videos</h2>
                <div className="video-card-container">
                    <div className="vid-slot">
                        <ReactPlayer className="video-card"
                            url={`"https://www.youtube.com/embed/${props.data.allYoutubeVideo.edges[7].node.videoId}"`}
                            light={props.data.allYoutubeVideo.edges[7].node.thumbnail.url}/>
                        <h3 className="video-title">{props.data.allYoutubeVideo.edges[7].node.title}</h3>
                    </div>
                    <div className="vid-slot">
                        <ReactPlayer className="video-card"
                            url={`"https://www.youtube.com/embed/${props.data.allYoutubeVideo.edges[8].node.videoId}"`}
                            light={props.data.allYoutubeVideo.edges[8].node.thumbnail.url}/>
                        <h3 className="video-title">{props.data.allYoutubeVideo.edges[8].node.title}</h3>
                    </div>
                    <div className="vid-slot">
                        <ReactPlayer className="video-card"
                            url={`"https://www.youtube.com/embed/${props.data.allYoutubeVideo.edges[9].node.videoId}"`}
                            light={props.data.allYoutubeVideo.edges[9].node.thumbnail.url}/>
                        <h3 className="video-title">{props.data.allYoutubeVideo.edges[9].node.title}</h3>
                    </div>
                    <div className="vid-slot">
                        <ReactPlayer className="video-card"
                            url={`"https://www.youtube.com/embed/${props.data.allYoutubeVideo.edges[10].node.videoId}"`}
                            light={props.data.allYoutubeVideo.edges[10].node.thumbnail.url}/>
                        <h3 className="video-title">{props.data.allYoutubeVideo.edges[10].node.title}</h3>
                    </div>
                    <div className="vid-slot">
                        <ReactPlayer className="video-card"
                            url={`"https://www.youtube.com/embed/${props.data.allYoutubeVideo.edges[11].node.videoId}"`}
                            light={props.data.allYoutubeVideo.edges[11].node.thumbnail.url}/>
                        <h3 className="video-title">{props.data.allYoutubeVideo.edges[11].node.title}</h3>
                    </div>
                    <div className="vid-slot">
                        <ReactPlayer className="video-card"
                            url={`"https://www.youtube.com/embed/${props.data.allYoutubeVideo.edges[12].node.videoId}"`}
                            light={props.data.allYoutubeVideo.edges[12].node.thumbnail.url}/>
                        <h3 className="video-title">{props.data.allYoutubeVideo.edges[12].node.title}</h3>
                    </div>
                </div>
                
            </div>
        </Layout>
    )
}

export default Media

export const query = graphql`
    query videos {
        allYoutubeVideo(filter: {channelId: {eq: "UCDFTQBiJea-YwAdiB6121aA"}}) {
            edges {
                node {
                    id
                    title
                    description
                    videoId
                    publishedAt
                    privacyStatus
                    channelTitle
                    thumbnail {
                        url
                        height
                        width
                    }
                }
            }   
        }
    }
`
