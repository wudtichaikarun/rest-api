import express from 'express'
import fs from 'fs'
import bodyParser from 'body-parser'

//for call folder app
function setupRoutes(app){
    const APP_DIR = `${__dirname}/app`
    const features = fs.readdirSync(APP_DIR).filter(
        file => fs.statSync(`${APP_DIR}/${file}`).isDirectory()
    )

    features.forEach(feature => {
        const router = express.Router()
        const routes = require(`${APP_DIR}/${feature}/routes.js`)

        routes.setup(router)
        app.use(`/${feature}`, router)// --->/users
    })
}

export function setup () {
const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({  extended: true }))
app.use(bodyParser.json());

//old route
// app.get('/', (req, res) => {
//     res.send("hello romantic")
// })

//new route
setupRoutes(app)

app.listen(PORT, () =>
    console.log('App listenning on http://localhost:'+PORT)
 )
}