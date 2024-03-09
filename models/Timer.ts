/*
author: Ebod Shojaei
date: March 9, 2024
version: 1.0
description: Timer model schema for Space web server
 */

import e from "express";
import mongoose from "mongoose";

const TimerSchema = new mongoose.Schema({
    timerId: { type: mongoose.Schema.Types.ObjectId, required: [true, 'timerId is required'], auto: true },
    reminderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Reminder' },
    timer: { type: Number, required: true },
    completed: { type: Boolean, default: false },
    createDate: { type: Date, default: Date.now }
});

const Timer = mongoose.models.Timer || mongoose.model('Timer', TimerSchema);
export default Timer;
