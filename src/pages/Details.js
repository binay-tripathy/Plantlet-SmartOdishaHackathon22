import React from 'react'
import Footer from '../components/Footer'
import NavbarDash from '../components/NavbarDash'
import QuoteBody from '../components/QuoteBody'
import cardimage from '../download.jpg'


function Details() {
    return (
        <div>
            <NavbarDash />
            <QuoteBody quote="Someone is sitting in the shade today because someone planted a tree a long time ago." />
            {/* Cards */}
            <div className='d-flex flex-row bg-dark'>
                <div className='d-flex flex-column text-center'>
                    <div className="card my-4 mx-5" style={{ width: "18rem" }}>
                        <img src={cardimage} className="card-img-top" alt="img" />
                        <div className="card-body">
                            <h5 className="card-title">Plant Name</h5>
                            <p className="card-text">Description</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Soil Type: </li>
                            <li className="list-group-item">Weather Conditions: </li>
                            <li className="list-group-item">Water Intervals: </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center d-flex flex-column" style={{ marginTop: "11.5rem" }} >
                    <div className="card my-2" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <i class="fab fa-plus me-2"></i>Add a Sapling
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Details