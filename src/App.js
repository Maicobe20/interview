import logo from './logo.svg';
import './App.css';
import React  from 'react';
import Button from './Components/Button';
import Data from './Components/Data.json'
import WeatherDetails from './Components/WeatherDetails';

function App() {

  const [search, setSearch] = React.useState('')
  const [city, setCity] = React.useState({})
  const [notFound, setNotFound] = React.useState('')
  const handleInput = (e)=>{
    e.preventDefault()
    
    for(let key in Data.States){
      for(let i=0;i<Data.States[key].cities.length; i++){
        if(search.toLocaleLowerCase() === Data.States[key].cities[i].name.toLocaleLowerCase()){
          
          setCity(Data.States[key].cities[i])
          return
        }
      }
    }
    setNotFound('City Not Found')
  }

  return (
    <div className="App">
     
    <form>
      <label>Enter City</label>
      <input type='text' onChange={(e)=> setSearch(e.target.value)}/>
      <Button  handleClick ={handleInput}> submit </Button>
    </form>
    <hr/>
    {city.name ? <h1>{city.name}</h1> : <h1>{notFound}</h1>}

    {city.forecast? <table>
      <thead>
        <tr>
        <th>Date</th>
        <th>Time</th>
        <th>Temperature</th></tr>
      </thead>

      {city.forecast.map((item,index)=>  <WeatherDetails weather={item} key={index}/>)}                                                                       

    </table> :null 
       }
    </div>
  );
}

export default App;

