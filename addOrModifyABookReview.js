const axios = require('axios');

// Method 7: Add/Modify book review by registered user
async function addOrModifyBookReview(reviewData) {
    try {
        const response = await axios.post('API endpoint for adding/modifying book review by registered user', reviewData);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
