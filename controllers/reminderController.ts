/*
author: Paul Kim
date: March 9, 2024
version: 1.0
description: reminder controller for Space web server
 */

import { Request, Response } from "express";
import Reminder from "../models/Reminder";
import User from "../models/User";


async function createReminder(req: Request, res: Response) {
    const { userId, reminder } = req.body;
    const user = await User.findOne({ userId: userId });
    if (!user) return res.json({ result: { user: null, token: null, message: "User not found" } });
    const newReminder = new Reminder(...reminder); // Unpacks array of reminder properties
    newReminder.save((err: any) => {
        if (err) return res.json({ result: { user, message: "Reminder not created" } });
        return res.json({ result: { user, message: "Reminder created" } });
    })
}

export default { createReminder };