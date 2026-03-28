const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// مهم: يخلي السيرفر يقرأ الملفات من public
app.use(express.static("public"));

// الصفحة الرئيسية
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
