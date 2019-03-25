const db = require("../models")
var Sequelize = require("sequelize");
var Op = Sequelize.Op;
var bcrypt = require("bcrypt")
const operatorsAliases = {
    $like: Op.like
}

module.exports = {
    /**********************************
     * LOOKING AT ITEM OR FOOD TO EAT *
     **********************************/
    getAll: function (req, res) {
        console.log("test");
        db.Items
            .findAll({})
            .then(function (info) { res.json(info) })
            .catch(function (err) { res.status(422).json(err) })
    },
    SearchItems: function (req, res) {
        db.Items
            .findAll({
                where: {
                    item: {
                        $like: '%' + req.params.name + "%",

                    },
                },

            })
            .then(function (info) { res.json(info) })
            .catch(function (err) { res.status(422).json(err) })
    },
    getItem: function (req, res) {
        db.Items
            .findOne({
                where: {
                    item: req.params.name,

                    ResturantId: req.params.resturant
                }
            })
            .then(function (info) { res.json(info) })
            .catch(function (err) { res.status(422).json(err) })
    },
    getCategoryItems: function (req, res) {
        db.Items
            .findAll(req, params.category, {
                where: {
                    category: category
                },
                include: [itemB]

            })
            .then(function (info) { res.json(info) })
            .catch(function (err) { res.status(422).json(err) })
    },
    /***************************************
     * USERS AND ACCOUNTS LOGIN AND SIGNUP *
     ***************************************/
    createAccount: function (req, res) {
        var saltRounds = 10;
        console.log(req.body);
        bcrypt.genSalt(saltRounds, function (err, salt) {
            console.log(req.body.password);
            if (err) throw err
            bcrypt.hash(req.body.password, salt, function (err, hash) {
                if (err) throw err;
                var newaccount = {
                    username: req.body.username,
                    email: req.body.email,
                    password: hash
                }
                db.Account.create(newaccount).then(function (data) {
                    res.redirect("/")
                })
            })
        })
    },

    loginAccount: function (req, res) {

        var username = request.body.username;
        var password = request.body.password;

        if (username && password) {
            db.Account.findAll({
                where: {
                    username: username,
                    // password: password
                }
            }).then(function (results) {
                if (!results) {
                    res.redirect('/');
                } else {
                    bcrypt.compare(password, results[0].dataValues.password, function (err, results) {
                        if (err) throw err;
                        if (results == true) {
                            request.session.loggedin = true;
                            request.session.username = username;
                            response.redirect('/');

                        } else {
                            response.send("Incorrect Password or Username");
                        }
                    })
                }
            })
        }
    },
    /***********************
     * RESTURANTS AND MENU *
     ***********************/
    getAllResturants: function (req, res) {
        db.Resturants.findAll({})
            .then(function (info) { res.json(info) })
            .catch(function (err) { res.status(422).json(err) })
    },
    SearchResturant: function (req, res) {
        db.Resturants.findAll({
            where: {
                name: { $like: '%' + req.params.name + "%", }

            }
        })
            .then(function (info) { res.json(info) })
            .catch(function (err) { res.status(422).json(err) })
    },
    findResturant: function (req, res) {
        db.Resturants.find({
            //            where: { name = req.params.name },
            include: [restItem]
        }).then(function (info) { res.json(info) })
            .catch(function (err) { res.status(422).json(err) })
    },

    getResturantMenu: function (req, res) {

        db.findAll({

            where: {}
        })

    },
    /******************
     * CREATING ITEMS *
     ******************/
    createItem: function (req, res) {
        db.Resturants.find({
            where: {
                name: {
                    name: name.body.resturant
                }

            }
        }).then(function (restF) {

            itemCreation = {};

            itemCreation.item = req.body.item;
            itemCreation.information = req.body.information;
            itemCreation.categories = req.body.category;
            itemCreation.price = req.body.price;
            itemCreation.createdBy = req.body.createdBy

            db.Items.create({ itemCreation })
                .then(function (info) { res.json(info) })
                .catch(function (err) { res.status(422).json(err) })

        })

    },





    /************************
     * UPDATING INFORMATION *
     *          /*          *
     ************************/

    UpdateInfoRest: function (req, res) {
        db.item.find({
            where: {
                item: req.body.resturant
            }

        }).then(function (restF) {
            itemCreation = {}
            itemCreation.item = req.body.item;
            itemCreation.information = req.body.information;
            itemCreation.categories = req.body.category;
            itemCreation.price = req.body.price;
            itemCreation.createdBy = req.body.created
            db.Items.update({ itemCreation },
                { where: restF.id }
            )
                .then(function (info) { res.json(info) })
                .catch(function (err) { res.status(422).json(err) })

        })

    },





    /***********************
     * SORTING INFORMATION *
     ***********************/


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





    /*
    
    
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
    
        // findResturants: function (req, res) {
        //     db.findAll({
        //         where: { name = req.params.name },
        //         include: [{
        //             model: resturant
    
        //         }]
        //     })
        //         .then(resturant => res.json(resturant))
        //         .catch(err => res.status(422).json(err));
        // },
    
    
    
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
                where: { name: req.body.name }
            })
                .then(resturant => res.json(resturant))
                .catch(err => res.status(422).json(err));
    
        },
        createComment: function (req, res) {
            db.updateOne({
                where: { name: req.body }
            })
                .then(resturant => res.json(resturant))
                .catch(err => res.status(422).json(err));
    
        }
    
    
    
        ///////////////////
    
    
    
    
        /////////////////////
    
    
    
    
    
    
    */
}

