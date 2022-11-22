import React from 'react'
import Time from './Time';
import Temp from './Temp';
import Date from './Date';

function WeatherDetails({weather}) {
 
  return (
    <tbody >  
      <tr>
      <td><Time data={weather.Date}/></td>
      <td><Date data={weather.Time}/></td>
      <td><Temp data={weather.temprature}/></td></tr>
      </tbody>
  )
}

export default WeatherDetails

// Date, City Name, Current time & temperature details