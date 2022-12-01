import React, { Component } from 'react'
import sapling from './sapling.jpg';

export class QuoteBody extends Component {
    render() {
        let { quote } = this.props;
        return (
            <div>
                <div className="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active text-center">
                            <h1 className='d-block position-absolute text-light' style={{ width: "11em", margin: "17rem 3rem", fontSize: "3.5rem" }}>"{quote}"</h1>
                            <img src={sapling} className="d-block w-100" alt="Sapling" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuoteBody