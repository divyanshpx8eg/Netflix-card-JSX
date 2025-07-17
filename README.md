
---

# 🎬 Netflix Series Catalog

A simple and responsive React application that displays a list of Netflix-style series cards using JSON data. This project demonstrates React fundamentals such as component-based architecture, props, conditional styling, and working with external data.

---

## 📸 Preview

<img width="1365" height="569" alt="image" src="https://github.com/user-attachments/assets/409d3882-316c-4b95-8d00-8e966b060899" />


---

## 🚀 Features

* 🔹 Displays dynamic series cards from JSON data
* 🎨 Styled using CSS Modules and `styled-components`
* ⚡ Conditional styling based on rating (e.g., "Super Hit" vs. "Average")
* 🧩 Component-based architecture (`NetflixCard`, `SeriesCard`)
* 📦 Props usage and dynamic rendering

---

## 📁 Project Structure

```
/src
│
├── /components
│   ├── NetflixCard.jsx
│   ├── SeriesCard.jsx
│   └── Netflix.module.css
│
├── /api
│   └── seriesData.json
│
├── /pages
│   └── Profile.jsx
│
└── App.jsx
```

---

## 🧠 Technologies Used

* React.js
* CSS Modules
* styled-components
* JSON (as mock API data)
* Tailwind CSS (optional if used)

---

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

4. Open `http://localhost:3000` in your browser to see it live.

---

## 📊 Sample Data (`seriesData.json`)

```json
[
  {
    "id": 1,
    "img_url": "https://example.com/image1.jpg",
    "name": "Stranger Things",
    "rating": 8.9,
    "description": "A supernatural thriller...",
    "cast": "Millie Bobby Brown, Finn Wolfhard",
    "genre": "Drama, Sci-Fi",
    "watch_url": "https://netflix.com/strangerthings"
  }
]
```

---

## ✅ Learnings

* Practiced passing and destructuring props in components
* Worked with external JSON files as data sources
* Applied dynamic and conditional styling using styled-components
* Strengthened understanding of reusable component design in React

---

