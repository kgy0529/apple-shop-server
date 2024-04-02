var express = require('express');
var app = express();
var cors=require('cors');
var models=require('./models');
var port="8000";

app.use(express.json());
app.use(cors())


app.get('/products', async(req, res) => {
    const query=req.query;
    console.log('Query:', query)
    res.send({
        products:[
            {
                id:0,
                free:'무료 각인',
                title:'AirPods Pro MagSafe 충전 케이스 모델(2세대, USB-C)',
                price:359000,
                card: '최대 12개월 신용 카드 할부',
                freeDescription:"AirPods Pro MagSafe 충전 케이스 모델(2세대, USB-C)은 이전 세대 대비 최대 2배 더 강력해진 액티브 노이즈 캔슬링,¹ 주변의 소리도 들리게 해주는 주변음 허용 모드를 선사합니다. 완전히 새로운 '적응형 오디오' 기능은 환경에 맞게 소음 제어 수준을 스마트하게 조정해주고,¹⁶ '대화 인지' 기능은 다른 사람들과 소통할 때 미디어 음량은 낮추고, 앞에서 들려오는 목소리를 더욱 또렷하게 전해주죠.¹⁶ 한 번 충전으로 최대 6시간의 배터리 사용 시간⁷을 자랑하고, 터치 제어 기능 덕분에 스와이프로 손쉽게 음량을 조절할 수도 있습니다. MagSafe 충전 케이스¹⁷도 '정밀 탐색' 기능,¹⁵ 내장형 스피커 및 랜야드 루프˄를 갖춘 매혹적인 모습으로 디자인되었죠.",
                img: './img/MTJV3.jpg'
            },
            {
                id:1,
                free:'무료 각인',
                title:'AirPods Max 구입하기',
                price:769000,
                card: '최대 12개월 신용 카드 할부',
                freeDescription:'',
                img: './img/airpods-max-select-silver-202011.jpg'
            },
            {
                id:2,
                free:'무료 각인',
                title:'AirPods(3세대) Lightning 충전 케이스 모델',
                price:259000,
                card: '최대 12개월 신용 카드 할부',
                freeDescription:'AirPods은 귀 안쪽의 곡선에 맞춘 컨투어 핏에 무게 또한 정말 가볍죠. 귀에 꼭 맞는 각도로 편안한 착용감을 선사할 뿐만 아니라 소리를 더욱 정확하게 귀 안으로 안내합니다. 본체가 AirPods(2세대)에 비해 33% 짧아졌으며, 음악 재생과 음성 통화 시 AirPods을 손쉽게 제어할 수 있도록 해주는 포스 센서를 탑재했습니다.',
                img: './img/MME73.jpg'
            },
            {
                id:3,
                free:'무료 각인',
                title:'Beats Studio Buds + 진정한 무선 노이즈 캔슬링 이어버드 — 투명',
                price:229000,
                card: '최대 12개월 신용 카드 할부',
                Description:'Beats Studio Buds + 커스텀 어쿠스틱 플랫폼은 강력하고 균형 잡힌 사운드를 정교한 포켓 사이즈 디자인에 담아냈습니다. 재설계된 어쿠스틱 통풍구는 오디오 정확성을 향상시키고, 더욱 편안한 착용감이 하루 종일 지속되도록 압력을 부드럽게 완화합니다. 각 이어버드에는 이중 레이어 트랜스듀서가 탑재되어 보다 깔끔한 저음과 왜곡이 월등히 적은 사운드를 제공합니다. 따라서 음악을 감상하거나 통화를 할 때, Studio Buds +는 어디에서나 풍부하고 몰입도가 높은 사운드를 선사합니다.',
                img: './img/MQLK3.jpg'
            },
            {
                id:4,
                free:'',
                title:'Beats Studio Buds True Wireless 노이즈 감쇠 이어폰 – 블랙',
                price:199000,
                card: '최대 12개월 신용 카드 할부',
                Description:'Beats는 아티스트가 의도한 사운드 그대로 음악을 들려줍니다. Beats Studio Buds는 완벽한 맞춤형 어쿠스틱 플랫폼을 통해 아담한 사이즈로도 강력하고 균형 잡힌 사운드를 선사하죠. 독점 듀얼 엘리먼트 다이어프램 드라이버가 투챔버 하우징에 내장되어 놀라운 스테레오 세퍼레이션의 깨끗한 사운드를 구현할 수 있습니다. 여기에 첨단 디지털 프로세서가 뛰어난 음량과 음질로 오디오 성능을 최적화하는 동시에 깔끔한 노이즈 감쇠까지 처리해줍니다. 그렇게 완성된 몰입감 넘치는 사운드가 음악에 담긴 감정까지 고스란히 되살려주면 온종일 음악을 즐기며 하루를 알차게 보낼 수 있죠.',
                img: './img/MJ4X3.jpg'
            },
        ]
    });
});
app.get('/products/:id', async(req, res) => {
    const params=req.params;
    const {id} = params;
    res.send(`id는 ${id} 입니다`)
})

app.post('/products', function (req, res) {
    const body=req.body;
    console.log(body.articles)
    res.send({
        body
    });
});

app.listen(port, ()=>{
    console.log('서버가 돌아가고 있습니다.')
    models.sequelize.sync().then(()=>{
        console.log('DB 연결 성공')
    }).catch(()=>{
        console.error(err)
        console.log('DB 연결 에러');
        process.exit();
    })
})