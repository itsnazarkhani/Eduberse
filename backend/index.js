const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
});

const PORT = 5000;
app.listen(PORT,  () => {
    console.log(`🚀 Server running at:`);
    console.log(`   Local:   http://localhost:${PORT}`);
});