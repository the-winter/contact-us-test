let mongoose = require("mongoose");
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
        required: true
    },
    address: {
        type: String
    },
    dob: {
        type: Date,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
