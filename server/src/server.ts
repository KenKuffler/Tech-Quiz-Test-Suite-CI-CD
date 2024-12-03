import express from 'express';
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

// API Routes
app.use(routes);

// Handle invalid routes
app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

