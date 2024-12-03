import express from 'express';
// import path from 'node:path';
import db from './config/connection.js';
import routes from './routes/index.js';
import cors from 'cors';

// Configure CORS
const corsOptions = {
  origin: 'https://your-frontend-url.onrender.com', // Replace with your actual frontend URL
  optionsSuccessStatus: 200,
};

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
