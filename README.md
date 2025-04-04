# Talkify - A Realtime Chat App

Talkify is a real-time chat application built using the MERN (MongoDB, Express, React, Node.js) stack. It enables seamless, instant messaging with features like JWT authentication, online user status, and efficient state management.

## Tech Stack

- **Frontend:**
  - React JS
  - TailwindCSS
  - Axios
  - Daisy UI
  - Zustand (For state management)
  - React-Router-DOM

- **Backend:**
  - Node.js (with Express)
  - MongoDB (with Mongoose)
  - Socket.io (for real-time messaging)
  - Bcryptjs (for password hashing)
  - Cookie-Parser
  - Dotenv (for environment variables)
  - JSON Web Tokens (JWT)
  - Nodemon (for automatic server restarts)

## Getting Started

### Installation

To get the project up and running, follow these steps:

1. Clone the repository to your local machine.
  
2. Create a .ENV file in the /backend folder.

 ```bash
MONGODB_URI=...
PORT=5001
JWT_SECRET=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
NODE_ENV=development
 ```

3. Build the project 

   ```bash
   npm run build
   ```

### Scripts

- **Start the server:-**
Run this in the root folder
  ```bash
  npm run start
  ```

- **Start the client:**
Run this in the /frontend folder.
  ```bash
  npm run start
  ```
