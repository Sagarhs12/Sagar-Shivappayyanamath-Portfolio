# Sagar Shivappayyanamath — AI & DevOps Engineer Portfolio

A modern, high-performance portfolio application built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**.

---

## 🚀 Getting Started in VS Code

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) installed on your system.

### 2. Installation
Open the project directory in VS Code or your terminal and install the dependencies:
```bash
npm install
```

### 3. Run Development Server
To start the local dev server:
```bash
npm run dev
```
*(Alternatively, for pure client-only Vite development: `npm run dev:client`)*

Open your browser at **`http://localhost:3000`** (or the port shown in terminal).

### 4. Build for Production
To verify and generate the production bundle:
```bash
npm run build
```
The optimized static build will be placed in the `dist/` folder.

---

## 📦 Pushing to GitHub

1. Initialize git and stage all files:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio application"
   ```

2. Create a new repository on [GitHub](https://github.com/new).

3. Link your local repository and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
   git push -u origin main
   ```

---

## 🌐 Deploying to Vercel (One-Click)

1. Log in to [Vercel](https://vercel.com).
2. Click **"Add New..."** → **"Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**. Your site will be live within seconds with SSL and global CDN!

---

## 🛠️ Tech Stack & Highlights
- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Animations & Effects:** Motion & Canvas-Confetti
- **Forms & Inquiries:** Formspree Direct Delivery + Mailto fallback
- **Vercel Config:** `vercel.json` configured with SPA routing rules
