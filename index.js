import express from "express";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        const username = result.data.username;
        const secretMessage = result.data.secret;
        res.render("index.ejs", { secret: secretMessage, user: username });
    } catch (error) {
        console.log("Error:" + error.message);
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
