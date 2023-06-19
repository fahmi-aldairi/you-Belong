const AboutUs =require('../models/AboutUs');



const getAboutUsUpdate = async (req, res) => {
    try {

        const aboutUsData = await AboutUs.findOne();
        res.json(aboutUsData);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Error fetching data" });
    }
}



const aboutUsUpdate = async (req, res) => {
    try {
        const { about_title, about_us } = req.body;

        let aboutUsData = await AboutUs.findOne();

        if (!aboutUsData) {
            aboutUsData = new AboutUs({
                about_title,
                about_us,
            });
        } else
         {
            aboutUsData.about_title = about_title;
            aboutUsData.about_us = about_us;
        }

        await aboutUsData.save();

        res.json(aboutUsData);
    } catch (error) {
        console.error("Error updating data:", error);
        res.status(500).json({ error: "Error updating data" });
    }
}










module.exports = { getAboutUsUpdate ,aboutUsUpdate};



