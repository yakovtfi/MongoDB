import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    id: Number,
    book_name: String,
    authr: String,
});

export const Book = mongoose.model("books", bookSchema);
