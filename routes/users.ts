import express from "express"
const users = express.Router()

import { createUser, getUser } from "../controller"

users.route('/').post(createUser)
users.route('/:userId').get(getUser).post()

export default users 