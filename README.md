# Sai Pranav Reddy — Portfolio

Personal portfolio built with **React + React Router (HashRouter) + Vite**, styled
with hand-written CSS. Two pages:

- **Home** (`/`) — hero, about, research interests, personal details (contact + skills), experience, achievements
- **Projects** (`/#/projects`) — three featured projects, each with a GitHub link

## Run locally

```bash
npm install
npm run dev          # opens http://localhost:5173
```

## Deploy to GitHub Pages

The project is already configured for GitHub Pages deployment.

### One-time setup

1. **Create the GitHub repository** (must be public)
   - https://github.com/new
   - Name: `portfolio`
   - Visibility: Public
   - Don't initialise with README/license

2. **Push this project**

    ```bash
    cd ~/Desktop/portfolio
    git init
    git add .
    git commit -m "initial portfolio"
    git branch -M main
    git remote add origin https://github.com/sunkenship2025/portfolio.git
    git push -u origin main
    ```

3. **Deploy** — this builds the site and publishes the `build/` folder to the
   `gh-pages` branch:

    ```bash
    npm run deploy
    ```

4. **Enable Pages**: Repo → Settings → Pages → Branch: `gh-pages` / root → Save.

5. Your live site appears at **https://sunkenship2025.github.io/portfolio**
   in a minute or two.

### Future updates

Just commit your changes and run `npm run deploy` again.

### Pre-configured pieces (so you don't have to follow the assignment's
"Step 2–4" manually)

- `gh-pages` is already installed as a devDependency
- `package.json` has the `homepage` field set
- `package.json` has `predeploy` + `deploy` scripts
- `src/main.jsx` already uses `HashRouter` (no 404s on refresh on GitHub Pages)
- Vite's build directory is set to `build/` (so `gh-pages -d build` works)

## Project structure

```
portfolio/
├── index.html                  # root HTML, font links, meta tags
├── package.json                # scripts, deps, homepage
├── vite.config.js              # outputs to build/
└── src/
    ├── main.jsx                # HashRouter + routes
    ├── App.jsx                 # nav, layout, footer
    ├── components/
    │   ├── ThemeToggle.jsx     # light/dark toggle, persists
    │   └── Reveal.jsx          # scroll-in animation
    ├── data/
    │   └── profile.js          # single source of truth (resume content)
    ├── pages/
    │   ├── Home.jsx
    │   └── Projects.jsx
    └── styles/
        └── index.css           # design tokens + sections + components
```

## Editing content

All personal content lives in **`src/data/profile.js`**. Update that file to
change name, contact info, projects, skills, etc. The pages re-render
automatically.
