import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { profile } from '../data/profile.js'

export default function Home() {
    const c = profile.contact

    return (
        <>
            {/* HERO */}
            <section className="hero">
                <Reveal>
                    <p className="hero__eyebrow">Hi, I'm {profile.firstName}.</p>
                </Reveal>
                <Reveal delay={60}>
                    <h1 className="hero__title">
                        I build software that<br />
                        <span className="hero__accent">people actually use.</span>
                    </h1>
                </Reveal>
                <Reveal delay={120}>
                    <p className="hero__lede">{profile.tagline}</p>
                </Reveal>
                <Reveal delay={180}>
                    <div className="hero__cta">
                        <Link className="btn btn--primary" to="/projects">See my work →</Link>
                        <a className="btn btn--ghost" href={`mailto:${c.emailPersonal}`}>Get in touch</a>
                    </div>
                </Reveal>

                <Reveal delay={240} className="hero__portrait-wrap">
                    <div className="portrait" aria-hidden="true">
                        <div className="portrait__inner">
                            <span className="portrait__initials">SP</span>
                        </div>
                        <div className="portrait__halo" />
                    </div>
                    <p className="hero__caption">
                        {profile.education.school}
                        <br />
                        <span>{profile.education.degree} · {profile.education.years}</span>
                    </p>
                </Reveal>
            </section>

            {/* ABOUT */}
            <Reveal as="section" id="about" className="section">
                <h2 className="section__title">About me</h2>
                <div className="about">
                    <div className="about__copy">
                        {profile.aboutParagraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                    <aside className="about__facts">
                        <dl>
                            <dt>Based in</dt><dd>{profile.location}</dd>
                            <dt>Reading</dt><dd>CS &amp; AI · 3rd year</dd>
                            <dt>Currently</dt><dd>Freelance backend at Sobhana Diagnostics</dd>
                            <dt>Open to</dt><dd>SDE / ML internships, Summer 2026</dd>
                        </dl>
                    </aside>
                </div>
            </Reveal>

            {/* RESEARCH INTERESTS */}
            <Reveal as="section" id="interests" className="section">
                <h2 className="section__title">Research interests</h2>
                <div className="interests">
                    {profile.researchInterests.map((r, i) => (
                        <article key={i} className="interest">
                            <span className="interest__index">{String(i + 1).padStart(2, '0')}</span>
                            <h3 className="interest__title">{r.title}</h3>
                            <p className="interest__body">{r.body}</p>
                        </article>
                    ))}
                </div>
            </Reveal>

            {/* PERSONAL DETAILS */}
            <Reveal as="section" id="details" className="section">
                <h2 className="section__title">Personal details</h2>

                <div className="details">
                    <div className="details__block">
                        <h3 className="details__heading">Contact</h3>
                        <dl className="details__list">
                            <dt>Name</dt><dd>{profile.name}</dd>
                            <dt>Phone</dt>
                            <dd>
                                <a href={`tel:${c.phone.replace(/\s/g, '')}`}>{c.phone}</a>
                            </dd>
                            <dt>Personal email</dt>
                            <dd>
                                <a href={`mailto:${c.emailPersonal}`}>{c.emailPersonal}</a>
                            </dd>
                            <dt>College email</dt>
                            <dd>
                                <a href={`mailto:${c.emailCollege}`}>{c.emailCollege}</a>
                            </dd>
                            <dt>GitHub</dt>
                            <dd>
                                <a href={c.github} target="_blank" rel="noopener">{c.githubHandle}</a>
                            </dd>
                            <dt>LinkedIn</dt>
                            <dd>
                                <a href={c.linkedin} target="_blank" rel="noopener">{c.linkedinHandle}</a>
                            </dd>
                            <dt>Roll number</dt><dd>{profile.education.rollNo}</dd>
                        </dl>
                    </div>

                    <div className="details__block">
                        <h3 className="details__heading">Skills</h3>
                        <div className="skills">
                            {profile.skills.map((s) => (
                                <div key={s.group} className="skills__group">
                                    <h4>{s.group}</h4>
                                    <ul>
                                        {s.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* EXPERIENCE */}
            <Reveal as="section" id="experience" className="section">
                <h2 className="section__title">Experience</h2>
                <ol className="timeline">
                    {profile.experience.map((e, i) => (
                        <li key={i}>
                            <div className="timeline__when">{e.years}</div>
                            <div className="timeline__what">
                                <h3>
                                    {e.role} <span>· {e.company}</span>
                                </h3>
                                <p>{e.impact}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </Reveal>

            {/* ACHIEVEMENTS */}
            <Reveal as="section" id="achievements" className="section">
                <h2 className="section__title">Selected achievements</h2>
                <div className="achievements">
                    {profile.achievements.map((a, i) => (
                        <article key={i} className="achievement">
                            <span className="achievement__mark">★</span>
                            <div>
                                <h3>{a.title}</h3>
                                <p>{a.body}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </Reveal>

            {/* CTA TO PROJECTS */}
            <Reveal as="section" className="section section--cta">
                <h2 className="cta__title">
                    Want to see what I've built?
                </h2>
                <Link to="/projects" className="btn btn--primary btn--lg">
                    Browse projects →
                </Link>
            </Reveal>
        </>
    )
}
