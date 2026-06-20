# Ritesh Todmal — Portfolio (React + Vite + Tailwind)

## 1. Install dependencies
Open this folder in VS Code, then in the terminal run:

```
npm install
```

## 2. Run locally (dev server with hot reload)

```
npm run dev
```

Open the URL it prints (usually http://localhost:5173) in your browser.

## 3. Add your resume PDF
Put your resume PDF inside the `public/` folder (create the folder if it
doesn't exist) and name it `Ritesh_Todmal_Resume.pdf`. The "View Resume"
button in Hero.jsx already links to `/Ritesh_Todmal_Resume.pdf`.

## 4. Add a real photo
Replace the "RT" placeholder block in `src/components/About.jsx` with:
```jsx
<img src="/profile.jpg" alt="Ritesh Todmal" className="w-full h-full object-cover" />
```
and place `profile.jpg` inside `public/`.

## 5. Build for production

```
npm run build
```
This creates a `dist/` folder with the final static site.

## 6. Deploy

### Option A — Vercel (recommended, easiest for React/Vite)
1. Push this project to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Vite. Click Deploy. Done — live URL in ~1 minute.

### Option B — Netlify
1. Push to GitHub.
2. netlify.com → Add new site → Import from GitHub.
3. Build command: `npm run build`, publish directory: `dist`.

### Option C — GitHub Pages
GitHub Pages needs a small extra config since this is a React app (not a
plain HTML file). Ask if you want help wiring this up — Vercel/Netlify above
are simpler for React projects.

## Wiring the contact form to actually send email
The form currently validates input but doesn't send anywhere. To make it
functional:
1. Sign up at https://formspree.io (free tier is enough).
2. Create a form, get your form endpoint URL.
3. In `src/components/Contact.jsx`, replace the `handleSubmit` logic with a
   `fetch()` POST to that endpoint.
