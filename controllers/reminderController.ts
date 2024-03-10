/*
author: Ebod Shojaei
date: March 9, 2024
version: 1.0
description: reminder controller for Space web server
 */
import { Request, Response } from "express";
import Reminder from "../models/Reminder";
import User from "../models/User";


export async function createReminder(req: Request, res: Response) {
    const { userId } = req.body;
    const user = await User.findById(userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const reminder = req.body;
    const newReminder = new Reminder({ ...reminder });
    try {
        console.log(newReminder);
        await newReminder.save();
        res.status(201).json({ success:true, message: "Reminder created successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating reminder", error });
    }
}

async function getReminderById(reminderId: string) {
    try {
        return await Reminder.findById(reminderId);
    } catch (error) {
        return null;
    }
}

async function getReminderByUser(userId: string) {
    try {
        return await Reminder.find({ userId });
    } catch (error) {
        return [];
    }
}

export async function getReminder(req: Request, res: Response) {
    const { reminderId } = req.params;
    const { userId } = req.query;

    try {
        // Fetch a single reminder by ID
        if (reminderId) {
            const reminder = await getReminderById(reminderId);
            if (!reminder) {
                return res.status(404).json({ message: "Reminder not found" });
            }
            return res.json(reminder);
        }

        // Fetch all reminders for a user
        if (userId) {
            const reminders = await getReminderByUser(userId.toString());
            if (reminders.length === 0) {
                return res.status(404).json({ message: "No reminders found for this user" });
            }
            return res.json(reminders);
        }

        // If neither reminderId nor userId is provided
        return res.status(400).json({ message: "Reminder ID or User ID is required" });
    } catch (error) {
        res.status(500).json({ message: "Error fetching reminders", error });
    }
}


// Helper function
export async function getUserReminders(userId: string | null = null, reminderIds: string[] = []) {
    try {
        if (reminderIds.length > 0) {
            if (userId) {
                return await Reminder.find({ userId, _id: { $in: reminderIds } }); // Retrieve reminders by user ID and IDs
            } else {
                return await Reminder.find({ _id: { $in: reminderIds } }); // Retrieve reminders by IDs
            }
        }
        if (reminderIds.length === 0) {
            if (userId) {
                return await Reminder.find({ userId }); // Retrieve reminders by user ID
            } else {
                return await Reminder.find(); // Retrieve all reminders
            }
        }
        return [];
    } catch (error) {
        return [];
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
        res.json({ success:true, message: "Reminder updated successfully", reminder });
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

