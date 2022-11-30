import React, { Component } from 'react'
// import sapling from './../components/sapling2.jpg'

export class Login extends Component {
    render() {
        return (
            <div>
                {/* <img src={sapling} className="d-block w-100" alt="Sapling"/> */}
                <section class="vh-100 position-relative">
                    <div class="container py-5 h-100">
                        <div class="row d-flex align-items-center justify-content-center h-100">
                            <div class="col-md-8 col-lg-7 col-xl-6">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone" />
                            </div>
                            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                                <form>
                                    <div class="form-outline mb-4">
                                        <input type="email" id="form1Example13" class="form-control form-control-lg" />
                                        <label class="form-label" htmlFor="form1Example13">Email address</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="password" id="form1Example23" class="form-control form-control-lg" />
                                        <label class="form-label" htmlFor="form1Example23">Password</label>
                                    </div>

                                    <div class="d-flex justify-content-around align-items-center mb-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                            <label class="form-check-label" htmlFor="form1Example3"> Remember me </label>
                                        </div>
                                        <a href="#!">Forgot password?</a>
                                    </div>

                                    <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

                                    <div class="divider d-flex align-items-center my-4">
                                        <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                    </div>

                                    <a class="btn btn-primary btn-lg btn-block " style={{backgroundColor: "#3b5998"}} href="/"
                                        role="button">
                                        <i class="fab fa-google me-2"></i>Login with Facebook
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Login