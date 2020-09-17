import React from 'react';
import './assets/css/App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/themify-icons.css';
import About from './component/About/About';
import Banner from './component/Banner/Banner';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Layout from './component/Layout/Layout';
import Testimonials from './component/Testimonials/Testimonials';
import Vista from './component/Vista/Vista';

function App() {
    return (
        <Layout>
            <Header />
            <Banner />
            <About />
            <Vista />
            <vistaPricing />
            <blogPost />
            <Testimonials />
            <Contact />
            <Footer />
        </Layout>
    );
}

export default App;
