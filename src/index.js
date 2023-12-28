import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from './Components/ContainerApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './bootstrap_app_style.css';
import Headerone from './Components/HeaderOne';
import Headertwo from './Components/HeaderTwo';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Nav from './Components/Navigation';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById("bootstrap_app"));

root.render (
    <>
        <Headerone />
        <Headertwo />
        <Nav />
        <Container />
        <Footer />
    </>
)