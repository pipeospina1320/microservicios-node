import 'dotenv/config';
import express from 'express';
import config from '../config';

const app = express();
app.use(express.json());


const PORT = config.api.port; 
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});