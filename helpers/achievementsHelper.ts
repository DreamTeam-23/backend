import Achievement from "../models/Achievements";
import User from "../models/User"

const checkAndUpdateAchievements = async (userId, currStreak) => {
    try {
        const user = await User.findOne({ userId })
        if (!user) {
            return;
        }

        const achievements = await Achievement.find({ criteria: currStreak })

        const newAchievements = achievements.filter((achievement) => {
            !user.achievements.includes(achievement.achievementId)
        })

        if (newAchievements.length > 0) {
            for (const achievement of newAchievements) {
                user.achievements.push(achievement.achievementId)
            }
        }

        await user.save()
    } catch (err) {

    }
}

export { checkAndUpdateAchievements }
