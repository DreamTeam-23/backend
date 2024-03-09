import { Streak } from '../models/Streak'

const updateStreaks = async () => {
    const userStreaks = await Streak.find()
    const currentDate = new Date()

    userStreaks.forEach(async (userStreak) => {
        const lastUpdate = new Date(userStreak.updateDate)
        const timeDiff = Math.abs(currentDate.getTime() - lastUpdate.getTime())
        const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))

        if (dayDiff > 1) {
            userStreak.currentStreak = 0
        }
        else {
            userStreak.currentStreak += 1
            if (userStreak.currentStreak > userStreak.longestStreak) {
                userStreak.longestStreak = userStreak.currentStreak
            }
        }

        userStreak.updateDate = currentDate

        await userStreak.save()
    })
}

export { updateStreaks }
