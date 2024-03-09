const mongoose = require('mongoose');
const Schema = mongoose.Schema;

<<<<<<< Updated upstream
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
=======
const UserSchema = new mongoose.Schema({
    userId: { type: Number, required: [true, 'userId is required'] },
    email: { type: String, required: [true, 'email is required'], maxlength: [255, 'email char limit is 255'] },
    password: { type: String, required: [true, 'password is required'], maxlength: [80, 'password char limit is 80'] },
    username: { type: String, required: [true, 'username is required'], trim: true, maxlength: [80, 'username char limit is 80'] },
    createDate: { type: Date, required: true, default: Date.now }
})
>>>>>>> Stashed changes

module.exports = mongoose.model('User', userSchema);
