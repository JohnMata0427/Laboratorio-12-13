import app from "./server.js";
import bdd from "./database.js";

const port = app.get('port');

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));

bdd.then(() => console.log("MongoDB database connected"))
    .catch(error => console.log(`Failed connection\n Error: ${error}`))