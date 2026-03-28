const getHero = (req, res) => {
  res.json({
    title: "GOBLINS",
    subtitle: "Lead Supercell",
    description: "Dynamic Data from Backend 🚀"
  });
};

module.exports = { getHero };
