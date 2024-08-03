import express from 'express';

// Routes
import auth from './auth';

const router = express.Router();

// This is only Test route
router.get('/', (req, res) => {
    res.send('Hello World!');
});

// Auth Service Routes
router.use('/auth', auth);

export default router;
