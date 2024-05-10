import React from 'react'

import { Footer, Possibility, Whatspotit, Header } from './containers';
import { Cta, Brand, Navbar } from './components';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatspotit />
      <Possibility />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
