const axios = require('axios');

// Method 5: Register new user
async function registerNewUser(userData) {
    try {
        const response = await axios.post('API endpoint for registering new user', userData);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
