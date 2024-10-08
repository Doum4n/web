const express = require('express');
const { User } = require('../models'); // Sử dụng require

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const user1 = await User.findAll();
        // console.log("User found: ", user1);
        res.json(user1); // Gửi phản hồi về người dùng tìm thấy
    } catch (error) {
        console.error("Error finding user: ", error);
        res.status(500).send("Error finding user");
    }
});

module.exports = router; // Xuất router