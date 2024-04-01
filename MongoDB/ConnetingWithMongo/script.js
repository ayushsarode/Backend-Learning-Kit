const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/MoviesData").then(() => {
    console.log("Connected to MongoDB succesfully")
}).catch((err) => {
    console.log(err);
})



const Datainsertion = mongoose.Schema({
    name: String,
    Genre: String
})

const Movie = mongoose.model("MoviesData", Datainsertion)

// single doc insert
const BollywoodMovie = async () => {
    try {
        const Bollywood = new Movie({
            name: "Rockstar",
            Genre: "Triller"
        })
        await Bollywood.save();
    } catch (err) {
        console.log(err);
    }

    BollywoodMovie()


    const MultipleInsert = async () => {
        try {
            const Anime = new Movie({

                name: "Your name",
                Genre: "Fantasy"
            })

            const Hollywood = new Movie({
                name: "Inglorious Bastard",
                Genre: "History"
            })
            const Tollywood = new Movie
            const result = await Movie.insertMany([Anime, Hollywood])
            console.log(result);
        } catch (err) {
            console.log(err);
        }

    }

    MultipleInsert()

    // Start the server
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
