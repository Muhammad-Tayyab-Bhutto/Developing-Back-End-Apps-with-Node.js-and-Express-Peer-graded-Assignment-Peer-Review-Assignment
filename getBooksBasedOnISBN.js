const axios = require('axios');
// Method 2: Get book by ISBN
async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(`API endpoint for getting book by ISBN/${isbn}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}