import axios from "axios";

export default {
    // Gets all books
    getAllResturants: function () {
        return axios.get("/menu/resturant/");
    },
    // Gets the book with the given id
    getSearchName: function () {
        return axios.get("/menu/resturant/search");
    },
    // Deletes the book with the given id
    getItemSelf: function (id) {
        return axios.delete("/menu/resturant/" + name);
    },
    // Saves a book to the database
    getCateogory: function (category) {
        return axios.post("/menu/foods/resturant/getMenu" + name);
    }
};
