import express from 'express';
import { getBooks, createBook, updateBook, deleteBook } from '../controllers/bookscontroll.js';

const router = express.Router();

router.get('/getBooks', getBooks);
router.post('/getBooks', createBook);
router.put('/getBooks/:id', updateBook);
router.delete('/getBooks/:id', deleteBook);

export default router;
