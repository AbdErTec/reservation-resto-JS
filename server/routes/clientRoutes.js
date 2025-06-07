const express = require('express');
const clientController = require('../controllers/clientController');
const router = express.Router();

//route pur ajouter un nouveau client
router.post('/addClient' , clientController.addClient);

//route pour recuperer les clients 
// router.get('/getAllClients' , clientController.getAllClients);

//route pour recuperer les clients 
router.post('/loginClient' , clientController.loginClient);

//route pour recuperer les clients par le nom complet
router.get('/getClientByName/:firstname', clientController.getClientByName);

//route pour recuperer les clients par ID
router.get('/getClientById/:client_id' , clientController.getClientById);

//route supprimer un client 
router.delete('/deleteClient/:client_id' , clientController.deleteClient);

//route pour editer les informations du client
router.put('/editClient/:client_id' , clientController.editClient);

module.exports = router;
