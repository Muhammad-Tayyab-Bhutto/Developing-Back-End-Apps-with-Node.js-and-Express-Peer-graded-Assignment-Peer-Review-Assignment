const axios = require('axios');

// Task 11: Search by ISBN - Using Promises
function searchByISBN(isbn) {
    return axios.get(`API endpoint for getting book by ISBN/${isbn}`)
        .then(response => response.data)
        .catch(error => console.error(error));
}