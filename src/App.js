import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home.js'
import CatProfile from './components/CatProfile.js'
import Cats from './components/Cats.js'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cats/:catId" element={<CatProfile />} />
          <Route path="/cats" element={<Cats />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App