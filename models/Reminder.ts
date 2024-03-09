/*
author: Ebod Shojaei
date: March 9, 2024
version: 1.0
description: Reminder model schema for Space web server
 */

import mongoose from "mongoose";

const ReminderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: [true, 'userId is required'] },
    category: { type: String, required: true },
    title: { type: String, required: [true, 'title is required'], maxlength: [80, 'title char limit is 80'] },
    startDate: { type: Date, required: true, default: Date.now },
    endDate: { type: Date, required: true, default: Date.now },
    notified: { type: Boolean, default: false },
    createDate: { type: Date, default: Date.now }
});

const Reminder = mongoose.models.Reminder || mongoose.model('Reminder', ReminderSchema);
export default Reminder;
