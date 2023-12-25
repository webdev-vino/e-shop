const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema(
    {
        email: String,
    }
)

const emailModel = mongoose.model("email", emailSchema);
module.exports = emailModel;