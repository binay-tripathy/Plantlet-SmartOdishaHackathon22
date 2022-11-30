// import React, { Component } from 'react'

// export class Signup extends Component {
//   render() {
//     return (
//       <div>Signup</div>
//     )
//   }
// }
import React from 'react'

function Signup() {
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
                          <input type="text" id="firstName" className="form-control form-control-lg" placeholder='First Name' />
                        </div>

                      </div>
                      <div className="col-md-6 mb-4">

                        <div className="form-outline">
                          <input type="text" id="lastName" className="form-control form-control-lg" placeholder='Last Name' />
                        </div>

                      </div>
                    </div>

                    <div className="row" style={{ justifyContent: "center" }}>
                      <div className="col-md-6 mb-4">
                        <div className="form">
                          <input type="email" id="emailAddress" className="form-control form-control-lg" placeholder='Email Id' />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">

                          <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder='Password' />
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{ justifyContent: "center" }}>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="tel" id="phoneNumber" className="form-control form-control-lg" placeholder='Phone Number' />
                        </div>
                      </div>
                    </div>
                    <div className="pt-2">
                      <input className="btn btn-success btn-lg" type="submit" value="Register" />
                    </div>
                    <div class="divider d-flex align-items-center my-4">
                      <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                    </div>
                    <button class="btn btn-lg btn-block" style={{ backgroundColor: "#dd4b39" }}
                      type="submit"><i class="fab fa-google me-2"></i> Sign Up with Google
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