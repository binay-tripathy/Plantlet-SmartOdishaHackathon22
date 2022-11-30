import React
// , { Component } 
from 'react'
// import sapling from './../components/sapling2.jpg'
import './../index.css';
import { useState } from 'react';
import { auth } from '../firebase-config';
import {signInWithGoogle} from '../firebase-config'
import {signInWithEmailAndPassword} from 'firebase/auth'

// export class Login extends Component {
//     render() {
//         return (
//             <div>
//                 <section className="vh-100" style={{ backgroundImage: `url(${sapling})`, backgroundRepeat: " no-repeat", backgroundSize: "cover" }}>
//                     <div className="container py-5 h-100">
//                         <div className="row d-flex justify-content-center align-items-center h-100">
//                             <div className="col-12 col-md-8 col-lg-6 col-xl-5">
//                                 <div className="card shadow-4-strong bg-transparent text-light" style={{ borderRadius: "1rem" }}>
//                                     <div className="card-body p-5 text-center">

//                                         <h3 className="mb-5">Sign in</h3>

//                                         <div className="form-outline mb-4">
//                                             <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
//                                             <label className="form-label" htmlFor="typeEmailX-2">Email</label>
//                                         </div>

//                                         <div className="form-outline mb-4">
//                                             <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
//                                             <label className="form-label" htmlFor="typePasswordX-2">Password</label>
//                                         </div>

//                                         <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

//                                         <hr className="my-4" />

//                                         <button className="btn btn-lg btn-block btn-primary" style={{ backgroundColor: "#dd4b39" }}
//                                             type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>

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

    const[loginEmail , setLoginEmail] = useState("");
    const[loginPassword , setLoginPassword] = useState("");

    const login = async () => {
        try{
            const user = await signInWithEmailAndPassword(
                auth , loginEmail , loginPassword
            );
            console.log(user);  
        }catch(error){
            console.log(error.message);
        }
    }

    return (
        <div>
             <section className="vh-100 logimg">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-4-strong bg-transparent text-light" style={{ borderRadius: "1rem", border: "none" }}>
                                <div className="card-body p-5 text-center">

                                    <h2 className="mb-5">Log in</h2> 

                                    <div className="form-outline mb-4">
                                        
                                    <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Email' onChange={(event)=> {setLoginPassword(event.target.value)}}/>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder='Password' onChange={(event)=> {setLoginEmail(event.target.value)}}/>
                                    </div>

                                    <button className="btn btn-success btn-lg btn-block" type="submit" onClick={login}>Login</button>

                                    {/* <hr className="my-4" /> */}
                                    <div className="divider d-flex align-items-center my-4">
                                        <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                    </div>
                                    <button className="btn btn-lg btn-block btn-primary" style={{ backgroundColor: "#dd4b39" }}
                                        type="submit" onClick={signInWithGoogle}><i className="fab fa-google me-2"></i> Log In with google
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

