import { Button } from '@material-ui/core'
import React, { useEffect, useMemo, useState } from 'react'
import { weatherData } from './DummyData'
import './weather.css'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Weather = () => {

    const [myData, setMyData] = useState({})
    const [nowHour, setNowHour] = useState('');
    const [todayDate, setTodayDate] = useState('')

    const [todayDateData, setTodayDateData] = useState('')
    const [allDate, setAllDate] = useState([])

    const [details, setDetails] = useState([]);

    const [tempClick , setTempClick] = useState(false)
    const [humidClick , setHumidClick] = useState(false)
    const [rainClick , setRainClick] = useState(false)

    const [topHeaderData , setTopHeaderData] = useState({})
     
    const [showPlotDate , setShowPlotDate] = useState('');
    const [showPlotDay , setShowPlotDay] = useState('');

    const [dateClicked , setDateClicked] = useState(false)



    useEffect(() => {
        const date = new Date();
        const currentHour = date.getHours();

        const todayTime = weatherData && weatherData.hourly.time[currentHour]
        const todayDateTime = new Date(todayTime);
        setTodayDate(todayDateTime);

        // const isoStandard = new Date().toISOString() // "2022-08-09T23:00"
        // const d = new Date("2022-08-09T23:00");
        // const hour = d.getHours();

        let arr = [];
        const modifiedData = {};
        weatherData && weatherData.hourly.time.map((val, index) => {
            let obj = {};
            const time = val.split("T");
            obj['hour'] = time[1];
            obj['temperature'] = weatherData.hourly.temperature_2m[index] ? weatherData.hourly.temperature_2m[index] : 0
            obj['humid'] = weatherData.hourly.relativehumidity_2m[index] ? weatherData.hourly.relativehumidity_2m[index] : 0
            obj['rain'] = weatherData.hourly.rain[index] ? weatherData.hourly.rain[index] : 0
            arr.push(obj);
            if ((index + 1) % 24 === 0 && index > 0) {
                modifiedData[time[0]] = arr;
                arr = [];
            }

        })
        console.log('The latest Data', modifiedData)
        setMyData(modifiedData)

    }, [])

    const myForeCastData = useMemo(() => {
        return myData;
    }, [myData])

    useEffect(() => {
        console.log('myForeCastData', myForeCastData)
        const isoStandard = new Date().toISOString()
        const currentDate = isoStandard.split("T")
        const myData = myForeCastData[currentDate[0]]
        const hourSplit = currentDate[1].split(":")[0]+":00"
        const headerData = myData && myData.length && myData.filter((val)=>{return val.hour === hourSplit})
        setTopHeaderData(headerData && headerData.length && headerData[0])
        setTodayDateData(currentDate)
        const data = Object.keys(myForeCastData)
        setDetails(myForeCastData[currentDate[0]])
        setAllDate(data)
        setTempClick(true)
        setHumidClick(false)
        setRainClick(false)
    }, [myForeCastData])

    const handleDailyClick = (e , value) => {
        setDetails(myForeCastData[value])
        setTempClick(true)
        setHumidClick(false)
        setRainClick(false)
        setDateClicked(true)
       const selectedDay = new Date(value).toString().split(" ")[0] + "Day"
       setShowPlotDay(selectedDay)
       const selectedDate =  new Date(value).toString().split(" ").slice(1, 3).toString().replace(",","-")
       setShowPlotDate(selectedDate)
    }

    const handleTemperatureClick = () => {
        setTempClick(true)
        setHumidClick(false)
        setRainClick(false)
    }

    const handleHumidClick = () => {
        setTempClick(false)
        setHumidClick(true)
        setRainClick(false)

    }
    const handleRainClick = () => {
        setTempClick(false)
        setHumidClick(false)
        setRainClick(true)

    }


    return (
        <div className='weatherRoot'>
            <div className='headerWeather'>
                <div style={{ background: 'black', color: 'white', height: '40px' }}>{todayDate.toString()}</div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }} >
                        <div style={{ flex: '1', fontSize: '45px', color: 'white' }}>
                            {topHeaderData && topHeaderData.temperature}°C
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '5px', marginRight: '5px', color: 'white' }}>
                            Humid- {topHeaderData && topHeaderData.humid}
                            <div>Rain - {topHeaderData && topHeaderData.rain}</div>
                        </div>

                    </div>

                </div>
            </div>
            <h3 style={{marginBottom :'3px', color:'#dde28e', fontSize:'20px', textAlign: 'center'}}>DAILY FORECAST</h3>
            <div className='dailyForcast'>
                {allDate && allDate.length && allDate.map((val, index) => {
                    return <div id={index.toString()} onClick={(e) => handleDailyClick(e,val)} style={{ background:val === todayDateData[0]?'#a66e00':'#9595d8', cursor: 'pointer', margin: '2px', width: '20%', border: '2px solid black' }}>
                        {val === todayDateData[0] ? 
                        <div>
                            <span style={{fontSize:'42px',marginLeft:'16px'}}>Today</span>
                            <div style={{marginLeft:'18px',fontSize:'26px'}}>{new Date(val).toString().split(" ").slice(1, 3)}</div>
                            
                            </div> :
                            <div>
                                <span style={{fontSize:'38px',marginLeft:'14px'}}>{new Date(val).toString().split(" ")[0] + "Day"}</span>
                                <div><span style={{marginLeft:'18px',fontSize:'26px'}}>{new Date(val).toString().split(" ").slice(1, 3)}</span></div>
                            </div>
                        }
                    </div>
                })}

            </div>

            <div className='tabItem'>
                <div className='tabMenu'>
                    <Button style={{background:tempClick?'white':'',color:tempClick?'black':'',width:'50vh'}} onClick={(e) => handleTemperatureClick(e)} variant='contained' color='secondary'>
                        Temperature
                    </Button>

                    <Button style={{background:humidClick?'white':'',color:humidClick?'black':'',width:'50vh'}} onClick={(e) => handleHumidClick(e)} variant='contained' color='secondary'>
                        Humidity
                    </Button>
                    <Button style={{background:rainClick?'white':'',color:rainClick?'black':'',width:'50vh'}} onClick={(e) => handleRainClick(e)} variant='contained' color='secondary'>
                        Rain
                    </Button>

                </div>
            </div>
            <div style={{marginTop:'10px'}}>
                {dateClicked?
                <div className='PlotDates'>
                    {showPlotDay} -   {showPlotDate}
                </div>:null}
        {/* Here is the plot for better info.  */}
            <ResponsiveContainer width="100%" height='100px' aspect={4 / 1}>
                <LineChart data={details}>
                    <XAxis dataKey='hour' stroke='white' textAnchor= "end" sclaeToFit="true" verticalAnchor= "start" interval={0}  />
                    <Line type='monotone' dataKey={tempClick?'temperature':humidClick?'humid':'rain'}  stroke="#8884d8" activeDot={{r: 8}} />
                    <Tooltip />
                    {/* <CartesianGrid stroke='#e0dfdf'/> */}
                </LineChart>

            </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Weather
