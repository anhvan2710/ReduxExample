
const URL = 'http://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1'

function getTemp() {
    return fetch(URL)
    .then(res => res.json())
    .then(resJSON => resJSON.list[0].main.temp);
}
// getTemp('Hanoi')
// .then(temp => console.log(temp))
// .catch(err => console.log(err));


export default getTemp;