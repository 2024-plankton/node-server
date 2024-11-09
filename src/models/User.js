const mongoose = require('mongoose');

// User 스키마 정의
const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    pw: {
        type: String,
        required: true
    }
});

// User 모델 생성 및 내보내기
const User = mongoose.model('User', userSchema);
module.exports = User;
