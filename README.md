# Url-Shortener
Markdown# 🔗 URL Shortener (Node.js + MongoDB)

A simple, full-stack URL shortening service (like Bit.ly) built with Node.js, Express, and MongoDB. It uses **Server-Side Rendering (SSR)** with EJS to display a user-friendly interface for generating and tracking short links.

## 🚀 Features

- **Shorten URLs:** Convert long URLs into compact, shareable links.
- **Redirection:** Fast redirection using HTTP 302 status codes.
- **Analytics:** Tracks total clicks/visits for every generated link.
- **Server-Side Rendering:** Uses EJS templates to render the UI on the server.
- **REST API:** Includes API endpoints for creating and fetching URL data.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Templating Engine:** EJS (Embedded JavaScript)
- **Utilities:** ShortID (for ID generation)

## 📂 Project Structure

```text
├── models/         # Database Schemas (Mongoose)
├── controllers/    # Request Logic & Handlers
├── routes/         # API Routes
├── views/          # EJS Templates (Frontend)
├── index.js        # Entry point
└── connection.js   # Database connection logic
⚙️ Installation & SetupFollow these steps to run the project locally on your machine.1. Clone the repositoryBashgit clone [https://github.com/vedang2247/Url-Shortener.git](https://github.com/vedang2247/Url-Shortener.git)
cd Url-Shortener
2. Install DependenciesBashnpm install
3. Setup DatabaseMake sure you have MongoDB installed and running locally on mongodb://127.0.0.1:27017.(If you are using a cloud DB like Atlas, update the connection string in connection.js)4. Run the ServerBash# Development mode (with Nodemon)
npm start

# Standard mode
node index.js
The server will start on http://localhost:8000.🔌 API EndpointsMethodEndpointDescriptionGET/Renders the Homepage (SSR) with the form and table.POST/urlAccepts a JSON body { url: "https://..." } and returns/renders the short ID.GET/:idRedirects to the original URL and increments the visit count.GET/url/analytics/:idReturns JSON data with click counts and timestamps.📸 Screenshots(Add screenshots of your project here. Example below)🤝 ContributingContributions are welcome! If you find a bug or want to add a feature (like User Auth or Custom IDs), feel free to open a Pull Request.Fork the ProjectCreate your Feature Branch (git checkout -b feature/AmazingFeature)Commit your Changes (git commit -m 'Add some AmazingFeature')Push to the Branch (git push origin feature/AmazingFeature)Open a Pull Request📝 LicenseThis project is open source and available under the MIT License.
---
