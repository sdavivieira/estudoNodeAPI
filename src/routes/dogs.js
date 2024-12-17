const express = require('express');
const DogsController = require('../controllers/dogs');
const controller = new DogsController

const router = express.Router();

router.get('/api/getAll', controller.GetAll);
router.get('/api/getById/:id', controller.GetById);
router.post('/api/update/dog', controller.Update)
router.put('/api/update/dog/:id', controller.UpdateById)
router.delete('/api/delete/:id', controller.Delete)
module.exports = router;