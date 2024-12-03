import express from 'express';
const router = express.Router();

import apiRoutes from './api/index.js';

// Use API routes
router.use('/api', apiRoutes);

// Catch-all handler for undefined routes
router.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

export default router;

