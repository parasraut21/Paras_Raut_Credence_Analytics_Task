import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const EditBook: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [book, setBook] = useState<any | null>(null);
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [summary, setSummary] = useState('');

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/api/books/${id}`)
                .then(response => {
                    setBook(response.data);
                    setName(response.data.name);
                    setImg(response.data.img);
                    setSummary(response.data.summary);
                })
                .catch(error => {
                    console.error('Error fetching book:', error);
                });
        }
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/books/${id}`, { name, img, summary });
            alert('Book updated successfully');
        } catch (error) {
            console.error('Error updating book:', error);
            alert('Failed to update book');
        }
    };

    if (!book) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Edit Book</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="block w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:border-blue-500" required /><br />
                <input type="text" placeholder="Image URL" value={img} onChange={e => setImg(e.target.value)} className="block w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:border-blue-500" required /><br />
                <textarea placeholder="Summary" value={summary} onChange={e => setSummary(e.target.value)} className="block w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:border-blue-500" required /><br />
                <button type="submit" className="block w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">Update</button>
            </form>
        </div>
    );
};

export default EditBook;
