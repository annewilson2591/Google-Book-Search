const dotenv = require("dotennv");
dotenv.config();
const axios = require("axios");

export default {
    searchByKeyword: function(keywords) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${keywords}&key=${process.env.key}`);
    },

    searchByKeywordAndAuthor: function(keywords, author) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${keywords}+inauthor:${author}&key=${process.env.key}`);
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