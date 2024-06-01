import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home: React.FC = () => {
    const [books, setBooks] = useState<any[]>([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/books')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`http://localhost:5000/api/books/${id}`);
            setBooks(prevBooks => prevBooks.filter(book => book._id !== id));
            alert('Book deleted successfully');
        } catch (error) {
            console.error('Error deleting book:', error);
            alert('Failed to delete book');
        }
    };

    return (
        <div className="container mx-auto mt-8 px-4">
            <h1 className="text-4xl font-semibold text-center mb-8">Discover Amazing Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {books.map(book => (
                    <div key={book._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-64 object-cover" src={book.img} alt={book.name} />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2">{book.name}</h2>
                            <p className="text-gray-700">{book.summary}</p>
                            <div className="mt-4 flex justify-between items-center">
                                <a href={`/books/${book._id}`} className="block text-blue-600 hover:underline">Read More</a>
                                <div className="flex">
                                    <button
                                        onClick={() => handleDelete(book._id)}
                                        className="text-red-500 hover:text-red-700 focus:outline-none mr-4"
                                    >
                                        Delete
                                    </button>
                                    <a href={`/books/edit/${book._id}`} className="text-blue-500 hover:text-blue-700 focus:outline-none">Edit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
