import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const DeleteBook: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            axios.delete(`http://localhost:5000/api/books/${id}`)
                .then(() => {
                    alert('Book deleted successfully');
                    router.push('/');
                })
                .catch(error => {
                    console.error('Error deleting book:', error);
                    alert('Failed to delete book');
                });
        }
    }, [id, router]);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-center mb-4">Deleting Book</h1>
                <p className="text-gray-700 text-center">Please wait while the book is being deleted...</p>
            </div>
        </div>
    );
};

export default DeleteBook;
