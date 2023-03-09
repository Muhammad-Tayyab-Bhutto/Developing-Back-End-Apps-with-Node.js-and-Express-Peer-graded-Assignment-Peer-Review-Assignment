const axios = require('axios');
// Method 3: Get all books by author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`API endpoint for getting all books by author/${author}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}