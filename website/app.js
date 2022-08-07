/* Global Variables */


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const apiKey = '&appid=4a95bc018029d53fc2fdf913abe5d01f&units=metric'
const getWeatherWithZip = async (zip) =>{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}${apiKey}`) //get the url
try {
    const data = await res.json();
    contentWatherZip(data);
}
catch(error){
    if ("error", error){
        document.querySelector('#content').innerHTML = "Re-enter the zip code"
    }
}
}
const contentWatherZip = (obj)=>{
    const { temp } = obj.main;
    document.querySelector('#date').innerHTML = `${newDate}` // Add date
    document.querySelector('#temp').innerHTML = temp + "°C" // Add the temperature
    document.querySelector('#content').innerHTML = document.querySelector('#feelings').value // Add what the client feels
}
document.querySelector('#generate').addEventListener('click', ()=>{
    getWeatherWithZip(document.querySelector('#zip').value);
})
