//este componente se va a encargar de TOMAR LOS DATOS de la ciuddad/pais

import React from "react";

const WeatherForm  = props => (
    //no es necesario agregar el return
    <div className="card card-body"> 
    {/* capturamos el evento, armamos una funcion q toma los datos del formulario le pasamos por prop el evento
    getWeather 
    */}
        <form onSubmit={props.getWeather}>
            
            <div className="form-group">
                {/* se encarga de tomar el nombre del pais */}
                <input type="text" name="country" placeholder="Tu nombre de tu pais" className="form-control" autoFocus> 
                </input>
            </div>

            <div className="form-group">
                {/* se encarga de tomar el nombre de la ciudad */}
                <input type="text" name="city" placeholder="Tu nombre de tu ciudad"className="form-control" autoFocus> 
                </input>
            </div>

            <button className="btn btn-success btn-block"> {/* bottom para ejecutar este formulario */}
                obtener clima
            </button>
            
        </form>

    </div>
);

export default WeatherForm