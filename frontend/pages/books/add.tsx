import React, { useState } from 'react';
import axios from 'axios';

const AddBook: React.FC = () => {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [summary, setSummary] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/books', { name, img, summary });
            alert('Book added successfully');
            // Optionally, you can redirect the user to the home page or perform other actions after adding the book
        } catch (error) {
            console.error('Error adding book:', error);
            alert('Failed to add book');
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Add Book</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Image URL"
                        value={img}
                        onChange={e => setImg(e.target.value)}
                        className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
                        required
                    />
                    <textarea
                        placeholder="Summary"
                        value={summary}
                        onChange={e => setSummary(e.target.value)}
                        className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBook;
