const { Guide } = require('../models');

// Controller to fetch all guides
exports.getAllGuides = async (req, res) => {
  try {
    const guides = await Guide.findAll();
    res.status(200).json(guides);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to fetch guide by ID
exports.getGuideById = async (req, res) => {
  const { id } = req.params;
  try {
    const guide = await Guide.findByPk(id);
    if (!guide) {
      return res.status(404).json({ error: 'Guide not found' });
    }
    res.status(200).json(guide);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
