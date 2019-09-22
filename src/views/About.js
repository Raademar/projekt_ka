import React from 'react'

import Header from '../components/Header'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'

const About = props => {
  return (
    <>
      <Layout history={props.history}>
        <AboutSection />
      </Layout>
    </>
  )
}

export default About
