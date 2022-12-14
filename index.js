import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/post.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

// const CONNECTION_URL = 'mongodb+srv://hamzakhan:hamza11298@cluster0.jjuuwhk.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

