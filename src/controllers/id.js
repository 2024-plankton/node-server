const User = require('../models/User.js');
const id = async (req, res) => {
    const {id} = req.body;

    if (!id) {
        return res.status(400).json({ error: 'ID를 입력해주세요.' });
    }

    try {
        // MongoDB에서 사용자 검색
        const user = await User.findOne({id: id});

        if (!user) {
            return res.status(404).json({ error: 'ID가 일치하지 않습니다.' });
        }

        // 사용자 확인
        return res.status(200).send();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: '서버 오류' });
    }
};

module.exports = id;