const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    userId: { type: Number, required: [true, 'userId is required'] },
    email: { type: String, required: [true, 'email is required'], maxlength: [255, 'email char limit is 255'] },
    password: { type: String, required: [true, 'password is required'], maxlength: [80, 'password char limit is 80'] },
    username: { type: String, required: [true, 'username is required'], trim: true, maxlength: [80, 'username char limit is 80'] },
    createDate: { type: Date, required: true, default: Date.now }
})

module.exports = mongoose.model('User', UserSchema);
