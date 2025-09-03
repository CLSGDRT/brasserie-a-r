import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from './components/Container/Container'
import Home from './components/Home/Home'
import Catalog from './components/Catalog/Catalog'
import Cart from './components/Cart/Cart'
import { ListProvider } from './contexts/ListProvider'
import './App.css'
import Contact from './components/Contact/Contact'
import Mention from './components/Mention/Mention'
import Conditions from './components/Conditions/Conditions'
import Privacy from './components/Privacy/Privacy'

function App() {

  return (
    <>
      <ListProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
            <Route path="mentions" element={<Mention />} />
            <Route path="conditions" element={<Conditions />} />
            <Route path="privacy" element={<Privacy />} />
          </Route>
        </Routes>
      </Router>
    </ListProvider>
    </>
  )
}

export default App
