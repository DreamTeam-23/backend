/*
author: Harman
date: March 9, 2024
version: 1.0
description: Achievements model schema for Space web server
 */

import mongoose from "mongoose";

const AchievementSchema = new mongoose.Schema({
    achievmentId: { type: Number, required: [true, 'achievementId is required'] },
    name: { type: String, required: [true, 'name is required'] },
    description: { type: String, required: [true, 'description is required'] },
    criteria: { type: Number, required: [true, 'criteria is required'] },
    reward: { type: Number, required: [true, 'reward is required'] },
    createDate: { type: Date, required: true, default: Date.now },
})

const UserAchievementSchema = new mongoose.Schema({
    userId: { type: Number, required: [true, 'userId is required'] },
    achievementId: { type: Number, required: [true, 'achievementId is required'] },
    achieveDate: { type: Date, required: true, default: Date.now },
})

const RewardPatchesSchema = new mongoose.Schema({
    rewardId: { type: Number, requried: [true, 'rewardId is required'] },
    name: { type: String, required: [true, 'name is required'] },
    description: { type: String, required: [true, 'description is required'] },
    image: { type: Image, required: [true, 'image is required'] },
})

const Achievement = mongoose.models.Achievement || mongoose.model('Achievement', AchievementSchema);
const UserAchievement = mongoose.models.UserAchievement || mongoose.model('UserAchievement', UserAchievementSchema);
const RewardPatches = mongoose.models.RewardPatches || mongoose.model('RewardPatches', RewardPatchesSchema);

export { Achievement, UserAchievement, RewardPatches }

