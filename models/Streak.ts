import mongoose from "mongoose";

const StreakSchema = new mongoose.Schema({
    userId: { type: Number, required: [true, 'userId is required'] },
    currentStreak: { type: Number, default: 0 },
    longestStreak: { type: Number, default: 0 },
    createDate: { type: Date, required: true, default: Date.now },
    updateDate: { type: Date, required: true, default: Date.now },
})

const Streak = mongoose.models.Streak || mongoose.model('Streak', StreakSchema);
export { Streak }
