import React from 'react';
import './assets/css/App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/themify-icons.css';
import About from './component/About/About';
import Banner from './component/Banner/Banner';
import Blogging from './component/Blogging/Blogging';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Layout from './component/Layout/Layout';
import Testimonials from './component/Testimonials/Testimonials';
import Value from './component/Value/Value';
import Vista from './component/Vista/Vista';

function App() {
    return (
        <Layout>
            <Header />
            <Banner />
            <About />
            <Vista />
            <Value />
            <Blogging />
            <Testimonials />
            <Contact />
            <Footer />
        </Layout>
    );
}

export default App;
