const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  table_id: {
    type: Number,
    required: true,
    unique: true,
  },
  table_capacity: {
    type: Number,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  // table_menu:{type: String , required: true},
  // zone:{type: String, required: true},
});

// tableSchema.statics.verifierDispo = async function (table_id, date, Time) {
//   const reservations = await this.model('Reservation').find({
//     table_id: table_id,
//     date: date,
//     Time: Time,
//   });

//   // Si aucune réservation n'existe pour ce créneau, la table est disponible
//   return reservations.length === 0;
// };

module.exports = mongoose.model("Tbl", tableSchema);
