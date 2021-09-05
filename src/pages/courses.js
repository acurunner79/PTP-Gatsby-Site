import React from 'react'
import Layout  from '../components/Layout'
import Seo from "../components/SEO/index"
import RichText from '../components/RichText'
import { FaDesktop } from "react-icons/fa"
import { graphql, useStaticQuery } from 'gatsby'
import '../styles/courses.css'


const Courses = () => {
    const query = useStaticQuery(graphql`
    query HighlightedCourses {
        allContentfulHighlightedCourse {
            edges {
                node {
                    subject
                    mainDescription {
                        raw
                    }
                }
            }
        }
    }
    `)
    console.log('courses props', query.allContentfulHighlightedCourse.edges[0].node)

    return (
        <Layout>
            <Seo />
            <h1 className="courses-headers">Trade the Path Way</h1>
                    <p>At Path Trading Partners, we have created our courses with the mission of taking you from beginning to end, from amateur to professional. Our courses include introduction, product structure, strategy and tools. If something seems too easy, finish it anyway. If something seems too advanced, review it multiple times. If you take your trading education as seriously as we take our trading and our research, the only obstacle in your path will be time.</p>
                    <h2 className="courses-headers">Featured Courses</h2>
            <div id="shop-container">
                <div className="shop-card">
                    <FaDesktop id="courses-icon" size="90" color="white"/>
                    <h2 className="course-subject">{query.allContentfulHighlightedCourse.edges[0].node.subject}</h2>
                    <RichText className="courses-text" raw={query.allContentfulHighlightedCourse.edges[0].node.mainDescription.raw}/>
                </div>
                <div className="shop-card">
                    <FaDesktop id="courses-icon" size="90" color="white"/>
                    <h2 className="course-subject">{query.allContentfulHighlightedCourse.edges[1].node.subject}</h2>
                    <RichText className="courses-text" raw={query.allContentfulHighlightedCourse.edges[1].node.mainDescription.raw}/>
                </div>
                <div className="shop-card">
                    <FaDesktop id="courses-icon" size="90" color="white"/>
                    <h2 className="course-subject">{query.allContentfulHighlightedCourse.edges[2].node.subject}</h2>

                    <RichText className="courses-text" raw={query.allContentfulHighlightedCourse.edges[2].node.mainDescription.raw}/>
                </div>
            </div>
            <button className="buttons"><a target="_blank" rel="noreferrer" href="https://path-trading-partners.teachable.com/">Enroll now</a></button >
        </Layout>
    )
}



export default Courses

