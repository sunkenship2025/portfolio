import Reveal from '../components/Reveal.jsx'
import { projects, profile } from '../data/profile.js'

export default function Projects() {
    return (
        <>
            <section className="page-head">
                <Reveal>
                    <p className="page-head__eyebrow">/ projects</p>
                </Reveal>
                <Reveal delay={60}>
                    <h1 className="page-head__title">
                        Things I've <span className="hero__accent">shipped.</span>
                    </h1>
                </Reveal>
                <Reveal delay={120}>
                    <p className="page-head__lede">
                        A selection of work — from a clinical-software freelance build to
                        machine-learning pipelines at Colruyt Group. Every entry links to its
                        GitHub repository.
                    </p>
                </Reveal>
            </section>

            <section className="projects">
                {projects.map((p, i) => (
                    <Reveal key={p.slug} as="article" className={`project project--${p.accent}`} delay={i * 80}>

                        <header className="project__head">
                            <div className="project__num">{String(i + 1).padStart(2, '0')}</div>
                            <div>
                                <h2 className="project__title">{p.name}</h2>
                                <p className="project__meta">
                                    <span>{p.role}</span>
                                    <span className="project__dot">·</span>
                                    <span>{p.year}</span>
                                </p>
                            </div>
                            <a
                                className="project__github"
                                href={p.github}
                                target="_blank"
                                rel="noopener"
                                aria-label={`Open ${p.name} on GitHub`}
                            >
                                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                                    <path
                                        fill="currentColor"
                                        d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55v-2.04c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.2 1.18a11.06 11.06 0 0 1 5.83 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.79.55 4.57-1.52 7.86-5.83 7.86-10.91C23.5 5.65 18.35.5 12 .5z"
                                    />
                                </svg>
                                <span>GitHub</span>
                            </a>
                        </header>

                        <p className="project__summary">{p.summary}</p>

                        <div className="project__cols">
                            <div>
                                <h3 className="project__subhead">Outcomes</h3>
                                <ul className="project__outcomes">
                                    {p.outcomes.map((o) => (
                                        <li key={o}>{o}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="project__subhead">Stack</h3>
                                <ul className="project__tags">
                                    {p.stack.map((s) => (
                                        <li key={s}>{s}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <footer className="project__foot">
                            <a className="link-arrow" href={p.github} target="_blank" rel="noopener">
                                View on GitHub
                                <span aria-hidden="true">→</span>
                            </a>
                        </footer>
                    </Reveal>
                ))}
            </section>

            <Reveal as="section" className="section section--end">
                <h2 className="cta__title">More on GitHub.</h2>
                <p className="cta__sub">
                    Smaller experiments, coursework and one-offs live at <br/>
                    <a className="link-arrow" href={profile.contact.github} target="_blank" rel="noopener">
                        {profile.contact.githubHandle} <span aria-hidden="true">→</span>
                    </a>
                </p>
            </Reveal>
        </>
    )
}
