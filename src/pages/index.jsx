import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import NewsSection from '../components/NewsSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Sidebar toggle={toggle} isOpen={isOpen}/>
            <Navbar toggle={toggle} />
            <HeroSection/>
            <NewsSection/>
            <Footer/>
        </>
    ) 
}

export default Home