import React, { Component } from 'react'

export class Testimonials extends Component {
    render() {
        return (
            <div>
                <section style={{ backgroundColor: "#224B0C" }}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-xl-8 text-center">
                            <h3 className="mb-4 text-light my-3">Testimonials</h3>
                        </div>
                    </div>

                    <div className="row text-center d-flex align-items-stretch">
                        <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
                            <div className="card testimonial-card bg-dark mb-4 mx-5">
                                <div className="card-up" style={{ backgroundColor: "#9d789b" }}></div>
                                <div className="avatar mx-auto">
                                    <img src="https://pbs.twimg.com/profile_images/1363688571039752193/JvmHVpQI_400x400.jpg" alt='Avatar' className="rounded-circle img-fluid" />
                                </div>
                                <div className="card-body text-white">
                                    <h4 className="">Santosh Kumar J</h4>
                                    <span class="small mb-4" style={{ color: "#868B94" }}>@MPsantoshtrs</span>
                                    <hr />
                                    <p className="dark-grey-text mt-4">
                                        <i className="fas fa-quote-left pe-2"></i>
                                        It's evident that little ones know the importance of growing #Plants these days. One has not only to plant #Saplings but we do have to take of them like we do take of our children, so that they grow into #Trees and help us getting #Oxygen abundantly.

                                        #GreenIndiaChallenge 🌱🌱🌱.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
                            <div className="card testimonial-card bg-dark mb-4 mx-5">
                                <div className="card-up" style={{ backgroundColor: "#7a81a8" }}></div>
                                <div className="avatar mx-auto">
                                    <img src="https://pbs.twimg.com/profile_images/1488660214685462530/0J31iuR-_400x400.jpg" alt='Avatar' className="rounded-circle img-fluid" />

                                </div>
                                <div className="card-body text-white">
                                    <h4 className="mb-4">Myron My</h4>
                                    <span class="small mb-4" style={{ color: "#868B94" }}>@myronmy9</span>
                                    <hr />
                                    <p className="dark-grey-text mt-4">
                                        <i className="fas fa-quote-left pe-2"></i>
                                        #Sappling is not a representation of how the world is, but it is a somewhat mythological depiction of how we could connect with the organisms that surround and support us. - #PatriciaPiccinini
                                        #AMiracleConstantlyRepeated. #art #sculpture #RisingMelbourne #Melbourne #FlindersSt.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
                            <div className="card testimonial-card bg-dark mb-4 mx-5">
                                <div className="card-up" style={{ backgroundColor: "#6d5b98" }}></div>
                                <div className="avatar mx-auto">
                                    <img src="https://pbs.twimg.com/profile_images/1284324759421898752/Hyk5sQkW_400x400.jpg" alt='Avatar' className="rounded-circle img-fluid" />

                                </div>
                                <div className="card-body text-white">
                                    <h4 className="mb-4">Sadesh Abeysinghe</h4>
                                    <span class="small mb-4" style={{ color: "#868B94" }}>@SadeshMagic   </span>
                                    <hr />
                                    <p className="dark-grey-text mt-4">
                                        <i className="fas fa-quote-left pe-2"></i>
                                        A sapling serenading the sun#nature #flora #green #macro #tree #sappling
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Testimonials