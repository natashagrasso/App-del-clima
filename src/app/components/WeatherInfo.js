import React from 'react'

//componente q recibe propiedades 
const Weatherinfo = props  => { 
   console.log(props);

    return( /* con esta validacion comprobamos si existe un error */

        /* Si existe el error pinta el error, sino pinta el div de abajo */
        <div>
                {
                    props.error &&
                    <div className='alert alert-danger'>
                        <p> {props.error}</p>
                    </div>
                }

            
                {
                    props. temperature ? // si existe la temp muestra todo lo q esta dentro del div
                        <div className='card card-body mt-2 animated fadeInUp'>
  
                            {
                                props.city && props.country &&
                                <p><i className="fas fa-location-arrow"></i> Location: {props.city}, {props.country}</p>
                            }

                            {
                                props.temperature &&
                                <p><i className="fas fa-temperature-low"></i> Temperature: {props.temperature} ℃, {props.description}</p>
                            }

                            {
                                props.humidity &&
                                <p><i className="fas fa-water"></i> Humidity: {props.humidity}</p>
                            }
                            {
                                props.wind_speed &&
                                <p><i className="fas fa-wind"></i> Wind Speed: {props.wind_speed}</p>
                            }
                
                        </div>

                    ://sino
                    <div className='card card-body mt-2 text-center'>
                        <i className="fas fa-sun fa-10x"></i>
                        <p>
                            No request yet
                        </p>

                    </div>
                    
                }
            
        </div>

       
    )
}

export default Weatherinfo;