import React, { useContext } from 'react';
import { ThemeContext } from "./context/ThemeContext";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import SignInPage from "./pages/SignInPage";
import NavItem from "./components/NavItem";
import 'bootstrap/dist/css/bootstrap.css';
import './theme/theme.css';
import './App.css'

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return(
    <BrowserRouter>
      <div className="container mt-4 mb-5">
        <main className='flex-grow-1'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/signin" element={<SignInPage />} />
          </Routes>
        </main>
      </div>

      <nav className="navbar fixed-bottom border-top w-100 p-0">
        <div className="w-100 d-flex justify-content-between align-items-center px-3 py-2">
          <button
            onClick={toggleTheme}
            className={`btn btn-sm ${
              theme === "dark" ? "btn-outline-light" : "btn-outline-dark"
            }`}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>

        <div className="d-flex justify-content-around w-100 py-2">
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="About" />
            <NavItem to="/contact" label="Contact" />
            <NavItem to="/signin" label="Sign In" />
        </div>
      </nav>
    </BrowserRouter>
  )
}

export default App;
