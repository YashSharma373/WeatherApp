let weather = {
    "apiKey" : 'a3042233261bbc31b94dfd738805f1dd',
    fetchWeather : function(city){
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&appid="
        +this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather : function(data){
        const {name} = data;
        const { icon,description } = data.weather[0];
        const { temp,humidity } = data.main;
        const { speed }=data.wind;
        document.querySelector('.city').innerText='Weather in '+name;
        document.querySelector('.icon').src="http://openweathermap.org/img/wn/"+ icon +".png"
        document.querySelector('.description').innerText=description; 
        document.querySelector('.temp').innerText=temp+'°C';
        document.querySelector('.humidity').innerText="Humidity: "+humidity+"%";
        document.querySelector('.wind').innerText='Wind Speed = '+speed+"km/hr";
        document.querySelector('.weather').classList.remove('loading');
        document.querySelector('body').style.backgroundImage = " url('https://source.unsplash.com/1600x900/?"+ name +"')"
    },

    search : function(){
        this.fetchWeather(document.querySelector('.search-bar').value);
    }

    
};


document.querySelector('.search button').addEventListener('click',function(){
    weather.search();
});

document.querySelector('.search-bar').addEventListener('keyup',function(e){
    if(e.key=='Enter'){
        weather.search();
    }
});

weather.fetchWeather('Delhi');
