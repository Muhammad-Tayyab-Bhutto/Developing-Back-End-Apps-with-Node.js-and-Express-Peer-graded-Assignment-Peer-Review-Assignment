const axios = require('axios');
// Method 4: Get all books by title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`API endpoint for getting all books by title/${title}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}