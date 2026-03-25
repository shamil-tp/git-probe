# GitProbe

<p align="center">
  <img src="assets/banner.png" alt="GitProbe Banner" width="100%">
</p>

<p align="center">
  <strong>A fast GitHub profile analyzer built with Next.js</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-Framework-black">
  <img src="https://img.shields.io/badge/TailwindCSS-Styling-38bdf8">
  <img src="https://img.shields.io/badge/License-MIT-green">
  <img src="https://img.shields.io/badge/Status-Active-success">
</p>

---

## Overview

GitProbe is a lightweight GitHub profile analyzer that allows users to inspect and explore GitHub profiles quickly.

Enter any GitHub username and GitProbe will fetch public data and present useful insights such as repositories, stars, languages used, and overall activity.

The goal of GitProbe is to make exploring developer profiles faster and more informative without manually navigating through GitHub pages.

---

## Demo

<p align="center">
  <img src="assets/demo.gif" alt="GitProbe Demo" width="900">
</p>

Example workflow:

1. Enter a GitHub username
2. GitProbe fetches profile data
3. Repository and activity insights are displayed instantly

---

## Features

* Search any public GitHub username
* Display profile statistics
* Repository overview
* Star and fork metrics
* Language usage insights
* Fast and responsive interface
* Clean UI built with Tailwind CSS

---

## Tech Stack

Framework
Next.js

Language
TypeScript / JavaScript

Styling
Tailwind CSS

API
GitHub Public API

---

## Installation

Clone the repository

```bash
git clone https://github.com/yourusername/git-probe.git
```

Move into the project directory

```bash
cd git-probe
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open in your browser

```
http://localhost:3000
```

---

## Project Structure

```
git-probe
│
├── app
│   ├── page.tsx
│   └── layout.tsx
│
├── components
│   ├── Navbar.tsx
│   ├── ProfileCard.tsx
│   └── RepoList.tsx
│
├── lib
│   └── github.ts
│
├── public
│   └── assets
│
└── styles
    └── globals.css
```

---

## How It Works

1. The user enters a GitHub username.
2. GitProbe sends a request to the GitHub API.
3. Profile and repository data are retrieved.
4. The application processes and displays insights in a structured format.

---

## Contributing

Contributions are welcome.

Steps:

1. Fork the repository
2. Create a new branch
3. Implement your changes
4. Submit a pull request

---

## Author

Shamil

If you find GitProbe useful, consider starring the repository.
