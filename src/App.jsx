import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Shortcodes from './pages/Shortcodes'
import Languages from './pages/Languages'
import NotFound from './pages/NotFound'
import MarkUp from './pages/MarkUp'
import Contact from './pages/Contact'
import PageImage from './pages/PageImage'
import PageFloats from './pages/PageFloats'
import Comments from './pages/Comments'
import NoComments from './pages/NoComments'
import About from './layout/About'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route index element={<Home />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/Shortcodes' element={<Shortcodes />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/Languages' element={<Languages />} />
        <Route path='/About' element={<About />}>
          <Route path='MarkUp' element={<MarkUp />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='PageImage' element={<PageImage />} />
          <Route path='PageFloats' element={<PageFloats />} />
          <Route path='Comments' element={<Comments />} />
          <Route path='NoComments' element={<NoComments />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
