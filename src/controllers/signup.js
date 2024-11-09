const User = require('../models/User.js');

const registerController = async (req, res) => {
    const { id, pw } = req.body;

    if (!id || !pw) {
        return res.status(400).json({ error: 'ID와 PW를 모두 입력해주세요.' });
    }

    try {
        // 새 사용자 생성
        const newUser = new User({ id, pw });

        // 사용자 저장
        await newUser.save();

        return res.status(201).json({ message: '회원가입 성공' });
    } catch (err) {
        console.error(err);

        // 고유 제약 조건 위반(중복된 ID) 처리
        if (err.code === 11000) {
            return res.status(409).json({ error: '중복된 ID입니다. 다른 ID를 사용해주세요.' });
        }

        return res.status(500).json({ error: '서버 오류' });
    }
};

module.exports = registerController;
