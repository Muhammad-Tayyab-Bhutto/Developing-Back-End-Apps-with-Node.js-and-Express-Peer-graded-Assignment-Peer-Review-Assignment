const axios = require('axios');

// Task 10: Get all books - Using async callback function
async function getAllBooks() {
  try {
    const response = await axios.get('API endpoint for getting all books');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}



