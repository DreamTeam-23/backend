
import express from "express"
import { createUserMessage } from "../controllers/userController"

const usermessages = express.Router()

usermessages.route('/').post(createUserMessage)

export default usermessages 