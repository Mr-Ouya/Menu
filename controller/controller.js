const db = require("../models");
var db = require("../models");
var Sequelize = require("sequelize");
var Op = Sequelize.Op;



module.exports = {

    //Looking at item or Food to eat
    SearchItems: function (req, res) {
        db.items
            .findAll(req.body, {

                include: {
                    model: Items
                }
            })
            .then(items => res.json(items))
            .catch(err => res.status(422).json(err));
    },
    getItem: function (req, res) {
        db.items
            .find(req.params.id, {
                where: {
                    id: id
                },
                include: [{
                    model: Items
                }]
            })
            .then(cat => res.json(cat))
            .catch(err => res.status(422).json(err));
    }
}
////////////////////////////////

/*
    findbyRatings: function (req, res) {
        db.findAll({
            where: {
                ratings: req
            },
            include: [{
                model: Items
            }]

        })
            .then(rat => res.json(rat))
            .catch(err => res.status(422).json(err))
    },








    findByResturant: function (req, res) {

        db.findAll({
            where: {

                resturants: req
            },
            include: [{
                model: Items
            }]
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

        db.create(req.body)({
            include: [{
                model: Items

            }]

        })


            .then(itemC => res.json(itemC))
            .catch(err => res.status(422).json(err));

    },

    upDataFoodItem(req, res) {

        db.updateOne(req.body)({
            include: [{
                model: Items

            }]

        })
            .then(upItem => res.json(upItem))
            .catch(err => res.status(422).json(err))
    },

    createReview: function (req, res) {
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









*/