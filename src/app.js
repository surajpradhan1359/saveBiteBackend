import express from 'express';
import userRoutes from './routes/user.routes.js';
import { centralErrorHandler } from './middleware/error.middleware.js';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

app.use(centralErrorHandler);