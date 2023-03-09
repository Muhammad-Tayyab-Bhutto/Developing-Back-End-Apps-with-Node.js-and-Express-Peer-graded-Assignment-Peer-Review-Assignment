const axios = require('axios');

// Task 12: Search by Author
async function searchByAuthor(author) {
    try {
        const response = await axios.get(`API endpoint for getting all books by author/${author}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}