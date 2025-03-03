const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        lowercase: true, 
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'], 
    },
    password: {
        type: String,
        required: true,
    },
})

UserSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10); 
    }
    next();
});
UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel