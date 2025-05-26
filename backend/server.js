import express from 'express';
import cors from 'cors';
import salaryRouter from './routers/salary.router.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api_v1', salaryRouter);




app.listen(PORT, ()=> {
    console.log(`server is running on http://localhost:${PORT}`);

    });