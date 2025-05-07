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