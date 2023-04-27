var mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

var Schema = mongoose.Schema;

var PlantillaSchema = new Schema({
    nom: { type: String, required: true },
    puntsOrdreDia: [{ type: String, required: true }],
    creador: { type: Schema.ObjectId, ref: "User", required: false }
  });
  
  PlantillaSchema.plugin(mongoosePaginate);

  module.exports = mongoose.model("Plantilla", PlantillaSchema);