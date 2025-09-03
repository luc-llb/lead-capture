import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { setRoutes } from './routes/index';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// CORS Configuration
const corsOptions = {
    origin: [
        FRONTEND_URL
    ],
    methods: ['POST'],
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'Authorization',
    ],
    credentials: false, // Disable credentials
    optionsSuccessStatus: 200 // Legacy browser support
};

app.use(cors(corsOptions));
app.use(express.json());

setRoutes(app);

// Middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});