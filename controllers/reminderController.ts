/*
author: Ebod Shojaei
date: March 9, 2024
version: 1.0
description: reminder controller for Space web server
 */
import { Request, Response } from "express";
import Reminder from "../models/Reminder";
import { getUserFromToken } from "../util/getUserFromToken";


export async function createReminder(req: Request, res: Response) {
    const { token, reminder } = req.body;
    const user = await getUserFromToken(token);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const newReminder = new Reminder({ ...reminder, userId: user.userId });
    try {
        await newReminder.save();
        res.status(201).json({ message: "Reminder created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating reminder", error });
    }
}

export async function getReminder(req: Request, res: Response) {
    const { reminderId } = req.params;

    try {
        const reminder = await Reminder.findById(reminderId);
        if (!reminder) {
            return res.status(404).json({ message: "Reminder not found" });
        }
        res.json(reminder);
    } catch (error) {
        res.status(500).json({ message: "Error fetching reminder", error });
    }
}

export async function updateReminder(req: Request, res: Response) {
    const { reminderId } = req.params;
    const update = req.body;

    try {
        const reminder = await Reminder.findByIdAndUpdate(reminderId, update, { new: true });
        if (!reminder) {
            return res.status(404).json({ message: "Reminder not found" });
        }
        res.json({ message: "Reminder updated successfully", reminder });
    } catch (error) {
        res.status(500).json({ message: "Error updating reminder", error });
    }
}

export async function deleteReminder(req: Request, res: Response) {
    const { reminderId } = req.params;

    try {
        const reminder = await Reminder.findByIdAndDelete(reminderId);
        if (!reminder) {
            return res.status(404).json({ message: "Reminder not found" });
        }
        res.json({ message: "Reminder deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting reminder", error });
    }
}

