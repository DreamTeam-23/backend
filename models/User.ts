
/*
author: Paul Kim
collaborator: Ebod Shojaei
date: March 9, 2024
version: 1.0
description: User model schema for Space web server
 */

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: { type: String, required: [true, 'email is required'], unique: true, maxlength: [255, 'email char limit is 255'] },
    password: { type: String, required: [true, 'password is required'], maxlength: [80, 'password char limit is 80'] },
    username: { type: String, required: [true, 'username is required'], maxlength: [80, 'username char limit is 80'] },
    reminders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reminder' }],
    timers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Timer' }],
    achievements: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Achievement' }],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    streak: { type: Number, default: 0 },
    createDate: { type: Date, required: true, default: Date.now }
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
