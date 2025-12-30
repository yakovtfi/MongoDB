import express from 'express';
import { getBooks, createBook, updateBook, deleteBook } from '../controllers/bookscontroll.js';

export const Bookrouter = express.Router();

Bookrouter.get('/getBooks', getBooks);
Bookrouter.post('/getBooks', createBook);
Bookrouter.put('/getBooks/:id', updateBook);
Bookrouter.delete('/getBooks/:id', deleteBook);


