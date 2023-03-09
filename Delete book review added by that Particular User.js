const axios = require('axios');

// Method 8: Delete book review by registered user
async function deleteBookReview(reviewId) {
    try {
        const response = await axios.delete(`API endpoint for deleting book review by registered user/${reviewId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
