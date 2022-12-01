import React, { useState } from 'react'
import { auth, signInWithGoogle } from '../firebase-config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';



function Signup() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [SignupEmail, setSignupEmail] = useState("");
  const [SignupPassword, setSignupPassword] = useState("");



  const signup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth, firstName, lastName, phoneNumber, SignupEmail, SignupPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (

    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-4-strong card-registration bg-transparent text-light" style={{ borderRadius: "1rem", border: "none" }}>
                <div className="card-body p-5 text-center">
                  <h2 className="mb-4 pb-2 pb-md-0 mb-md-5">Sign Up</h2>

                  <form>

                    <div className="row" style={{ justifyContent: "center" }}>
                      <div className="col-md-6 mb-4">

                        <div className="form-outline">
                          <input type="text" id="firstName" className="form-control form-control-lg" placeholder='First Name' onChange={(event) => { setFirstName(event.target.value) }} />
                        </div>

                      </div>
                      <div className="col-md-6 mb-4">

                        <div className="form-outline">
                          <input type="text" id="lastName" className="form-control form-control-lg" placeholder='Last Name' onChange={(event) => { setLastName(event.target.value) }} />
                        </div>

                      </div>
                    </div>

                    <div className="row" style={{ justifyContent: "center" }}>
                      <div className="col-md-6 mb-4">
                        <div className="form">
                          <input type="email" id="emailAddress" className="form-control form-control-lg" placeholder='Email Id' onChange={(event) => { setSignupEmail(event.target.value) }} />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">

                          <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder='Password' onChange={(event) => { setSignupPassword(event.target.value) }} />
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{ justifyContent: "center" }}>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="tel" id="phoneNumber" className="form-control form-control-lg" placeholder='Phone Number' onChange={(event) => { setPhoneNumber(event.target.value) }} />
                        </div>
                      </div>
                    </div>
                    <div className="pt-2">
                      <input className="btn btn-success btn-lg" onClick={signup} type="submit" value="Register" />
                    </div>
                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                    </div>
                    <button className="btn btn-lg btn-block btn-primary" style={{ backgroundColor: "#dd4b39" }} onClick={signInWithGoogle}><Link to="/details" style={{ color: "inherit", textDecoration: "inherit" }}><i className="fab fa-google me-2"></i> Log In with google</Link>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup