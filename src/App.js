
import './App.css';
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import PoolIcon from '@mui/icons-material/Pool';
import KayakingIcon from '@mui/icons-material/Kayaking';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';

function valuetext(value) {
  return `${value}`;
}

const tasks = [
  {
    name: 'Play Football',
    time: 8,
    icon: <SportsSoccerIcon className="icon-play"/>
  },
  {
    name: 'Tennis',
    time: 11,
    icon: <SportsTennisIcon className="icon-play"/>

  },
  {
    name: 'Kayaking',
    time: 16,
    icon: <KayakingIcon className="icon-play"/>
  },
  {
    name: 'Swimming',
    time: 22,
    icon: <PoolIcon className="icon-play"/>

  },
];


const tasks2 = [
  {
    name: 'Play Football',
    time: 6,
    icon: <SportsSoccerIcon className="icon-play"/>
  },
  {
    name: 'Tennis',
    time: 14,
    icon: <SportsTennisIcon className="icon-play"/>

  },
  {
    name: 'Kayaking',
    time: 17,
    icon: <KayakingIcon className="icon-play"/>
  },
  {
    name: 'Swimming',
    time: 20,
    icon: <PoolIcon className="icon-play"/>

  },
];


console.log(tasks[0].time)

const marks = [
  {
    value: 6,
    label: '6',
  },
  {
    value: 14,
    label: '12',
  },
  {
    value: 17,
    label: '18',
  },
  {
    value: 20,
    label: '24',
  },
];


const marks2 = [
  {
    value: 6,
    label: <SportsBaseballIcon className="icon-play2"/>,

  },
  {
    value: 17,
    label: <SportsSoccerIcon className="icon-play2"/>,
  },
  {
    value: 18,
    label: <KayakingIcon className="icon-play2"/>,
  }
];


function App() {
const [checked, setChecked] = useState(false); 
const [disable, setDisabled] = useState(false);
const [value, setValue] = useState(6)

const [events, setEvents] = useState(null)
const [time, setTime] = useState('')
const [icon, setIcon] = useState('')



const value2 = [7, 13]






  const sliderChangeHandler = (e) => {
    setValue(e.target.value)
    for (let i = 0; i < tasks.length; i++) {
      // if (value[0] === tasks[i].time || value[1] === tasks[i].time) {
        if (value === tasks[i].time - 1) {
          console.log(value, tasks[i].time)
          setEvents(tasks[i].name)
          setTime(tasks[i].time)
          setIcon(tasks[i].icon)
        } 
    }
  }





  const labelChangeHandler = () => {
    return (
      <div style={{ textAlign: "center" }}>
        {value}
        <br />
        {value === time && <p className="label"><br></br>{events} {icon}</p> }
        <br />
      </div>
    );
  }

  const checkboxChangeHandler = () => {
    setChecked(!checked); 
    setDisabled(!checked);
  }
  

  return (
    <div className="app-container">
    <Box sx={{ width: 300 }} className="container">
      <h3 >My calendar (changeable)</h3>
      <form className="checkbox" >
       <label style={{fontWeight: 'bold'}}>Monday</label> 
       <Checkbox defaultChecked color="success"  onChange={checkboxChangeHandler}/>
      </form>
      <Slider
        className='slider'
        aria-label="Hour"
        defaultValue={6}
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        step={1}
        marks={marks}
        min={6}
        max={24}
        disabled={disable}
        onChange={sliderChangeHandler}
        value={value}
        valueLabelFormat={labelChangeHandler}
      />
      {/* {events ? <p className='text'>{events} at {time}</p> : <p></p>} */}
      {/* <Slider defaultValue={30} step={10} marks min={10} max={110} disabled /> */}

    </Box>
    <Box sx={{ width: 300 }} className="container">
      <h3 >Other people 's calendar (view only)</h3>
       <p className="text-label" style={{fontWeight: 'bold', fontSize: '18px'}}>Monday</p> 
      <Slider
        className='slider2'
        defaultValue={6}
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        step={1}
        marks={marks2}
        min={6}
        max={24}
        disabled={disable}
        value={value2}
      />
      </Box>
      </div>
  );
}

export default App;
