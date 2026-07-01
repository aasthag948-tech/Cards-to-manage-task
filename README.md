# Cards to Manage Task

A simple task manager built with Node.js, Express, and EJS. Tasks are saved as `.txt` files in the `files/` folder and displayed as cards on the home page.

## Features

- Create tasks with a title and details
- Each task is stored as a `.txt` file in `files/`
- View all tasks as cards on the home page
- Click "Read more" to open the full task details

## Tech Stack

- **Backend:** Node.js + Express.js
- **Templates:** EJS
- **Styling:** Tailwind CSS (CDN)

## Getting Started

```bash
npm install
node index.js
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── files/          # Task files stored here (auto-created)
├── views/
│   ├── index.ejs   # Home page — task cards
│   └── task.ejs    # Task detail page
├── public/         # Static assets
└── index.js        # Express server
```
