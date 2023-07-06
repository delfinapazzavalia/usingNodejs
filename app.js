const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/base_personas ";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then((db) => console.log('DB is connected'))
.catch((err) => console.error(err));

const personasSchema = new mongoose.Schema({
	nombre: String,
	edad: Number,
	profesión: String,
}, {versionKey: false}); 

const PersonasModel = mongoose.model("personas", personasSchema); 

//CRUD

//READ

// const mostrarDatos = async () => {
//     const personas = await PersonasModel.find();
//     console.log(personas);
// };
// mostrarDatos(); 

//CREATE

// const createPersona = async () => {
//     const persona = new PersonasModel({
//         nombre: "Juan",
//         edad: 25,
//         profesión: "scrum master",
// });
//     const personaNueva = await persona.save();
//     console.log(personaNueva);
// }; 
// createPersona();

//UPDATE

// const actualizarPersona = async (id) => {
//     const persona = await PersonasModel.updateOne({_id: id}, {
//         $set: {
//             nombre: "Pedro",
//             edad: 22,
//             profesión: "ux designer",
//             }
//     });
//         console.log(persona);
// };
// actualizarPersona('63644af901663f1b11b72e08'); 

//DELETE

// const eliminarPersona = async (id) => {
//     const persona = await PersonasModel.deleteOne({_id: id});
//     console.log(persona);
// };
// eliminarPersona('63644af901663f1b11b72e08');
