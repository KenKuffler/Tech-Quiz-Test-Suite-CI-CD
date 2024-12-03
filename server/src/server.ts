import express from 'express';
import db from './config/connection.js';
import routes from './routes/index.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Determine CORS origin dynamically
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Default to local frontend during local testing
  optionsSuccessStatus: 200,
};

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

