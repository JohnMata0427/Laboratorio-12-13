// Importar la variable
import app from "./server.js";
import bdd from "./database.js";


app.listen(app.get('port'), ()=>console.log("Server on"))
bdd.then(() => {console.log("Database connected")}).catch(error => console.log("Failed connection"))