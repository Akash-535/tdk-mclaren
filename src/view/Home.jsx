import React from 'react'
import Hero from '../components/home/Hero'
import Header from '../common/Header'
import Partner from '../components/home/Partner'
import MySwiper from '../components/home/MySwiper'

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Partner />
            <MySwiper />
        </>
    )
}

export default Home