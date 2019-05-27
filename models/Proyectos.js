const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProyectosSchema = new Schema({
    name: { type: String, lowercase: true , required: true },
    technologies:  { type: String , required: true },
    github: { type: String , required: true },
    link:  { type: String , required: true },
    description:   { type: String , required: true },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Proyectos', ProyectosSchema);
