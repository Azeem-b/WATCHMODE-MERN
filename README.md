# WATCHMODE MOVIE FINDER 🎬

**WATCHMODE MOVIE FINDER** is a **React-based web application** that leverages the [Watchmode API](https://api.watchmode.com) to help users explore movies and TV shows available across different streaming platforms. This application provides users with detailed title information, streaming sources, episodes, and more using a clean, responsive interface built with React.

The purpose of this project is to showcase a lightweight and scalable frontend application that integrates with a powerful third-party API using best practices in React development.

---

## 🌐 Live Demo

> _Coming soon..._

---

## 🔗 About the API

This project utilizes the **Watchmode API**, which is a free, open API (with a limit of 1000 requests/month on the free tier). It is ideal for developers building entertainment-related platforms.

### API Features:
- Find out what movies & shows are available on various streaming services.
- Fetch detailed title data including genres, ratings, and overviews.
- List streaming sources for a movie/show.
- Retrieve seasons, episodes, and cast info for TV shows.
- All requests are RESTful and return JSON data.
- API key-based authentication.

To use the API, you must pass your personal `apiKey` as a GET or POST parameter with each request. A test key is available, but it has limitations and is best used only for example calls.

🔗 More details: [https://api.watchmode.com](https://api.watchmode.com)

---

## 🚀 Tech Stack

- **Frontend**: React.js, React Router, Axios
- **API**: [Watchmode Public API](https://api.watchmode.com)
- **Version Control**: Git & GitHub
- **Package Management**: npm

---

## 💡 Features

- 🔍 Search for movies or TV shows by title
- 🎬 View detailed info like overview, genres, ratings, release year, and trailer links
- 📺 Explore streaming platforms where a title is available
- 📁 Browse episodes of TV series by season
- 🔁 Responsive, mobile-friendly UI
- 🔧 Built with modular and reusable components
- 📦 Environment variable support (`.env`) for API keys
- 🚀 Easy to deploy on Netlify or Vercel

---

## 🛠️ Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/WATCHMODE-MERN.git
cd WATCHMODE-MERN
