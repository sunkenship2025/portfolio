import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                </Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>,
)
