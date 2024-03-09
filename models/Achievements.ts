import mongoose from "mongoose";

const AchievementSchema = new mongoose.Schema({
    achievementId: { type: mongoose.Schema.Types.ObjectId, required: [true, 'achievementId is required'], auto: true },
    badgeIcon: { type: String, required: [true, 'badgeIcon is required'] },
    name: { type: String, required: [true, 'name is required'] },
    description: { type: String, required: [true, 'description is required'] },
    criteria: { type: Number, required: [true, 'criteria is required'] },
    reward: { type: Number, required: [true, 'reward is required'] },
    createDate: { type: Date, default: Date.now }
});

const Achievement = mongoose.models.Achievement || mongoose.model('Achievement', AchievementSchema);
export default Achievement;
