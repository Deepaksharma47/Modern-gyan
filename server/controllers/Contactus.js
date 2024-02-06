const mailSender = require("../utils/mailSender");
const contactUsTemplate = require("../email/template/contactUsTemplate")


exports.contactUs = async( req, res) => {
    try{
        const {firstName, lastName, phoneNo, email, message} = req.body;
        const mailResponce = await mailSender("ds9999106554@gmail.com", firstName +" "  + lastName +"this person trying to contact us",
        contactUsTemplate(email,firstName, lastName, message, phoneNo) );

        if(!mailResponce){
            return res.status(400).json({
                success:false,
                meesage:"problem in contact to the team"
            })
        }
        
        return res.status(200).json({
            success:true,
            message:"Mail send successfully",
            mailResponce
        })

    } catch(error){
        return res.status(500).json({
            success:false,
            message:"Facing problem in sendin your message"
        })
    }
}