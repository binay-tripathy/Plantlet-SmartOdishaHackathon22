import './../App.css';

import React, { Component } from 'react'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './../components/Navbar';
import QuoteBody from './../components/QuoteBody';
import Testimonials from './../components/Testimonials';
import Footer from './../components/Footer';

export class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <QuoteBody quote="This is a Quote" />
                <Testimonials />
                <Footer />
            </>
        )
    }
}

export default App
