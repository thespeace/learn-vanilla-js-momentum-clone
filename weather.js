const clock = document.querySelector("#clock");
setInterval(() => (clock.innerText = `${ new Date().toLocaleString()}`), 1000);

const WEATHER_API_KEY = "23f406b74c1e82dc1023654859ae6db7";

const onGeoOk=(position)=>{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
            weather.innerText = `${data.name} / ${data.weather[0].main} / ${data.main.temp}도`;
            city.innerText = data.name;
            console.log(data);
        });
}
const onGeoError=()=>alert("Can't find you. No weather for you.");

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const quotes = [
    "컴퓨터는 쓸모가 없다. 그것은 그냥 대답만 할 수 있다.\n" +
    "(Pablo Picasso, 피카소는 92세까지 살았는데 65세에 ENIAC이 등장했다.)",
    "컴퓨터는 비키니와 같다. 사람들의 무성한 추측만 만들어낸다.\n" +
    "(Sam Ewing, 작가)",
    "사람들은 컴퓨터를 갖게 되자, 새로운 대량 살상무기를 만들었다.\n" +
    "(Janet Reno, 미국 공무원)",
    "컴퓨터랑 일하는 건 엄청 멋있다.\n" +
    "누구랑 싸우지도 않고, 모든 것을 대신 기억해주고,\n" +
    "내 맥주를 뺏어 마시지도 않는다. (Paul Leary)",
    "자동차가 컴퓨터와 같은 개발공정을 따랐다면,\n" +
    "롤스로이스는 100달러쯤에 살 수 있고 연비도 백만마일 정도 될거다.\n" +
    "하지만 일년에 한 번씩 폭발해 버리는 살인머신이 되어버릴거다.\n" +
    "(Robert X. Cringely, 테크 저널리스트)",
    "컴퓨터는 점점 더 똑똑해지고 있다.\n" +
    "과학자들은 곧 그들이 우리에게 말을 걸 것이라고 말한다.\n" +
    "참고로, 여기에서 그들이란 컴퓨터를 말한다.\n" +
    "과학자가 우리에게 말할 리는 없으니까.\n" +
    "(Dave Barry, 컴퓨터광 유머작가)",
    "나는 최근에 컴퓨터가 똑똑해져서 전 세계를 지배할 것이라는 공포가\n" +
    "거의 세계 모든 곳에서 사라졌다는 걸 알게 되었다.\n" +
    "이것은 정확히 MS-DOS의 배포 시점과 일치했다.\n" +
    "(Larry DeLuca)",
    "I'm sorry, Nico, I didn't have much time...ㅋㅋㅋㅋ..ㅠ_ㅠ\n" +
    "(student, thespeace..)"
]

const randomQuote = document.querySelector("#randomQuote");
randomQuote.innerText = quotes[Math.floor(Math.random() * 8)]

