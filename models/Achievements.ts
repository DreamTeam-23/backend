/*
author: Harman
collaborator: Ebod Shojaei
date: March 9, 2024
version: 1.0
description: Achievements model schema for Space web server
 */

import mongoose from "mongoose";

const AchievementSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: [true, 'name is required'] },
    description: { type: String, required: [true, 'description is required'] },
    criteria: { type: Number, required: [true, 'criteria is required'] },
    reward: { type: Number, required: [true, 'reward is required'] },
    createDate: { type: Date, default: Date.now }
});

const Achievement = mongoose.models.Achievement || mongoose.model('Achievement', AchievementSchema);
export default Achievement;
