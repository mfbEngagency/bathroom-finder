const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

// Routes //

// Add users

// Add bathroom
app.post("/bathrooms", async(req, res) => {
    try {
        const { name, description, confirmed_public, entry_key, requires_key, location  } = req.body;
        const newBathroom = await pool.query(
            "INSERT INTO bathrooms (name, description, confirmed_public, entry_key, requires_key, location) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
            [name, description, confirmed_public, entry_key, requires_key, location],
        );
        res.json(newBathroom.rows[0]);
    } catch (err) { 
        console.log(err.message);
    }
})

// update a bathroom
app.put("/bathrooms/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateBathroom = await pool.query("UPDATE bathrooms SET description = $1 WHERE bathroom_id = $2",
        [description, id]
        );
        res.json("bathroom was updated");
    } catch (err) {
        console.log(err.message);
    }
})

// get all bathrooms

app.get("/bathrooms", async(req, res) => {
    try {
        const allBathrooms = await pool.query(
            "SELECT * FROM bathrooms");
        res.json(allBathrooms.rows);
    } catch (err) {
        console.log(err.message); 
    }
})

// get bathroom 

app.get("/bathrooms/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const bathroom = await pool.query(
            "SELECT * FROM bathrooms WHERE bathroom_id = $1", [
            id
        ]);
        res.json(bathroom.rows[0]);
    } catch (err) {
        console.log(err.message); 
    }
})

// delete a bathroom 
app.delete("/bathrooms/:id",  async(req, res) => {
    try {
        const { id } = req.params;
        const deleteBathroom = await pool.query("DELETE FROM bathrooms WHERE bathroom_id = $1", 
        [id]
        );
        res.json("Bathroom was deleted");
    } catch (err) {
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
