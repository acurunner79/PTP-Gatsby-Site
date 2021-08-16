import React from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import '../styles/media.css'

const Media = () => {

    
    return (
        <Layout>
            <h1>Media Layout</h1>
            <div id="main-video"><h2>Main video here</h2></div>
            <h1>Featured Videos</h1>
            <div id="featured-videos">
                <div className="video-card"></div>
                <div className="video-card"></div>
                <div className="video-card"></div>
                <div className="video-card"></div>
                <div className="video-card"></div>
                <div className="video-card"></div>
            </div>
        </Layout>
    )
}

export default Media
