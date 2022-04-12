import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className={`${styles.navDiv} container-fluid `}>
                <Link href='/'><a className="navbar-brand">UtilsWeb</a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <Link href='/'>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page">Home</a>
                        </li>
                    </Link> 
                    <Link href='/fetchapi'>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page">Fetch api</a>
                        </li>
                    </Link> 
                    <Link href='/axios'>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page">Axios api</a>
                        </li>
                    </Link>  
                    <Link href='/textutils'>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page">Text utils</a>
                        </li>
                    </Link>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
