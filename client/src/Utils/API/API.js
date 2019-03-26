import axios from "axios";

export default {
    // Gets all books
    getAllFoods: function () {
        return axios.get("/menu/foods/");
    },
    // Gets the book with the given id
    getSearchName: function (name) {
        return axios.get("/menu/foods/" + name);
    },
    // Deletes the book with the given id
    getItemSelf: function (id) {
        return axios.delete("/menu/foods/" + id);
    },
    // Saves a book to the database
    getCateogory: function (category) {
        return axios.post("/menu/foods/cateogry/" + category);
    }
};
