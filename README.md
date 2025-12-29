# 🔗 ZipLink - Stateless URL Shortener with RBAC

A full-stack, scalable URL shortening service built with **Node.js**, **Express**, and **MongoDB**. This project features **Stateless Authentication** using JWTs, **Server-Side Rendering (SSR)** with EJS, and a secure **Role-Based Access Control (RBAC)** system for Administrators.

## 🚀 Key Features

* **Stateless Authentication:** Secure login system using **JSON Web Tokens (JWT)** stored in HTTP-only cookies. No server-side session storage required.
* **Role-Based Access Control (RBAC):**
    * **Normal Users:** Can shorten URLs and view analytics for *their own* links.
    * **Admins:** Have access to a dedicated dashboard to view all users, manage system-wide links, and delete users.
* **Analytics:** Tracks click counts and visit history for every shortened link.
* **Server-Side Rendering (SSR):** Fast, dynamic UI rendering using EJS templates.
* **Security:** Password hashing, protected routes, and environment variable management.

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Templating:** EJS (Embedded JavaScript)
* **Authentication:** JWT (jsonwebtoken), Cookies (cookie-parser)

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
git clone [https://github.com/YOUR_USERNAME/REPO_NAME.git](https://github.com/YOUR_USERNAME/REPO_NAME.git)
cd REPO_NAME
2. Install Dependencies
Bash

npm install
3. Configure Environment Variables
Create a file named .env in the root directory and add the following:

Code snippet

PORT=8001
MONGODB_URL=mongodb://127.0.0.1:27017/url-shortener
JWT_SECRET=YourSuperSecretKeyHere
4. Start the Server
Bash

npm start
# or if you use nodemon
npm run dev
📖 Usage Guide
Sign Up: Create a new account at /signup.

Shorten Link: Paste a long URL to generate a short ID.

View Analytics: See how many times your link was clicked.

Admin Access:

Manually change a user's role to "ADMIN" in the MongoDB database.

Log in and visit /admin/urls to see the dashboard.

Admins can Delete Users directly from the UI.

📂 Project Structure
Plaintext

├── controllers/    # Logic for handling requests (URL, User)
├── models/         # Database Schemas (MongoDB)
├── routes/         # API Routes (Static, User, Admin)
├── service/        # Auth logic (JWT generation/verification)
├── views/          # EJS Frontend Templates
├── middlewares/    # Auth & RBAC Middleware
├── index.js        # Entry point
└── .env            # Environment variables (Ignored by Git)
🔒 Security Highlights
JWT vs Sessions: Switched from stateful sessions to stateless JWTs to ensure horizontal scalability.

Middleware: Custom checkForAuthentication and restrictTo(['ADMIN']) middleware ensures only authorized personnel access sensitive routes.

Defensive Coding: Route handlers check for null users/tokens to prevent server crashes.

🤝 Contributing
Contributions, issues, and feature requests are welcome!

📝 License
This project is open source.