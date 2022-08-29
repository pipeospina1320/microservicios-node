import 'dotenv/config';
import express from 'express';
import config from '../config';

const app = express();
app.use(express.json());

app.get('/', (_req, resp) => {
    console.log('algo');
    resp.send('pong prueba dev');
});

const PORT = config.api.port; 
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});