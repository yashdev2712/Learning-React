
const { user } = require("../models/UserSchema");

async function searchUsers(searchQuery) {
    try {
        return await user.find({
            $or: [
                { userName: new RegExp(searchQuery, 'i') },
            ]
        }).select("userName")
    } catch (error) {
        console.error("Error searching users:", error);

    }
}

module.exports = searchUsers;
