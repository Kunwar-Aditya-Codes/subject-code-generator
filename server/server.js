// Package Imports
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

// Explicit Imports
import errorHandler from './utils/errorHandler.js';
import connectDb from './utils/mongoConnect.js';
import subjectRoute from './view/subjectRoute.js';

const PORT = process.env.PORT || 5000;

connectDb();

const app = express();

app.use(express.json());
// app.use(
//   cors({
//     origin: ['http://localhost:5173'],
//   })
// );
app.use(errorHandler);

app.use('/api/subject', subjectRoute);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/build')));
// console.log(__dirname)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

mongoose.connection.once('open', () => {
  console.log('Connected to db!');
  app.listen(PORT, () => {
    console.log(`Server started on PORT:${PORT}`);
  });
});
