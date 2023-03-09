const axios = require('axios');

// Task 13: Search by Title
async function searchByTitle(title) {
    try {
        const response = await axios.get(`API endpoint for getting all books by title/${title}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}