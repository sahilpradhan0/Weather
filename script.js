let temp = document.getElementsByClassName("temp")[0];
let searchInput = document.getElementById("search");
let err = document.getElementsByClassName("err_msg")[0];
let anotherErr = document.getElementsByClassName("another_err_msg")[0];
let deg = document.getElementsByClassName("deg")[0];
let cel = document.getElementsByClassName("cel")[0];
let city = document.getElementsByClassName("city")[0];
let humidity = document.getElementById("humidity");
let windspeed = document.getElementById("windspeed");

searchInput.addEventListener('click',() => {
    search.value = "";
})

searchInput.addEventListener('change',(e) => {
    getWeather();
})

async function getWeather() {
    try {
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=466c6c69d1152e87187f9d2a88b08235`);
        const respData = await resp.json();
        //error
        if(respData.cod == 404){
            err.innerHTML = "404 ERROR !! \n";
            anotherErr.innerHTML = respData.message;
            humidity.innerHTML = 0;
            windspeed.innerHTML = 0;

            temp.classList.add("temp_err");
            deg.classList.add("deg_err");
            cel.classList.add("cel_err");
            city.classList.add("city_err");

            

        }
        // no error
        else{
            err.innerHTML = "";
            anotherErr.innerHTML = "";
            temp.innerHTML = Math.round(respData.main.temp - 273.15);
            city.innerHTML = respData.name;
            humidity.innerHTML = respData.main.humidity;
            windspeed.innerHTML = respData.wind.speed;
            temp.classList.remove("temp_err");
            deg.classList.remove("deg_err");
            cel.classList.remove("cel_err");
            console.log(respData.name);

            console.log(KeyboardEvent);
        }
        
    } catch (error) {
        console.log(error);
    }
}
