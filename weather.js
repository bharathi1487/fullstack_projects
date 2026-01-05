let city=document.getElementById("city");
let btn=document.getElementById("btn");
let weatherinfo=document.getElementById("weatherinfo");
btn.addEventListener("click",getweather);
async function getweather(){
    const cityname=city.value.trim();
    if(cityname==""){
        alert("Please enter a city name");
        return;
    }
    const apikey="c13fa71cc50807192ec6a10c792dde5c";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`;
     try{
        const response=await fetch(url);
        if(!response.ok){
            throw new Error("City not found");
        }
        const data=await response.json();
        const temperature=data.main.temp;
        const condition=data.weather[0].main;
        const humidity=data.main.humidity;
        let emoji="⛅";
        if(condition.toLowerCase().includes("clear")){
            emoji="☀️";
        }
        else if(condition.toLowerCase().includes("cloud")){
            emoji="☁️";
        }
        else if(condition.toLowerCase().includes("rain")){
            emoji="🌧️";
        }
        else if(condition.toLowerCase().includes("snow")){
            emoji="❄️";
        }
        weatherinfo.innerHTML=`
        <li> 🌡️Temperature: ${temperature} °C</li>
        <li> 🌤️Condition: ${condition} ${emoji}</li>
        <li> 💧Humidity: ${humidity}%</li>
        `;
     }
     catch(error){
        alert(`${error.message}`);
     }
    
}

