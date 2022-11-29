import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="text-center text-light text-lg-start" style={{ backgroundColor: "rgb(30, 50, 40)" }}>
                    <div className="container p-4">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Footer text</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                    aliquam voluptatem veniam, est atque cumque eum delectus sint!
                                </p>
                            </div>

                            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Footer text</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                    aliquam voluptatem veniam, est atque cumque eum delectus sint!
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                        Copyright ©2022 
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer   