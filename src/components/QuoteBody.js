import React, { Component } from 'react'
import sapling from './sapling.jpg';

export class QuoteBody extends Component {
    render() {
        let {quote} = this.props;
        return (
            <div>
                {/* <div className="bg-sap-green" style={{ height: "2rem" }}> */}

                    <div className="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active text-center">
                                <h1 className='d-block position-absolute text-light' style={{width: "11rem", margin: "17rem 3rem"}}>"{quote}"</h1>
                                <img src={sapling} className="d-block w-100" alt="Sapling"/>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        )
    }
}

export default QuoteBody