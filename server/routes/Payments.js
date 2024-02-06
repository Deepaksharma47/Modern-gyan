// Import the required modules
const express = require("express")
const router = express.Router()

const { buyCourseapi } = require("../controllers/Payments")
const { auth, isInstructor, isStudent, isAdmin } = require("../middlewares/auth")

// router.post("/capturePayment", auth, isStudent, capturePayment)
// router.post("/verifyPayment",auth, isStudent, verifyPayment)
// router.post("/sendPaymentSuccessEmail", auth, isStudent, sendPaymentSuccessEmail);
router.post("/buycourse", auth, isStudent, buyCourseapi )

module.exports = router