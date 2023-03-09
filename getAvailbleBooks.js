const axios = require('axios');

// Method 1: Get all books available in the shop
async function getAllBooks() {
  try {
    const response = await axios.get('API endpoint for getting all books');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}






