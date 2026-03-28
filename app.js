const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// static files
app.use(express.static("public"));

// routes
const heroRoutes = require("./routes/hero");
app.use("/api/hero", heroRoutes);

// homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


