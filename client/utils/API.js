const dotenv = require("dotennv");
const axios = require("axios");

export default {
    searchByKeyword: function(keyword) {
        // return axios.get(API KEY HERE)
    },

    searchByKeywordAndAuthor: function(keyword, author) {
            // return axios.get(API KEY HERE)
            // key=API_KEY 
    },

    getBooks: function() {
        return axios.get("/api/books");
    },

    addBook: function(data) {
        return axios.post("/api/books", data);
    },

    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
}