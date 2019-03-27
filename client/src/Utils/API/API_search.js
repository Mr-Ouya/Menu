import axios from "axios";

export default {
    // Gets all books
    getLocal: function (local) {
        return axios.get("/menu/search/" + local);
    },
    // Gets the book with the given id
    getLocalFoodtype: function (local, foodtype) {
        return axios.get("/menu/serach/" + local + "/" + foodtype);
    },
    // Deletes the book with the given id
    getLocalFoodtypePrice: function (local, foodtype, price) {
        return axios.get("/menu/serach/" + local + "/" + foodtype + "/" + price);
    },
    // Saves a book to the database
    getLocalFoodtypePriceRating: function (local, foodtype, price, rating) {
        return axios.get("/menu/serach/" + local + "/" + foodtype + "/" + price + "/" + rating);
    },

};
