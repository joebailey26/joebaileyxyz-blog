import React from "react"
import { Link } from "gatsby"

import "joebaileyxyz/src/css/main.scss"

import "joebaileyxyz/src/components/css/footer.scss"

import "joebaileyxyz/src/components/css/nav.scss"

import "../css/main.scss"

const Layout = ({ title, children }) => {

  let header

  header = (
    <h3>
      <Link
        to={`/`}
      >
        {title}
      </Link>
    </h3>
  )
  return (
    <div>
      <nav className="navbar transparent" id="transp" >
                <div className="container">
                    <div className="row">
                        <div className="navbar-brand"><a href="#home">Joe Bailey</a></div>
                        <p title="navigation" className="navbar-toggler text-center">
                            <i className="fas fa-bars"></i>
                        </p>
                        <div className="navmob closed" id="nav">
                            <div className="navlinks">
                                <a className="nav-link" id="portfolio" href="#section-portfolio">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
                                    </svg>
                                    Portfolio
                                </a>
                                <a className="nav-link" id="blog" href="#section-blog">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                                    </svg>
                                    Blog
                                </a>
                                <a className="nav-link" id="contact" href="#section-contact">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                                    </svg>
                                    Contact
                                </a>
                                <div title="close-navigation" id="close" className="closed"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
      <header>{header}</header>
      <main class="main">
        <div class="container ml-auto mr-auto">
          <section class="section">
            {children}
          </section>
        </div>
      </main>
      <footer className="footer text-center">
        <div className="container ml-auto mr-auto">
            <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                    <div className="copyright">
                        &copy; <time>{new Date().getFullYear()}</time> Joe Bailey. All rights reserved.
                    </div>
                    <div className="social">
                        <a title="Twitter" aria-label="Twitter Social Profile Link" href="https://twitter.com/joebaileyphoto" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a title="LinkedIn" aria-label="LinkedIn Social Profile Link" href="https://www.linkedin.com/in/joe-bailey-b68b17171/" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a title="Behance" aria-label="Behance Social Profile Link" href="https://www.behance.net/joebailey26" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-behance-square"></i>
                        </a>
                        <a title="GitHub" aria-label="GitHub Social Profile Link" href="https://github.com/joebailey26" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-github"></i>
                        </a>
                        <a title="CodePen" aria-label="CodePen Social Profile Link" href="https://codepen.io/joebailey26" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-codepen"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>   
    </footer>
    </div>
  )
}

export default Layout
