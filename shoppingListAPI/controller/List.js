const listModel = require('../Models/List');


// Create and Save a new list
exports.create = (req, res) => {
    // Validate request
    if (!req.body.text) {
        return res.status(400).send({
            message: "list text can not be empty"
        });
    } else {

        // Create a list
        const list = new listModel({
            text: req.body.text,
        });

        // Save list in the database
        list.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "An error occurred while creating a list."
                });
            });
    }


};

exports.getAll = (req, res) => {
    listModel.find()
        .then(lists => {

            return res.send(lists);

        }).catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while returning list."
            });
        });
};

exports.delete = (req, res) => {
    var listId = req.params._id

    listModel.findByIdAndRemove(listId)
        .then(list => {
            if (!list) {
                return res.status(404).send({
                    message: "list not found with id " + listId
                });
            }
            //Delete success
            return res.status(200).send();
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "list not found with id " + listId
                });
            }
            return res.status(500).send({
                message: "Could not delete list with id " + listId
            });
        });
};

