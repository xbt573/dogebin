import express, { Application } from 'express';

import Paste from './routes/paste.js';

const PORT = 5000 || parseInt(process.env.BACKEND_PORT as string) as number;

const app: Application = express();

app.use(express.json());
app.use(Paste);

app.listen(PORT, (): void => {
    console.log(`Listen on ${PORT}`);
});
