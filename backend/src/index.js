import app from "./infra/server/server.js"

const port = 8080;

app.listen(port, () => {
    console.log(`Rocket server at port ${port}`)
})