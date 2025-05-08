/**
 * Webbtjänst MongoDB och express
 * Moment 3 - Del 2
 * Av: Caroline Jungefalk Palmgren
 */

//Importera paket
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//Initiera express
const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(cors());
app.use(express.json());

//Anslut till MongoDB-databas via Atlas
mongoose.connect("mongodb+srv://cjungefalk:hlxjUix394rfTh6O@cluster0.km6kdwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("Ansluten till databas")
}).catch((error) => {
    console.error("Det gick inte att ansluta till databasen" + error)
});

//Routes

//get
app.get("/work_experience", (req, res) => {
    res.json({ message: "Hämta alla poster" })
});

//get - med id
app.get("/work_experience/:id", (req, res) => {
    res.json({ message: "Hämta data baserat på id" })
});

//post
app.post("/work_experience", (req, res) => {
    res.json({ message: "Lägg till post" })
});

//put
app.put("/work_experience/:id", (req, res) => {
    res.json({ message: "Uppdatera post baserat på id" })
});

//delete
app.delete("/work_experience/:id", (req, res) => {
    res.json({ message: "Ta bort post baserat på Id" })
})

//Starta server
app.listen(port, () => {
    console.log("Server running on port " + port)
});