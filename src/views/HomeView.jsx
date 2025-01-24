import React from 'react'
import Header from '../components/Header'
import Skip from '../components/Skip'
import Skill from '../components/Skill'
import Port from '../components/Port'
import Site from '../components/Site'
import Contact from '../components/Contact'
import Intro from '../components/Intro'
import Main from '../components/Main'
import Footer from '../components/Footer'

const HomeView = () => {
    return (
        <>
            <Skip />
            <Header />
            <Main>
                <Intro />
                <Skill/>
                <Site />
                <Port />
                <Contact />
            </Main>
            <Footer />
        </>
    )
}

export default HomeView
