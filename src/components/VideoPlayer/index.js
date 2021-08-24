import React from 'react'
import { Button } from 'react-player-controls'
import { Direction, Slider } from 'react-player-controls'
import { FaPlay, FaPause, FaVolumeMute } from 'react-icons/fa'
import { GiSoundOn } from 'react-icons/gi'
import { graphql } from 'gatsby'
import '../../styles/videoPlayer.css'
import ReactPlayer from 'react-player'


const VideoPlayer = (video) => {

    
    
    const WHITE_SMOKE = '#eee'
    const GRAY = '#878c88'
    const GREEN = 'rgb(21, 170, 148)'
    
    const SliderBar = (direction, value, style) => (
        <div
        style={Object.assign({}, {
            position: 'absolute',
            background: GRAY,
            borderRadius: 4,
        }, direction === Direction.HORIZONTAL ? {
            top: 0,
            bottom: 0,
            left: 0,
            width: `${value * 100}%`,
        } : {
            right: 0,
            bottom: 0,
            left: 0,
            height: `${value * 100}%`,
        }, style)}
        />
        )
        
        const SliderHandle = (direction, value, style) => (
            <div
            style={Object.assign({}, {
                // position: 'absolute',
                width: 12,
                height: 12,
                background: GREEN,
                borderRadius: '100%',
                transform: 'scale(1)',
                transition: 'transform 0.2s',
                '&:hover': {
                    transform: 'scale(1.3)',
                }
            }, direction === Direction.HORIZONTAL ? {
                top: 0,
                left: `${value * 100}%`,
                marginTop: -4,
                marginLeft: -8,
            } : {
                left: 0,
                bottom: `${value * 100}%`,
                marginBottom: -8,
                marginLeft: -4,
            }, style)}
            />
            )

            const PlaybackControls = ({
                isPlaying,
                onPlaybackChange,
                hasPrevious,
                onPrevious,
                hasNext,
                onNext,
              }) => (
                    <div id="video-controls-container">
                        <Button className="video-buttons" disabled={hasPrevious === false} onClick={() => onPlaybackChange(!isPlaying)}>
                            <FaPlay size="30" color="rgb(21, 170, 148)"/> 
                        </Button>
                        <Button className="video-buttons">
                           <FaPause size="30" color="rgb(21, 170, 148)"/>
                         </Button>    
                        <ProgressBar/>
                        <Button className="video-buttons" >
                            <GiSoundOn size="30" color="rgb(21, 170, 148)"/>
                        </Button>
                        <Button className="video-buttons" >
                            <FaVolumeMute size="30" color="rgb(21, 170, 148)"/>
                        </Button>
                    </div>
              )
            
            const ProgressBar = (isEnabled, direction, value, ...props) => (
                <Slider
                    isEnabled={isEnabled}
                    direction={Direction}
                    onChange={newValue => console.log(`clicked at ${newValue}`)}
                    style={{
                        width: direction === Direction.HORIZONTAL ? 8: 200,
                        height: direction === Direction.HORIZONTAL ? 130 : 8,
                        borderRadius: 4,
                        background: WHITE_SMOKE,
                        transition: direction === Direction.HORIZONTAL ? 'width 0.1s' : 'height 0.1s',
                        cursor: isEnabled === true ? 'pointer' : 'default',
                }}
                {...props}
                >
            <SliderBar direction={direction} value={value} style={{ background: isEnabled ? GREEN : GRAY }} />
            <SliderHandle direction={direction} value={value} style={{ background: isEnabled ? GREEN : GRAY }} />
        </Slider>
    )
    
    return (
        <div>
            <h4>{video.title}</h4>
        <div id="video-player">
            <div id="video-screen">
                <ReactPlayer
                url={`"https://www.youtube.com/embed/${video.video}"`}
                light={video.poster}
                />
            </div>
            <div id="video-controls-container">
                <PlaybackControls>
                    {/* <Button className="video-buttons" onClick={() => onPlaybackChange(!isPlaying)}>
                        <FaPlay size="30" color="rgb(21, 170, 148)"/>
                    </Button>
                    <Button className="video-buttons">
                        <FaPause size="30" color="rgb(21, 170, 148)"/>
                    </Button>    
                    <ProgressBar/>
                    <Button className="video-buttons" >
                        <GiSoundOn size="30" color="rgb(21, 170, 148)"/>
                    </Button>
                    <Button className="video-buttons" >
                        <FaVolumeMute size="30" color="rgb(21, 170, 148)"/>
                    </Button> */}
                </PlaybackControls>
            </div>
        </div>
        </div>
    )
}

export default VideoPlayer

export const query = graphql`
    query video {
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
