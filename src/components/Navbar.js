import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './favicon.png'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar" style={{ backgroundColor: "#1E5128" }}>
                    <div className="container-fluid">
                        <div className="d-flex">
                        <img src={logo} alt="Logo" style={{width: "25px", height: "33px"}} />
                        <a className="navbar-brand text-left text-light mx-3" href='/'>Plantlet</a>
                        </div>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-light mx-2" type="submit"><Link to="/login" style={{color: "inherit", textDecoration: "none"}}> Log In</Link></button>
                            <button className="btn btn-outline-light mx-2" type="submit"><Link to="/signup" style={{color: "inherit", textDecoration: "none"}}> Sign Up</Link></button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar