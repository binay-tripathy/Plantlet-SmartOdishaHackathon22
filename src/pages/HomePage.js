import './../App.css';

import React from 'react'
import Navbar from './../components/Navbar';
import QuoteBody from './../components/QuoteBody';
import Testimonials from './../components/Testimonials';
import Footer from './../components/Footer';

function HomePage() {
    return (
        <div>
            <>
                <Navbar />
                <QuoteBody quote="Someone is sitting in the shade today because someone planted a tree a long time ago." />
                <Testimonials />
                <Footer />
            </>
        </div>
    )
}

export default HomePage