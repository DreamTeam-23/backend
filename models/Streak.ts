/*
author: Harman
date: March 9, 2024
version: 1.0
description: Streaks model schema for Space web server
 */

import mongoose from "mongoose";

const StreakSchema = new mongoose.Schema({
    streakId: { type: mongoose.Schema.Types.ObjectId, required: [true, 'streakId is required'], auto: true },
    userId: { type: Number, required: [true, 'userId is required'] },
    currentStreak: { type: Number, default: 0 },
    longestStreak: { type: Number, default: 0 },
    createDate: { type: Date, required: true, default: Date.now },
    updateDate: { type: Date, required: true, default: Date.now },
})

const Streak = mongoose.models.Streak || mongoose.model('Streak', StreakSchema);
export { Streak }
