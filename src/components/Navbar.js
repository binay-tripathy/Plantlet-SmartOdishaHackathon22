import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar" style={{ backgroundColor: "#1E5128" }}>
                    <div className="container-fluid">
                        <a className="navbar-brand text-light mx-2" href='/'>Plantlet</a>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-light mx-2" type="submit">Log In</button>
                            <button className="btn btn-outline-light mx-2" type="submit">Sign Up</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar