/*
author: Ebod Shojaei
date: March 9, 2024
version: 1.0
description: Reminder model schema for Space web server
 */

import mongoose from "mongoose";

const ReminderSchema = new mongoose.Schema({
    reminderId: { type: Number, required: [true, 'reminderId is required'] },
    userId: { type: Number, required: [true, 'userId is required'] },
    category: { type: String, required: [true, 'category is required'], maxlength: [80, 'category char limit is 80'] },
    title: { type: String, required: [true, 'title is required'], maxlength: [80, 'title char limit is 80'] },
    description: { type: String, required: [true, 'description is required'], maxlength: [255, 'description char limit is 255'] },
    startDate: { type: Date, required: true, default: Date.now },
    endDate: { type: Date, required: true, default: Date.now },
    createDate: { type: Date, required: true, default: Date.now },
    updateDate: { type: Date, required: true, default: Date.now },
    notified: { type: Boolean, required: true, default: false }
})

const Reminder = mongoose.models.Reminder || mongoose.model('Reminder', ReminderSchema);
export default Reminder;
