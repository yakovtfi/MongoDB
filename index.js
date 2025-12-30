import express from 'express';
import { connectDatabase } from './config/database.js';
import { PORT } from './config/server.js';
import { Bookrouter } from './routes/books.js';

const app = express();

app.use(express.json());

connectDatabase().then((connected) => {
    if (connected) {
        app.listen(PORT, () => {
            console.log(`Server is running on port http://localhost:${PORT}`);
        });
    }
});

app.use(Bookrouter);

