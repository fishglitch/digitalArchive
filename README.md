# Schrodinger's Backpack: A Memory Archive

## Overview# Overview: 

Schrodinger's Backpack is a full-stack application designed to allow users to submit, store, and reflect upon memories of a deceased loved one through items they might carry in this ancestor's backpack. Inspired by the concept of "what's in my backpack," and the thought experiment "Schrodinger's Cat", this app provides a sentimental space for users to reflect on how those memories exist in a state of uncertainty until actively acknowledged and celebrated.

## Table of Contents
- [Technologies](#technologies)
- [Features](#features)
- [Purpose](#purpose)
- [Project Directory Structure](#project-directory-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Git Commit Message Guidelines](#git-commit-message-guidelines)
- [](#)
- [](#)
- [](#)
- [](#)
- [](#)
- [](#)

## Technologies
- **Frontend**: Vite, React
- **Backend**: Express.js, PostgreSQL

## Features
- User authentication with hashed passwords
- Submit memories with titles, descriptions, images, and context
- CRUD operations for managing users and memories
- Intuitive interface for memory browsing

## Purpose
This app serves as a digital memory box to collectively celebrate the life of a loved one. Inspired by the concept of Schrodinger's Cat, the app prompts users to consider, "What would [this person] carry in their backpack?". In physicist Erwin Schrodinger's famous 1935 thought experiment, a hypothetical cat in a sealed box exists in a mysterious state of being both alive and dead living and death until the box is opened and examined. Just like the cat, or, tiny particles in quantum physics that can be in two states at once until observed, our memories of this late ancestor can feel uncertain until we bring them to light. By sharing and reflecting on these memories through the app, users transform this uncertainty into meaningful, lasting memories that celebrate this loved one's well-lived life.

## Project Directory Structure

*Separation of concerns is observed through this structure*

   ```plaintext
schrodingers_backpack_fullstack/
npm run start:dev --prefix server
npm run dev --prefix client
├── client/         # Frontend code (React, Vite, etc.)
|                   # npm run dev
│   ├── public/     # Static files for the client
│   ├── src/        # Source code for the client
│   │   ├── assets/        # Images and other assets
│   │   ├── components/    # Child components
│   │   ├── css/          # Styling for the child components
│   │   └── App.jsx       # Main/parent application file
│   └── package.json      # Client-side dependencies and scripts
│                 
└── server/         # Backend code (Express, Node.js, etc.)
    |                # npm run start:dev
    ├── api/        # Define your API routes and handlers
    ├── config/     # Configuration files like DB connections
    ├── controllers/ # Logic for handling requests
    ├── models/     # Database models (if using a DB)
    ├── middleware/  # Any middleware functions
    ├── routes/      # Route definitions
    ├── server.js    # Main server file to start the application
    └── package.json  # Server-side dependencies and scripts
```

## Installation

To set up the project, follow these steps:

1. Clone repo
2. Navigate to project directory
3. Set up frontend / client with dependencies:
* 'npm install vite@latest'
* 'npm install'
* 'npm run dev' *starts the Vite development server, which should detail running server in terminal*

4. Set up backend / server
* npm init -y (for general) or npm init (for customizable) *initializes node application and have package.json; add to package.json in scripts, if not available:*

Install Express and other dependencies
* npm install --save-dev nodemon *adds development dependencies to allow Node.js app to automatically restart for detected directory file change instances*
* npm install --save express *Node.js web framework handling API routing, middleware, HTTP requests*
* npm install --save pg *node-postgress pckg to interact with psql database*
* npm install --save bcrypt *secure password hashing library for user authentication*
* npm install jsonwebtoken *creation and verification of JWTs for authentication and session management*
* npm install --save uuid *methods to generate unique identifiers (UUIDs) for database records*
* npm install morgan *middleware for HTTP requests logging in Express apps; for tracking server activity*

Or, this shortcut:
* npm install express pg bcrypt jsonwebtoken uuid morgan nodemon

5. Confirm start scripts in package.json

```javascript
{
    "scripts": {
        "start": "node server.js",
        "start:dev": "nodemon server.js"
    }
}
```

## Usage
1. After installing, run the server: 'npm run start:dev'
2. Access the app through browser at http://localhost:3000 (or other specified port in your environment variables)
3. CTRL + C to quit 

## Git Commit Message Guidelines

1. **Add/Update/Delete/Remove**:
   - `git commit -m "Add user authentication"`
   - `git commit -m "Update README with installation instructions"`
   - `git commit -m "Remove unused images"`

2. **Fix**:
   - `git commit -m "Fix bug in user login logic"`
   - `git commit -m "Fix typo in the homepage header"`

3. **Improve**:
   - `git commit -m "Improve performance of data fetching function"`

4. **Refactor**:
   - `git commit -m "Refactor user profile component for better readability"`

5. **Feature/Enhancement**:
   - `git commit -m "Add search functionality to user profiles"`

6. **Documentation**:
   - `git commit -m "Document API endpoints in README"`

7. **Chore**:
   - `git commit -m "Chore: update dependencies"`

8. **Initial Commit**:
   - `git commit -m "Initial commit"`

## Best Practices for Commit Messages

- **Use Imperative Mood**: Write messages in the imperative (e.g., "Fix bug", "Add feature").
- **Be Descriptive**: Provide clarity; add more context if needed:
  ```bash
  git commit -m "Add image upload feature" -m "This feature allows users to upload images to their profiles."

