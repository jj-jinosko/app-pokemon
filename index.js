import express from "express";
import axios from "axios";

const app = express();
const port = 3000;


app.use(express.static("public"));

// app.get("/", (req, res) => {
//     res.render("index.ejs")
// });

app.get("/", async (req, res) => {
    try {
        let response = await axios("https://pokeapi.co/api/v2/pokemon/35");
        console.log("name:", response.data.name);
        res.render("index.ejs", {
            name: response.data.name,
        })
    } catch {

    }
})

// app.post("/new", (req, res) => {

// })

app.listen(port, () => {
    console.log(`application listening on port ${port}`)
})