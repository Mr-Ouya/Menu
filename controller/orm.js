const db = require("../models");
var db = require("../models");
var Sequelize = require("sequelize");
var Op = Sequelize.Op;
var bcrypt = require("bcrypt");


module.exports = {

    //Looking at item or Food to eat
    findbyItem: function (req, res) {
        db.findAll({
            where: { item: req },
            include: [{
                model: Items

            }]
        })
            .then(items => res.json(items))
            .catch(err => res.status(422).json(err));
    },
    findbyCategory: function (req, res) {
        db.findAll({
            where: { categories: req }

        })
            .then(cat => res.json(cat))
            .catch(err => res.status(422).json(err));


    },

    findbyRatings: function (req, res) {
        db.findAll({
            where: {
                ratings: req
            }
        })
            .then(rat => res.json(rat))
            .catch(err => res.status(422).json(err))
    },
    findByResturant: function (req, res) {

        db.findAll({
            where: {

                resturants: req
            }
        })
            .then(res => res.json(res))
            .catch(err => res.status(422).json(err))
    },


    //////////////////

    //Looking at Resturant 

    findResturants: function (req, res) {
        db.findAll({
            where: { name = req },
            include: [{
                model: resturant

            }]
        })
            .then(resturant => res.json(resturant))
            .catch(err => res.status(422).json(err));
    },



    ///////////////////

    createFoodItem: function (req, res) {

        db.create(req.body)
            .then(itemC => res.json())
            .catch(err => res.status(422).json(err));

    },

    upDataFoodItem(req, res) {

        db.updateOne(req.body)
            .then(upItem => res.json())
            .catch(err => res.status(422).json(err))
    },

    createComment: function (req, res) {
        db.create({
            where: { name = req.body }
        })
            .then(resturant => res.json(resturant))
            .catch(err => res.status(422).json(err));

    },
    createComment: function (req, res) {
        db.updateOne({
            where: { name = req.body }
        })
            .then(resturant => res.json(resturant))
            .catch(err => res.status(422).json(err));

    }



    ///////////////////




    /////////////////////









}