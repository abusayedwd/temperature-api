// console.log('temperature')
const api_url = `5fac90d06d6cda5fbd34bf4b3e820247`;

const temperaturDataLoad = city => {
 
        fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_url}&units=metric`)
        .then(res =>res.json())
        .then(data => displayData(data))

}
 const displayData = data => {
        const teperature = document.getElementById('temperature');
        teperature.innerText = data.main.temp;
        
        const condition = document.getElementById('condition');
        condition.innerText = data.weather[0].main;
 }
 document.getElementById('btn-search').addEventListener('click',function(){
        const inputField = document.getElementById('input-field');
        const city = inputField.value ;
        inputField.value = '';
        document.getElementById('city').innerText = city ;

        temperaturDataLoad(city)

 })

 temperaturDataLoad('dhaka')