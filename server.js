
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/users.js';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

mongoose.set("strictQuery", true);
mongoose.connect(process.env.URL)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));
//UL6creu5xb1jsw1Z
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/users', router);

app.listen(3000, () => console.log('Server running on port 3000'));