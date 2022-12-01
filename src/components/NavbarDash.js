import React, { Component } from 'react'
import logo from './favicon.png'

export class NavbarDash extends Component {
    render() {
        return (
            <div>
                <nav className="navbar" style={{ backgroundColor: "#1E5128" }}>
                    <div className="container-fluid">
                        <div className="d-flex">
                            <img src={logo} alt="Logo" style={{ width: "25px", height: "33px" }} />
                            <a className="navbar-brand text-left text-light mx-3" href='/'>Plantlet</a>
                        </div>
                        <form className="d-flex" role="search">
                            {/* <button className="btn btn-outline-light mx-2" type="submit"><Link to="/login" style={{color: "inherit", textDecoration: "none"}}> Log In</Link></button>
                            <button className="btn btn-outline-light mx-2" type="submit"><Link to="/signup" style={{color: "inherit", textDecoration: "none"}}> Sign Up</Link></button> */}
                                <img src={localStorage.getItem('profilePic')} alt="dp" className="mx-2 rounded-circle" style={{height: "2.5rem"}} id='dp' />
                            <div>
                                <h4 className="mx-2 text-light text-center" id='name' style={{fontSize: "1.4rem", textAlign: "center"}}>Welcome {localStorage.getItem("name")} </h4>
                                {/* <h4 className="mx-2 text-light" id='email'> {localStorage.getItem("email")} </h4> */}
                            </div>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavbarDash