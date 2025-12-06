import express from 'express'
import dotenv from 'dotenv'
import connectToDB from './config/connectToDb.js'
import categoryRouter from './Routers/CategoryRouter.js'

dotenv.config()

const app = express()
app.use(express.json())

connectToDB();


app.get("/", (req, res) => {
    return res.status(200).json({ message: "welcome to app" })
})
app.use("/categories",categoryRouter);

// Without using Router use this code
// app.post("/categories",CategoryController.createCategory)
// app.get("/categories",CategoryController.fetchCategories)
// app.get("/categories/:id",CategoryController.fetchCategoryById)
// app.delete("/categories/:id",CategoryController.deleteCategoryById)
// app.put("/categories/:id",CategoryController.updateCategoryById)

app.listen(process.env.PORT, () => {
    console.log(`App running: http://localhost:${process.env.PORT}`);

})
// npm i nodemon express dotenv mongoose