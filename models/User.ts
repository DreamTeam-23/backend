const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  UserID: Schema.Types.ObjectId,
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
  University: String,
  Major: String,
  Role: { type: String, required: true },
  CreatedAt: { type: Date, default: Date.now },
  Events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
  Routine: {
    SleepingHoursGoal: Number,
    EatingReminder: Boolean,
    EatingHabits: Number
  }
});

module.exports = mongoose.model('User', userSchema);
