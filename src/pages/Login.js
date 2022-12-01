import React from 'react'
import './../index.css';
import { useState } from 'react';
import { auth } from '../firebase-config';
import {signInWithGoogle} from '../firebase-config'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { Link } from 'react-router-dom';

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
             <section class="vh-100 logimg">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card shadow-4-strong bg-transparent text-light" style={{ borderRadius: "1rem", border: "none" }}>
                                <div class="card-body p-5 text-center">

                                    <h2 class="mb-5">Log in</h2> 

                                    <div class="form-outline mb-4">
                                        
                                    <input type="email" id="typeEmailX-2" class="form-control form-control-lg" placeholder='Email' onChange={(event)=> {setLoginPassword(event.target.value)}}/>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder='Password' onChange={(event)=> {setLoginEmail(event.target.value)}}/>
                                    </div>

                                    <button class="btn btn-success btn-lg btn-block" type="submit" onClick={login}>Login</button>

                                    {/* <hr class="my-4" /> */}
                                    <div class="divider d-flex align-items-center my-4">
                                        <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                    </div>
                                    <button class="btn btn-lg btn-block btn-primary" style={{ backgroundColor: "#dd4b39" }}
                                        type="submit" onClick={signInWithGoogle}><Link to="/details" style={{color: "inherit", textDecoration: "inherit"}}><i class="fab fa-google me-2"></i> Log In with google</Link>
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

