import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner'
import Carousel from '../../components/Carousel/index';
import Footer from '../../components/Footer';


export default function Home() {
    return (
        <div>
                <Header />
                <Banner />
                <Carousel />
                <Footer />
        </div>

    )
}

