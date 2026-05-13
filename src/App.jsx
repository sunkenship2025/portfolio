import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import ThemeToggle from './components/ThemeToggle.jsx'

function App() {
    const { pathname } = useLocation()

    // scroll to top whenever we change page
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [pathname])

    return (
        <div className="shell">
            <header className="nav" data-reveal>
                <NavLink to="/" className="nav__brand" end>
                    <span className="nav__brand-mark">s.</span>
                    <span className="nav__brand-name">Sai&nbsp;Pranav</span>
                </NavLink>

                <nav className="nav__links" aria-label="Primary">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                </nav>

                <ThemeToggle />
            </header>

            <main className="main">
                <Outlet />
            </main>

            <footer className="footer">
                <p>
                    © {new Date().getFullYear()} Sai Pranav Reddy ·
                    Mahindra University ·
                    <a href="https://github.com/sunkenship2025" target="_blank" rel="noopener">github.com/sunkenship2025</a>
                </p>
            </footer>
        </div>
    )
}

export default App
