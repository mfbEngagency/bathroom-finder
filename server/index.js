const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

// Routes //

// Add user

// Add bathroom
app.post("/bathrooms", async(req, res) => {
    try {
        const { description } = req.body;
        const newBathroom = await pool.query(
            "INSERT INTO bathrooms (description) VALUES($1) RETURNING *",
            [description]
        );
        res.json(newBathroom.rows[0]);

    } catch (err) {
        console.log(err.message);
    }
})

// get all bathrooms

app.get("/bathrooms", async(req, res) => {
    try {
        const allBathrooms = await pool.query("SELECT * FROM bathrooms");
        res.json(allBathrooms.rows);
    } catch (error) {
        console.log(err.message); 
    }
})

// Add user bathroom

// Add features

// Add bathroom details

// Add user ratings

app.listen(5000, () => {
    console.log("server has started on port 5000");
});
