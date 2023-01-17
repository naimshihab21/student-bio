import express from "express"
import bodyParser from "body-parser"
import { router as indexRouter } from "./routes/index.js"
import { router as majorsRoutes } from "./routes/majorsRoutes.js"
import { router as addPageRoutes } from "./routes/addPageRoute.js"
import { router as updateRoutes } from "./routes/updateStudentRoute.js"
import { config } from "dotenv"
config()

const app = express()
const port = process.env.PORT_SERVER

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', indexRouter)
app.use('/majors', majorsRoutes)
app.use('/add', addPageRoutes)
app.use('/update', updateRoutes)

app.use('/', (req, res) => res.status(404).send('<h1>404 - Page Not Found!</h1>'))

app.listen(port, () => console.log(`Server is listening on port ${port}`))