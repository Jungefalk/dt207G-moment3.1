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

//Schema
const WorkExperienceSchema = new mongoose.Schema({
    company_name: {
        type: String,
        required: [true, "Skicka med namn på företag"]
    },
    job_title: {
        type: String,
        required: [true, "Skicka med jobbtitel"]
    },
    start_date: {
        type: Date,
        required: [true, "Skicka med startdatum"]
    },
    end_date: {
        type: Date,
        required: false
    },
    description: {
        type: String,
        required: [true, "Skicka med arbetsbeskrivning"]
    }
});

//Model
const WorkExperience = mongoose.model("WorkExperience", WorkExperienceSchema);

//Anslut till MongoDB-databas via Atlas
mongoose.connect("mongodb+srv://cjungefalk:hlxjUix394rfTh6O@cluster0.km6kdwr.mongodb.net/cv?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("Ansluten till databas")
}).catch((error) => {
    console.error("Det gick inte att ansluta till databasen" + error)
});

//Routes

//get
app.get("/work_experience", async (req, res) => {
    try {
        let result = await WorkExperience.find({});

        return res.json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

//get - med id
app.get("/work_experience/:id", async (req, res) => {
    try {

        let result = await WorkExperience.findById(req.params.id)
        return res.json(result);

    } catch (error) {
        return res.status(500).json(error);
    }
});

//post
app.post("/work_experience", async (req, res) => {

    try {
        let result = await WorkExperience.create(req.body);
        return res.json(result);
    } catch (error) {
        return res.status(400).json(error)
    }
});

//put
app.put("/work_experience/:id", async (req, res) => {

    try {
        let result = await WorkExperience.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(result)

    } catch (error) {
        return res.status(400).json(error)
    }

});

//delete
app.delete("/work_experience/:id", async (req, res) => {

    try {
        let result = await WorkExperience.findByIdAndDelete(req.params.id)
        return res.json(result)
    } catch (error) {
        return res.status(500).json(error);
    }
})

//Starta server
app.listen(port, () => {
    console.log("Server running on port " + port)
});