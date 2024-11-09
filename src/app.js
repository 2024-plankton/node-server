//express 서버 관련
const express = require('express');
const app = express();
//path 경로 관련
const path = require('path');
//morgan 클라이언트 요청 관리, 개발시 dev/배포시 combined
const morgan = require('morgan');
const mongoose = require('mongoose')
const cors = require('cors');
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');

//변수 설정
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(express.json()); //json 인식

if (NODE_ENV === 'development' || NODE_ENV === 'test') { //개발 설정
    app.use(morgan("dev"));
    app.use(express.urlencoded({ extended: false })); //url-encoded 데이터 파싱 방식, false는 querystring 모듈 사용
} else { //배포 설정
    app.use(morgan("combined"));
    app.use(express.urlencoded({ extended: true })); //url-encoded 데이터 파싱 방식, true는 querystring 모듈 사용
}

//DB 연결 with mongoDB
/*
// MongoDB 연결
const mongoUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB: ', err);
    });

// Mongoose 연결 이벤트 핸들러
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: ', err);
});
*/

// health
const health = async (req, res) => {
    const currentDate = new Date(); // 현재 날짜와 시간 가져오기
    res.status(200).send({ date: currentDate });
};



app.use(cors());
app.get('/health', health);
app.get('/login', loginRouter);
app.get('/signup', signupRouter)

//error 처리
app.use((err, req, res, next) => {
    console.log(err);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});