import React from 'react';
import './App.css';
import data from "./components/data"
import Navbar from './components/Navbar';
import Card from './components/Card';
function App() {
  const arr = data.map(function(item){
    return(
    <Card
    place = {item.place}
    {...item}
    key={item.place}
    />)
  })
  const [styles,setStyles] = React.useState(
    {backgroundColor:"",
    color:""}
  )
  const [checkToggle,setCheckToggle] = React.useState(false)
  function change(event){
    const {value} = event.target

    setCheckToggle(i=>!i)
    setStyles(obj=>({
      ...obj,
      backgroundColor:!checkToggle?"black":"",
      color:!checkToggle?"white":""
    }))
    console.log(checkToggle)
  }
  return (
    <div className="App" style={styles}>
      <Navbar />
      <div className='darktheme'>
        <h3 className='light'
           style={{color:!checkToggle?"gray":""}}
        >Light</h3>
        <label className="switch">
          <input 
            type="checkbox" 
            name="checked"
            onChange={change}
            checked={checkToggle}
          />
          <span className="slider round"></span>
        </label>
        <h3
          className='dark'
          style={{color:checkToggle?"gray":""}}
        >Dark</h3>
      </div>
      {arr}   
    </div>
  );
}

export default App;
