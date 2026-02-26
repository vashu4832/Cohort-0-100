const express = require("express");
const fs = require("fs/promises");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        msg: "You are on Home Route"
    })
})

async function getFile(fileDir) {
    try {
        const files = await fs.readdir(fileDir);
        return files;
    } catch (err) {
        console.error("Error reading directory ", err);
    }
}

app.get("/files", async (req, res) => {
    try {
        const result = await getFile(path.join(__dirname, '../HTTP-SERVER'));
        console.log(result);
        res.json({
            files: result
        })
    } catch (err) {
        res.status(500).json({
            error: "Failed to read directory"
        })
    }
});

app.get("/files/:filename", async (req, res) => {
    try{
        const fileName = req.params.filename;
        const filePath = path.join(__dirname, "../HTTP-SERVER", fileName);
        const data = await fs.readFile(filePath, "utf-8");
        res.json({
            content: data
        })
    } catch (err) {
        res.status(500).json({
            error: "File not found or cannot be read"
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`);
})

