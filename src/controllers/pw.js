const User = require('../models/User.js');
const pw = async (req, res) => {
    const {pw} = req.body;

    if (!pw) {
        return res.status(400).json({ error: 'PW를 입력해주세요.' });
    }

    try {
        // MongoDB에서 사용자 검색
        const user = await User.findOne({pw: pw});

        if (!user) {
            return res.status(404).json({ error: 'PW가 일치하지 않습니다.' });
        }

        // 사용자 확인
        return res.status(200).json({ message: '로그인 성공' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: '서버 오류' });
    }
};
module.exports = pw;