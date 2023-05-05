import React from "react";
import { useState } from "react";
import { FcIphone } from "react-icons/fc";

const NavBar = () => {
    const [show, setShow] =useState(false)
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
          <FcIphone/>  Mobile Store
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={()=>{setShow(!show)}}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class={`collapse navbar-collapse ${show ? "show" :""}`} >
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/registrations">
                <button class="btn btn-outline-success" type="submit">Sign Up</button>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">
                <button class="btn btn-outline-success" type="submit">Login</button>
                </a>
              </li>
             
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
