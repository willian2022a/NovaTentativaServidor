
const express = require("express")
const app  = express()

const path = require("path")
const router = express.Router()



app.route("/").get( (req, res) => {
    res.json({nome: "teste"})
    
})

app.use(router)
app.listen(3000)

console.log("RODANDO SERVIDOR DE TESTE")