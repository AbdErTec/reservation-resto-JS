const express = require('express');
const tableController = require('../controllers/tableController');
const router = express.Router();

//route pour verifier la disponibilite
// router.post('/verifierDispo' , tableController.verifierDispo);

//route pour ajouter une table
router.post('/addTable' , tableController.addTable);

// get all tables
router.get('/getAllTables' , tableController.getAllTables);

//get table by id
router.get('/getTableById/:table_id' , tableController.getTableById);

//delete table
router.delete('/deleteTable/:table_id' , tableController.deleteTable);


module.exports = router;
