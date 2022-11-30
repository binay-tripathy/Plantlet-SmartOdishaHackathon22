import React
    // , { Component } 
    from 'react'
import './../index.css';

// export class Login extends Component {
//     render() {
//         return (
//             <div>
//                 <section class="vh-100" style={{ backgroundImage: `url(${sapling})`, backgroundRepeat: " no-repeat", backgroundSize: "cover" }}>
//                     <div class="container py-5 h-100">
//                         <div class="row d-flex justify-content-center align-items-center h-100">
//                             <div class="col-12 col-md-8 col-lg-6 col-xl-5">
//                                 <div class="card shadow-4-strong bg-transparent text-light" style={{ borderRadius: "1rem" }}>
//                                     <div class="card-body p-5 text-center">

//                                         <h3 class="mb-5">Sign in</h3>

//                                         <div class="form-outline mb-4">
//                                             <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
//                                             <label class="form-label" htmlFor="typeEmailX-2">Email</label>
//                                         </div>

//                                         <div class="form-outline mb-4">
//                                             <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
//                                             <label class="form-label" htmlFor="typePasswordX-2">Password</label>
//                                         </div>

//                                         <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>

//                                         <hr class="my-4" />

//                                         <button class="btn btn-lg btn-block btn-primary" style={{ backgroundColor: "#dd4b39" }}
//                                             type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>

//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         )
//     }
// }


function Login() {
    return (
        <div>
            <section class="vh-100 logimg">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card shadow-4-strong bg-transparent text-light" style={{ borderRadius: "1rem", border: "none" }}>
                                <div class="card-body p-5 text-center">

                                    <h2 class="mb-5">Log in</h2>

                                    <div class="form-outline mb-4">
                                        <input type="email" id="typeEmailX-2" class="form-control form-control-lg" placeholder='Email' />
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder='Password' />

                                    </div>

                                    <button class="btn btn-success btn-lg btn-block" type="submit">Login</button>

                                    {/* <hr class="my-4" /> */}
                                    <div class="divider d-flex align-items-center my-4">
                                        <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                    </div>

                                    <button class="btn btn-lg btn-block" style={{ backgroundColor: "#dd4b39" }}
                                        type="submit"><i class="fab fa-google me-2"></i> Log In with google
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login

