import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import AgregarCategoria from './pages/InsertarCategorias'
import AgregarLocals from './pages/InsertarLocal'
import AgregarProducto from "./pages/InsertarProductos"
 
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <Router>
        <div className="app">
          <Nav/>
          <main className="main-content">
            <Routes>
              <Route path="/products" element={<AgregarProducto />} />
              <Route path="/locals" element={<AgregarLocals />} />
              <Route path="/Category" element={<AgregarCategoria />} />

            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  )                                    
}
 
export default App