var Author = require('../models/author');

//THESE ARE ALL THE CALLBACK WE NORMALLY WOULD WRITE DOWN IN THE ROUTE PATHS.
//THEY ARE SIMPLY BETTER ORGANISED.
//List of all Authors

exports.author_list = function (req, res) {
    res.send("List not implemented")
}

//list of all functions we will need, associated with the different routes

exports.author_detail = function (req, res) {
    res.send("Not implemented: Author detail" + req.params.id)
}

exports.author_detail = function (req, res) {
    res.send("Not implemented: Author detail" + req.params.id)
}

exports.author_create_get = function (req, res) {
    res.send("Not implemented: Author create GET")
}

exports.author_create_post = function (req, res) {
    res.send("Not implemented: Author create POST")
}

exports.author_delete_get = function (req, res) {
    res.send("Not implemented: Author delet GET")
}

exports.author_delete_post = function (req, res) {
    res.send("Not implemented: Author delete POST")
}

exports.author_update_get = function (req, res) {
    res.send("Not implemented: Author update GET")
}

exports.author_update_post = function (req, res) {
    res.send("Not implemented: Author update POST")
}

