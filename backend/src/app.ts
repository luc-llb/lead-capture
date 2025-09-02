import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { setRoutes } from './routes/index';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
setRoutes(app);

// Middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});