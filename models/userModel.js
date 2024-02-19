const mongoose = require('mongoose');
const argon2 = require('argon2');


const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    status :{type:String, required:false}
})

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password') || user.isNew) { 
        try {
            const hashedPassword = await argon2.hash(user.password);
            user.password = hashedPassword;
            next();
        } catch (err) {
            return next(err);
        }
    } else {
        return next();
    }
});

const User = mongoose.model('User', userSchema);
module.exports = {User};
