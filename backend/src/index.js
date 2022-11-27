import app from "./infra/server/server.js"
import db from "./infra/database/db.js"

const port = 8080;

(async () => {
    const database = db;

    try {
        await database.sync();
        console.log("Database okay")
    } catch (error) {
        console.log(error);
    }
})();


app.listen(port, () => {
    console.log(`Rocket server at port ${port}`)
})