const express = require('express');
const router = express.Router();
const Movies = require("../models/Movie.model")



/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", async (req, res) => {
    const movies = await Movies.find(req.params)
    res.render("movies", { movies })
})




module.exports = router;
