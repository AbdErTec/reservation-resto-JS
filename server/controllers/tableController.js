const Tbl = require('../models/table');
const Reservation = require('../models/reservation');
let tables = [
  { table_id: 1, table_capacity: 4, startTime: new Date('2024-12-25T12:00:00'), endTime: new Date('2024-12-25T16:00:00'),},
  { table_id: 2, table_capacity: 2, startTime: new Date('2024-12-25T12:00:00'), endTime: new Date('2024-12-25T16:00:00'), }
];

//verifier dispo
  // exports.verifierDispo = async (tableId, Date, Time) =>{
  //   try {
  //     // Obtenir la table spécifique
  //     const table = await Table.findById(tableId);
  //     if (!table) {
  //       throw new Error('Table non trouvée');
  //     }
      
  //     // Convertir la date et l'heure de réservation en un objet Date
  //     const reservationDateTime = new Date(`${reservationDate}T${reservationTime}:00`);  // Format "YYYY-MM-DDTHH:mm:ss"
  
  //     // Récupérer toutes les réservations pour la date donnée
  //     const reservations = await Reservation.find({
  //       date: reservationDate,  // Vérifier les réservations sur cette date
  //     });
  
  //     // Vérifier si la table est réservée pendant la période demandée
  //     for (let reservation of reservations) {
  //       // Convertir les heures de début et de fin de la réservation en objets Date
  //       const reservationStart = new Date(`${reservation.date}T${reservation.time}:00`);
  //       const reservationEnd = new Date(reservationStart);
  //       reservationEnd.setHours(reservationStart.getHours() + 1);  // Assumer que la réservation dure 1 heure (à ajuster si nécessaire)
  
  //       // Vérifier si la table est réservée pendant l'heure de la réservation
  //       if (
  //         (reservationStart <= reservationDateTime && reservationDateTime < reservationEnd) ||  // Réservation commence avant l'heure demandée
  //         (reservationStart < reservationDateTime && reservationDateTime < reservationEnd)    // Réservation commence après l'heure demandée
  //       ) {
  //         return false;  // La table est réservée à cette heure
  //       }
  //     }
  
  //     return true;  // La table est disponible à ce moment-là
  //   } catch (err) {
  //     console.error('Erreur lors de la vérification de la disponibilité :', err);
  //     return false;
  //   }
  // };
  
// Ajouter une nouvelle table
exports.addTable = async (req, res) => {
  try {
    const table = new Tbl(req.body);
    await table.save();
    res.status(201).json({ message: 'Table ajoutée avec succès', table });
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de l\'ajout de la table', error });
  }
};

// Afficher toutes les tables
exports.getAllTables = async (req, res) => {
  try {
    const tables = await Tbl.find();
    res.status(200).json(tables);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la récupération des tables', error });
  }
};

exports.getTableById = async (req , res) =>{
  try{  
    const { table_id } = req.params;
    const table = await Tbl.findOne({ table_id: table_id});
    if(table){
      res.status(200).json(table);
    }else{
      res.status(404).json({ message: 'Table non trouvée' });
    }
  }catch(error){
    res.status(400).json({ message: 'Erreur lors de la récupération de la table', error });
  }
};

exports.deleteTable = async (req , res) =>{
  try{
    const { table_id } = req.params;
    const table = await Tbl.findOneAndDelete({ table_id: table_id});
    if(table){
      res.status(200).json({ message: 'Table supprimée avec succès' });
    }else{
      res.status(404).json({ message: 'Table non trouvée' });
    }
  }catch(error){
    res.status(400).json({ message: 'Erreur lors de la suppression de la table', error });
  }
};
