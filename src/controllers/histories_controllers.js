const History =  require('../models/histories_model.js');

const GetHistory = async (req, res) => {
  const { user_id } = req.params;
  try {
    const histories = await History.find({ user_id });
    const items = histories.map((history) => history.items).flat();
    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = {GetHistory};