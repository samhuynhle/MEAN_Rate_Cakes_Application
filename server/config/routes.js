const controller = require('../controller/controller.js');

module.exports = (app) => {
    app.get('/cakes', controller.get_all)
    app.get('/cakes/:id', controller.get_one)
    app.post('/cakes', controller.new_cake)
    app.post('/cakes/:id', controller.new_rating)
    app.delete('/cakes/:id', controller.delete_cake)
}