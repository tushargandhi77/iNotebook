# iNotebook - Secure Cloud-Based Note Storage

iNotebook is a MERN (MongoDB, Express.js, React, Node.js) application designed to help you store your notes securely in the cloud, ensuring privacy and accessibility.

## Features
- **Secure Note Storage**: Store your notes with confidence, knowing your data is private and secure.
- **Cloud-Based**: Access your notes from anywhere with an internet connection.
- **User-Friendly Interface**: Built with React for a smooth and responsive front-end experience.
- **Robust Backend**: Powered by Node.js and Express.js, with MongoDB for efficient data storage.

## Project Structure
The project is divided into two main folders:
- **Frontend**: Contains the React application for the user interface.
- **Backend**: Contains the Node.js/Express.js server and MongoDB integration.

## Prerequisites
Before running the application, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local or cloud instance, e.g., MongoDB Atlas)
- npm (comes with Node.js)

## Installation and Setup

### Frontend
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000` by default.

### Backend
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Ensure MongoDB is running and configure the connection string in the backend (e.g., in a `.env` file).
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the backend server:
   ```bash
   node index.js
   ```
   The backend will run on `http://localhost:5000` by default.

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Sign up or log in to start creating and managing your notes.
3. Your notes will be securely stored in the cloud and accessible anytime.

## Screenshots
*Add your screenshots here*

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a Pull Request.

## License
This project is licensed under the MIT License.
