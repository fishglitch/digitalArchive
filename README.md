# digitalArchive

1. **Create the directory**:  
   *Keep in mind separation of concerns as a best practice*

   **Project Directory Structure**  

   ```plaintext
   digitalArchive/
   │                   # npm run start:dev --prefix server, and npm run dev --prefix client
   ├── client/         # Frontend code (React, Vue, etc.)
   │                    # npm create vite@latest, npm install, npm run dev
   │   ├── public/     # Static files for the client
   │   ├── src/        # Source code for the client
   │       ├── assets
   │       ├── components
   │       ├── css
   │   └── package.json # check that scripts are up to date
   │
   └── server/         # Backend code (Express, Node.js, etc.)
   │                    # npm run start:dev
       ├── api/        # Define your API routes and handlers
       ├── config/     # Configuration files like DB connections
       ├── controllers/ # Logic for handling requests
       ├── models/     # Database models (if using a DB)
       ├── middleware/  # Any middleware functions
       ├── routes/      # Route definitions
       ├── server.js    # Main server file to start the application
       └── package.json

2. **Set up frontend / client with Vite and React**
* npm create vite@latest *this creates a new folder, "client"*

3. **Within the client, install dependencies**
* npm install

4. **Start the frontend / client developer**
* npm run dev *starts the Vite development server, which should detail running server in terminal*

5. **create backend / server with Express**
   
*navigate to the project directory and initialize a new Express project file:*

* npm init -y (for general) or npm init (for customizable) *initializes node application and have package.json; add to package.json in scripts, if not available:*
```javascript
{
    "start": "node server",
    "start:dev": "nodemon server"
}
```

6. **Install Express and other dependencies**
for example, we've previously used the following:
* npm install --save-dev nodemon *adds dependencies*
* npm install --save pg *talks to postgre database*
* npm install --save express *handles routing*
* npm install --save uuid
* npm install --save bcrypt

*note: do I need cors?*

7. **Create basic Express server**

i.e. server.js or index.js

# Express Server Setup

This document provides a basic setup for an Express server with CORS middleware and a sample route.

## Code Example

You can use the following code to create a simple Express server:

```javascript
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get('/api', (req, res) => {
    res.send('Hello from the backend!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```
*console.log in server.js / index.js*

8. **npm run start:dev in terminal to check console.log in index.js**



