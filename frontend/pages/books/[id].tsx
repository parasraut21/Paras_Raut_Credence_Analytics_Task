import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const BookDetail: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [book, setBook] = useState<any | null>(null);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/api/books/${id}`)
                .then(response => {
                    setBook(response.data);
                })
                .catch(error => {
                    console.error('Error fetching book:', error);
                });
        }
    }, [id]);

    if (!book) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-lg mx-auto">
                <h1 className="text-3xl font-bold mb-6">{book.name}</h1>
                <img src={book.img} alt={book.name} className="mb-6 rounded-lg shadow-lg" />
                <p className="text-lg mb-6">{book.summary}</p>
                <a href="/" className="text-blue-500 hover:underline">Back to Home</a>
            </div>
        </div>
    );
};

export default BookDetail;
