const Cake = require('../models/cakes.js');

module.exports = {
    get_all: (req, res) => {
        Cake.find()
            .then(cakes => res.json(cakes))
            .catch(err => res.json(err));
    },
    get_one: (req, res) => {
        Cake.findOne({_id: req.params.id})
            .then(cake => res.json(cake))
            .catch(err => res.json(err));
    },
    new_cake: (req, res) => {
        console.log(req.body);
        Cake.create(req.body)
            .then((new_cake) => {
                res.json(new_cake);
                console.log('Cake Created!')
            })
            .catch(err => res.json(err));
    },
    new_rating: (req, res) => {
        Cake.update({_id: req.params.id}, {$push: {reviews: req.body}}, {runValidators: true})
            .then((data) => {
                res.json(data);
                console.log(req.body.reviews);
            })
            .catch(err => res.json(err));
    },
    delete_cake: (req, res) => {
        Cake.remove({_id: req.params.id})
            .then((data) => {
                console.log(`Cake has been removed!`);
            })
            .catch(err => res.json(err));
    }
}
