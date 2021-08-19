import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import ReactPlayer from 'react-player/youtube'
import '../styles/media.css'

const Media = (props) => {
    console.log('propss', props.data.allYoutubeVideo.edges[0].node.videoId)

    
    return (
        <Layout>
            <h1>Media Layout</h1>
            <div id="main-video-card">
                <ReactPlayer id="main-video"
                    url={`"https://www.youtube.com/embed/${props.data.allYoutubeVideo.edges[0].node.videoId}"`}
                    light={props.data.allYoutubeVideo.edges[0].node.thumbnail.url}
                />
                <h5 className="testing">{props.data.allYoutubeVideo.edges[0].node.title}</h5>
            </div>
                <h1>Featured Videos</h1>
            <div id="featured-videos">
                <div className="video-card-container">
                    <ReactPlayer className="video-card"
                        url={`"https://www.youtube.com/embed/${props.data.allYoutubeVideo.edges[1].node.videoId}"`}
                        light={props.data.allYoutubeVideo.edges[1].node.thumbnail.url}
                    />
                    <h5 id="testing">{props.data.allYoutubeVideo.edges[1].node.title}</h5>
                </div>
                <div className="video-card-container">
                    <ReactPlayer className="video-card"
                        url={`"https://www.youtube.com/embed/${props.data.allYoutubeVideo.edges[2].node.videoId}"`}
                        light={props.data.allYoutubeVideo.edges[2].node.thumbnail.url}
                    />
                    <h5 id="testing">{props.data.allYoutubeVideo.edges[2].node.title}</h5>
                </div>
                <div className="video-card-container">
                    <ReactPlayer className="video-card"
                        url={`"https://www.youtube.com/embed/${props.data.allYoutubeVideo.edges[3].node.videoId}"`}
                        light={props.data.allYoutubeVideo.edges[3].node.thumbnail.url}
                    />
                    <h5 id="testing">{props.data.allYoutubeVideo.edges[3].node.title}</h5>
                </div>
                <div className="video-card-container">
                    <ReactPlayer className="video-card"
                        url={`"https://www.youtube.com/embed/${props.data.allYoutubeVideo.edges[4].node.videoId}"`}
                        light={props.data.allYoutubeVideo.edges[4].node.thumbnail.url}
                    />
                    <h5 id="testing">{props.data.allYoutubeVideo.edges[4].node.title}</h5>
                </div>
                <div className="video-card-container">
                    <ReactPlayer className="video-card"
                        url={`"https://www.youtube.com/embed/${props.data.allYoutubeVideo.edges[5].node.videoId}"`}
                        light={props.data.allYoutubeVideo.edges[5].node.thumbnail.url}
                    />
                    <h5 id="testing">{props.data.allYoutubeVideo.edges[5].node.title}</h5>
                </div>
                <div className="video-card-container">
                    <ReactPlayer className="video-card"
                        url={`"https://www.youtube.com/embed/${props.data.allYoutubeVideo.edges[6].node.videoId}"`}
                        light={props.data.allYoutubeVideo.edges[6].node.thumbnail.url}
                    />
                    <h5 id="testing">{props.data.allYoutubeVideo.edges[6].node.title}</h5>
                </div>
            </div>
        </Layout>
    )
}

export default Media

export const query = graphql`
    query videos {
        allYoutubeVideo {
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
