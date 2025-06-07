const Client = require('../models/client');
// const Client = require('../models/client');
const bcrypt = require('bcrypt');


// Ajouter un nouveau client
exports.addClient = async (req, res) => {
  try {
    const {firstname, lastname, email, mdp } = req.body;

    // Vérifiez si toutes les données nécessaires sont fournies
    if (!firstname || !lastname || !email || !mdp) {
      return res.status(400).json({ message: 'Veuillez remplir tous les champs requis.' });
    }

    // Vérifiez si un client avec le même email existe déjà
    const existingClient = await Client.findOne({ email });
    if (existingClient) {
      return res.status(400).json({ message: 'Un client avec cet email existe déjà.' });
    }

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(mdp, 10);
    const firstPart = firstname.slice(0, 2).toUpperCase();
    const lastPart = lastname.slice(0, 2).toUpperCase();
    const randomNumber = Math.floor(100 + Math.random() * 900); // Generate random 3-digit number
    const client_humanized_id = `CLI-${firstPart}${lastPart}-${randomNumber}`;
    // Créer un nouvel objet client
    const client = new Client({
      client_id: client_humanized_id,
      firstname,
      lastname,
      email,
      // numero,
      mdp: hashedPassword, // Remplacez "mdp" par le mot de passe haché
    });

    // Enregistrez le client dans la base de données
    await client.save();

    res.status(201).json({ message: 'Client ajouté avec succès', client });
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de l\'ajout du client', error: error.message });
  }
};

exports.getClientByName = async (req, res) => {
    try {
      // Récupérer le prénom et le nom de famille de la requête
      const { firstname } = req.params;
  
      // Trouver le client par son prénom et son nom de famille
      const client = await Client.findOne({ firstname });
  
      // Si le client est trouvé, renvoyer les informations
      if (client) {
        res.status(200).json(client);
      } else {
        res.status(404).json({ message: 'Client non trouvé' });
      }
    } catch (error) {
        //message d'erreur
      res.status(400).json({ message: 'Erreur lors de la récupération du client', error: error.message });
    }
  };

  exports.getClientById = async (req, res) => {
    try {
    // Get the client_id from the URL parameters
    const { client_id } = req.params;

    // Use the client_id to find the client (search by the custom client_id field)
    const client = await Client.findOne({ client_id: client_id });
  
      if (client) {
        res.status(200).json(client);  // Return the client if found
      } else {
        res.status(404).json({ message: 'Client non trouvé' });  // Client not found
      }
    } catch (error) {
      res.status(404).json({ message: 'Erreur lors de la récupération du client', error: error.message });
    }
  };

  //methode de log In
  exports.loginClient = async (req, res)=> {
    const {email, mdp} = req.body;
  
    try {
      const client = await Client.findOne({ email });

      if (!client) {
        return res.status(400).json({ error: 'Email ou mot de passe incorrect' });
      }
  
      const isMatch = await bcrypt.compare(mdp, client.mdp);

      if(!isMatch) {
        return res.status(400).json({message: 'mot de passe incorrecte.'});
      }
      const user = {
        client_id: client.client_id,
        firstname: client.firstname,
        lastname: client.lastname,
        email: client.email
      }
      // Stocke l'ID du client dans la session
      // req.session.clientId = client._id;

      res.status(200).json({ message: 'Connexion réussie', user });
      
    } catch (err) {
      res.status(500).json({ error: 'Une erreur est survenue. Veuillez réessayer plus tard.' });
    }
  }

  exports.deleteClient = async (req,res)=>{
    try{
      const { client_id } = req.params;
  
      // Use the client_id to find the client (search by the custom client_id field)
      const client = await Client.findOneAndDelete({ client_id: client_id });
  
      if(client){
        res.status(200).json({message:'client supprimed successfully'});
      }else{
        res.status(404).json({message:'client not suppressed'});
      }
    }catch(error){
      res.status(404).json({message:'Erreur lors de la suppression du client', error});
    }
  };

  exports.editClient = async (req, res) => {
    try {
      // Get the client_id from the URL parameters
      const { client_id } = req.params;
  
      // Use the client_id to find the client (search by the custom client_id field)
      const client = await Client.findOne({ client_id: client_id });
  
      if (!client) {
        return res.status(404).json({ message: 'Client non trouvé' });
      }
  
      // Get the updates from the request body
      const updates = req.body;
  
      // Update the client
      const updatedClient = await Client.findOneAndUpdate(
        { client_id: client_id },  // Find by client_id
        updates,                   // Update fields
        { new: true, runValidators: true }  // Options to return the updated client
      );
  
      res.status(200).json({ message: 'Client mis à jour avec succès', updatedClient });
    } catch (error) {
      res.status(400).json({ message: 'Erreur lors de la mise à jour du client', error: error.message });
    }
  };
  