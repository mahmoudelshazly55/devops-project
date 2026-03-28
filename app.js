const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// مهم: يخلي السيرفر يقرأ الملفات من public
app.use(express.static("public"));

// الصفحة الرئيسية
app.get("/api/hero", (req, res) => {
  res.json({
    title: "GOBLINS",
    subtitle: "Lead Supercell",
    description: "Join millions of players worldwide and build your village!"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
