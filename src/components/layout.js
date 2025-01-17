import React from "react"

import "joebaileyxyz/src/css/main.scss"

import "../css/main.scss"

import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Nav></Nav>
      <main className="main">
        <div className="container ml-auto mr-auto">
            <section className="section">
                <div className="row">
                    <div className="col-md-8 ml-auto mr-auto">
                        {children}
                    </div>
                </div>
            </section>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
