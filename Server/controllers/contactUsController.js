const ContactUs =require('../models/Contact');



const postContactUsData= async (req, res) => {
  
    const { name, email, phone, message } = req.body;
  
    try {
      const contactMessage = new ContactUs({
        name,
        email,
        phone,
        message,
      });
  
      // Save the contact message to the database
      await contactMessage.save();
  
      // Return a success response
      res.status(200).json({ message: "Contact message sent successfully!" });
    } catch (error) {
      res.status(500).json({ error: "Failed to send contact message." });
    }
  }



  module.exports = {postContactUsData};
