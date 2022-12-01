import React, { Component } from 'react'
import photo1 from './Pictures/Photo1.jpeg'
import photo2 from './Pictures/Photo2.jpg'
import photo3 from './Pictures/Photo3.jpg'
import photo4 from './Pictures/Photo4.jpg'
import photo5 from './Pictures/Photo5.jpg'
import photo6 from './Pictures/Photo6.jpg'
import photo7 from './Pictures/Photo7.jpg'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="text-center text-light text-lg-start" style={{ backgroundColor: "rgb(30, 50, 40)" }}>
                    {/* <div className="container p-4">
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

                    </div> */}

                    {/* <div className="container">
                        <div className="carousel" id="myCarousel">
                            <div className="carousel-inner">
                                <div className="carousel-item item active">
                                    <div className="col-xs-4">
                                        <img src={photo1} alt='photo1' className="img-responsive h-25 w-25" />
                                    </div>
                                </div>
                                <div className="carousel-item item active">
                                    <div className="col-xs-4 col-md-4">
                                        <img src={photo2} alt='photo2' className="img-responsive" />
                                    </div>
                                </div>
                                <div className="carousel-item item active">
                                    <div className="col-xs-4">
                                        <img src={photo3} alt='photo3' className="img-responsive" />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-xs-2">
                                        <img src={photo4} alt='photo4' className="img-responsive" />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-xs-2">
                                        <img src={photo5} alt='photo5' className="img-responsive" />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-xs-2">
                                        <img src={photo6} alt='photo6' className="img-responsive" />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-xs-2">
                                        <img src={photo7} alt='photo7' className="img-responsive" />
                                    </div>
                                </div>
                            </div>
                            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                <i className="glyphicon glyphicon-chevron-left"></i>
                            </a>
                            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                <i className="glyphicon glyphicon-chevron-right">
                                </i>
                            </a>

                        </div>
                    </div> */}
                    {/* <section className="slide-section" id="slide-section-area">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                    <h3><b>  Photo </b> Gallery</h3>
                                    <div id="news-photo-slider" className="flexslider">
                                        <div className="flex-viewport" style={{ overflow: "hidden", position: "relative" }}><ul className="slides" style={{ width: "1400%", transitionDuration: "0s", transform: "translate3d(-188.333px, 0px, 0px)" }}>

                                            <li style={{ width: "168.333px", marginRight: "20px", float: "left", display: "block" }}>
                                                <img src={photo1} width="243" height="175" alt="Krushi Karman Award- All" title="Krushi Karman Award- All" typeof="Image" draggable="false" />



                                            </li>
                                            <li style={{ width: "168.333px", marginRight: "20px", float: "left", display: "block" }}>
                                                <img src={photo2} width="243" height="175" alt="Krushi Karman Award for the year 2016-17" title="Krushi Karman Award for the year 2016-17" typeof="Image" draggable="false" />



                                            </li>
                                            <li style={{ width: "168.333px", marginRight: "20px", float: "left", display: "block" }}>
                                                <img src={photo3} width="243" height="175" alt="Krushi Karman Award for the year 2013-14" title="Krushi Karman Award for the year 2013-14" typeof="Image" draggable="false" />



                                            </li>
                                            <li style={{ width: "168.333px", marginRight: "20px", float: "left", display: "block" }}>
                                                <img src={photo4} width="243" height="175" alt="Skotch Award SC&amp;WD Directorate" title="Skotch Award SC&amp;WD Directorate" typeof="Image" draggable="false" />



                                            </li>
                                            <li style={{ width: "168.333px", marginRight: "20px", float: "left", display: "block" }}>
                                                <img src={photo5} width="243" height="175" alt="Farm" title="Farm" typeof="Image" draggable="false" />



                                            </li>
                                            <li style={{ width: "168.333px", marginRight: "20px", float: "left", display: "block" }}>
                                                <img src={photo6} width="243" height="175" alt="Farm" title="Farm" typeof="Image" draggable="false" />



                                            </li>
                                            <li style={{ width: "168.333px", marginRight: "20px", float: "left", display: "block" }}>
                                                <img src={photo7} width="243" height="175" alt="Farm" title="Farm" typeof="Image" draggable="false" />
                                            </li>
                                        </ul></div>

                                        <ul className="flex-direction-nav"><li className="flex-nav-prev"><a className="flex-prev flex-disabled" href="/" tabindex="-1">Previous</a></li><li className="flex-nav-next"><a className="flex-next" href="/">Next</a></li></ul></div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={photo1} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={photo2} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={photo3} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={photo4} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={photo5} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={photo6} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={photo7} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                        Copyright ©2022
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer   