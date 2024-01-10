    // componente principal
    import React, { Component } from 'react';

    import WeatherInfo from './components/WeatherInfo';
    import WeatherForm from './components/WeatherForm';

    import {WEATHER_KEY} from './keys'  

    class App extends Component {
    /* funcion que se encarga de obtener el clima */

        state = {
            temperature: '',
            description: '',
            humidity:'',
            wind_speed:'',
            city:'',
            country:'',
            error: null
        };
    
        getWeather = async (e)/* evento */ =>{ 
            e.preventDefault();  // evita que el formulario se envie de la manera tradicional (recargando la página)
          
            //console.log(e.target.elements) /*e.target es elemento que activo el evento, y wl e.target.elements es cada elemento del formula (botones,entrada etc)*/
            const {city, country } = e.target.elements;

            const cityValue = city.value;
            const countryValue= country.value;


            //para generar un error y nos salga el cartelito creamos una condicion ontes
            if (cityValue && countryValue){
                //si existe el pais y la ciudad le pasamos la peticion, el estado, etc
           
                const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}`;
            
                const  response = await fetch (API_URL);  /* La variable response almacena la respuesta obtenida después de realizar una solicitud con la función fetch */
                const data = await response.json(); 
                //console.log(data);

                this.setState({
                    temperature:data.main.temp,
                    description: data.weather[0].description,
                    humidity: data.main.humidity,
                    wind_speed: data.wind.speed,
                    city:data.name,
                    country:data.sys.country,
                    error: null

                }/* , ()=> console.log(this.state)  */  );

            //aca termina el condicional   
            }else {
                this.setState({
                    error: 'por favor ingrese una ciudad y un pais'
                });

            }
        }    

        render() {
            return (
                <div className='container p-4'>
                    <div className='row'>
                        <div className='col-md-6 mx-auto'>
                            {/*WeatherForm tendra una propiedad llamada getWeather, y como valor
                            sera this.getWeather
                            */}
                            <WeatherForm getWeather={this.getWeather}/>
                            <WeatherInfo  {...this.state} /> {/* es lo mismo q pasarle todo el objeto q tiene el state */}
                        </div>
                    </div>
                </div>
            );
        }
    }

    export default App;
