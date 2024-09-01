import express from 'express'
import cors from 'cors';
import Connection from './database/db.js';
import route from './routes/route.js';

const app = express();


app.use(cors());

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}))
app.use('/', route);


const port = 8000;

Connection();

app.listen(port, () => { console.log(`your server is successfully running on port ${port}`) });