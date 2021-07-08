const router = require('express').Router();
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza,
} = require('../../controllers/pizza-controller');

//GET all and POST
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

//Set up Get one, PUT, and DELETE
router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

module.exports = router;
