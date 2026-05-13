import { useEffect, useState } from 'react'

const STORAGE_KEY = 'spr-theme'

function getInitial() {
    if (typeof window === 'undefined') return 'light'
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState(getInitial)

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        window.localStorage.setItem(STORAGE_KEY, theme)
    }, [theme])

    return (
        <button
            type="button"
            className="theme-toggle"
            aria-label="Toggle colour theme"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        >
            <span className="theme-toggle__icon" aria-hidden="true">
                {theme === 'dark' ? '☾' : '☀'}
            </span>
        </button>
    )
}
