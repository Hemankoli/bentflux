import express from "express";
const router = express.Router();
import sendEmail from "../controller/controller.js";

router.post("/contact-us", sendEmail);

export default router;