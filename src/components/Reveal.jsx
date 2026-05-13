import { useEffect, useRef, useState } from 'react'

/* One-shot reveal-on-scroll wrapper. */
export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '', ...rest }) {
    const ref = useRef(null)
    const [shown, setShown] = useState(false)

    useEffect(() => {
        const node = ref.current
        if (!node) return
        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (e.isIntersecting) {
                        setShown(true)
                        io.unobserve(e.target)
                    }
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
        )
        io.observe(node)
        return () => io.disconnect()
    }, [])

    return (
        <Tag
            ref={ref}
            className={`reveal ${shown ? 'is-visible' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
            {...rest}
        >
            {children}
        </Tag>
    )
}
