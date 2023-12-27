import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand"  to="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page"  to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link"  to="/about">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link "  to="/signup"aria-disabled="true">Registeration</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link " to="/contact" aria-disabled="true">Contact</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/login" aria-disabled="true">Login</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar