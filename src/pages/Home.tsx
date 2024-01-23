import React from 'react'
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import Career from './../components/career/career';
import Artists from '../components/artist/artist';
import Hero from '../components/hero'

const Home = () => {
    return (
        <main>
            <Header />
            <Hero />
            <Career />
            <Artists />
            <Footer />
        </main>
    )
}

export default Home;