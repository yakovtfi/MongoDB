import { Book } from '../models/Book.js';

export const getBooks = async (req, res) => {
    const bookData = await Book.find();
    res.json(bookData);
};

export const createBook = async (req, res) => {
    try {
        const { book_name, authr } = req.body;

        if (!book_name || authr === undefined) {
            return res.status(400).json({ message: 'book_name and authr are required' });
        }

        const bookData = await Book.create({ book_name, authr });
        res.status(201).json(bookData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create book' });
    }
};

export const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { book_name, authr } = req.body;

        if (!book_name && authr === undefined) {
            return res.status(400).json({ message: 'Nothing to update' });
        }

        const updated = await Book.findByIdAndUpdate(
            id,
            { book_name, authr },
            { new: true, runValidators: true }
        );

        if (!updated) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.json(updated);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update book' });
    }
};

export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Book.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.json({ message: 'Book deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete book' });
    }
};
