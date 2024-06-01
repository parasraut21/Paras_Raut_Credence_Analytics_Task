const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('../models/bookModel');

dotenv.config();

const seedData = async () => { 
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');

        const seedBooks = [
            {
                name: "Harry Potter and the Order of the Phoenix",
                img: "https://bit.ly/2IcnSwz",
                summary: "Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who, in turn, look to undermine Dumbledore's authority at Hogwarts and discredit Harry."
            },
            {
                name: "The Lord of the Rings: The Fellowship of the Ring",
                img: "https://bit.ly/2tC1Lcg",
                summary: "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed."
            },
            {
                name: "Avengers: Endgame",
                img: "https://bit.ly/2Pzczlb",
                summary: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America, and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe."
            }
        ];

        await Book.deleteMany({});
        console.log('Existing books deleted');
        await Book.insertMany(seedBooks);
        console.log('Data seeded');
    } catch (error) {
        console.error('Error seeding data:', error.message);
    } finally {
        console.log('Data seeded');
    }
};

module.exports = seedData; 
