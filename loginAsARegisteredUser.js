const axios = require('axios');

// Method 6: Login as registered user
async function loginRegisteredUser(credentials) {
    try {
        const response = await axios.post('API endpoint for logging in as registered user', credentials);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
