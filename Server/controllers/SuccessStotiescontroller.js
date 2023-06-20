const Success = require("../models/SuccessStories");

const handleNewStory = async (req, res) => {
  const { title, description, image } = req.body;
  const newStory = new Success({
    title: title,
    description: description,
    image: image,
  });

  newStory
    .save()
    .then(() => {
      res.status(200).send("Saved");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error registering user");
    });
};

const getAllStories = async (req, res) => {
  try {
    const allData = await Success.find();
    res.status(200).json(allData);
    // console.log(allData);
  } catch (err) {
    console.log("Error retrieving data:", err);
    res.status(500).json({ err: "An error occurred while getting data" });
  }
};

const handleUpdateSuccess = async (req, res) => {
  try {
    const { StoryId, title, description, image } = req.body;
    console.log(StoryId);
    const updateStory = await Success.findOneAndUpdate(
      { _id: StoryId },
      {
        $set: {
          title: title,
          description: description,
          image: image,
        },
      },
      { new: true }
    ).exec();

    if (updateStory.deletedCount === 0) {
      return res.status(204).json({ message: `story ID ${userId} not found` });
    }

    return res.send("story is Updated");
  } catch (error) {
    // Handle any errors that occur during the database query
    return res.status(500).json({ message: "Error retrieving story data" });
  }
};

module.exports = {
  getAllStories,
  handleUpdateSuccess,
  handleNewStory,
};
