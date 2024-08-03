import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

// Routes
import routes from './routes/index';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', routes)

app.listen(process.env.PORT_NUMBER, () => {
    return console.log(`Express is listening at http://localhost:${process.env.PORT_NUMBER}`);
});
