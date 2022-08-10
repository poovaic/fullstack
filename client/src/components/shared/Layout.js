import React from 'react'
import Nav from './Nav';
import Footer from './Footer';

function Layout(props) {
  return (
    <div>
        <h1>Items App</h1>
        <Nav/>
        {props.children}




        <Footer/>
    </div>
  )
}

export default Layout
