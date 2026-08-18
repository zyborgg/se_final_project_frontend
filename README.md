NewsExplorer is a fully responsive React application that allows users to search for news articles using the News API, view real‑time results, and save articles using simulated authentication. The project focuses on front‑end architecture, dynamic UI rendering, responsive design, and handling external API data.

Features
Search for news articles using the News API

Real‑time results displayed as responsive cards

Simulated authentication (login, registration, token checking)

Save and delete articles

Dedicated Saved News page

Preloader, error states, and empty states

Fully responsive layout across desktop, tablet, and mobile

Technologies Used
React (Vite)

JavaScript (ES6+)

CSS (Flexbox, Grid, Media Queries)

React Router (HashRouter for GitHub Pages)

News API

gh‑pages for deployment

Installation
Clone the repository:

bash
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
Install dependencies:

bash
npm install
Running the App Locally
Start the development server:

bash
npm run dev
Build the project:

bash
npm run build
Preview the production build:

bash
npm run preview
Deployment (GitHub Pages)

1. Install gh‑pages
   bash
   npm install gh-pages --save-dev
2. Update vite.config.js
   Add:

js
base: "/REPO_NAME/" 3. Add homepage to package.json
json
"homepage": "https://YOUR_USERNAME.github.io/REPO_NAME/" 4. Add deploy scripts
json
"scripts": {
"dev": "vite",
"build": "vite build",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
} 5. Deploy
bash
npm run predeploy
npm run deploy 6. GitHub Pages Settings
Go to your repo → Settings → Pages  
Set the source to:

Branch: gh-pages

Folder: /root

7. React Router Note
   GitHub Pages requires hash‑based routing.
   Use:

jsx
<HashRouter>
instead of:

jsx
<BrowserRouter>

deployed app link: https://zyborgg.github.io/se_final_project_frontend/

Project pitch video link: https://www.loom.com/share/27684fac827a4b94b7078314b38925cb
