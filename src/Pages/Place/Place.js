import React, { useState } from 'react'
import './Place.css'

const Place = () => {
  const [img1Click, setImg1Click] = useState(false)
  const [img2Click, setImg2Click] = useState(false)
  const [img3Click , setImg3Click] = useState(false)
  const [img4Click , setImg4Click] = useState(false)

  const handleImage1Click = () => {
   setImg1Click(!img1Click)
  }
  const handleImage2Click = () => {
    setImg2Click(!img2Click)
  }
  const handleImage3Click = () => {
    setImg3Click(!img3Click)
  }
  const handleImage4Click = () => {
    setImg4Click(!img4Click)
  }
  return (
    <div className='root'>
      <div className='headerText'>
      Australia
      </div>
      <div style={{textAlign:'center', marginLeft:'181px',marginRight:'15%',color:'white'}}>Australia, officially the Commonwealth of Australia, 
      is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. With an area of 7,617,930 square kilometres, Australia is the largest country by area in Oceania and the world's sixth-largest country.
      </div>
      <div className='imageShow'>
      <div className='circle' style={{marginRight:'10px',position: 'relative'}}>
          <img onClick={(e)=>handleImage1Click(e)} onBlur={(e)=>handleImage1Click(e)} style={{cursor:'pointer',maxWidth:'357px',marginTop:'20px',marginLeft:'50px',borderRadius:'56%',height:'117%'}} src="https://expatra.com/wp-content/uploads/2021/08/Yarra_river_melbourne-1404x849.jpg" />
          {img1Click?<div className = 'overlayCircle'>This is the view of Yarra River in Melbourne or historically, the Yarra Yarra River, is a perennial river in south-central Victoria. </div>:null}
        </div>
        <div className='firstRow' style={{flexWrap:'wrap',position:'relative'}}>
        <img onClick={(e)=>handleImage2Click(e)} style={{cursor:'pointer' ,maxHeight:'250px',width:'100%',maxHeight:'280px'}} src= "https://www.planetware.com/photos-large/AUS/australia-new-south-wales-sydney-opera-house.jpg" alt=''/>
        {img2Click?<div className = 'overlay2nd'>Mention "Sydney, Australia" and most people think of the Opera House. Shaped like huge shells or billowing sails, this famous building on Sydney's Bennelong Point. </div>:null}
        </div>
        </div>

        <div className='imageShowSecond'>
        <div className='secondRow'>
        <img onClick={(e)=>handleImage3Click(e)} style={{ cursor :'pointer',height:'100%',width:'100%',marginLeft:'50px'}} src= "https://www.roadaffair.com/wp-content/uploads/2017/12/great-sandy-national-park-australia-shutterstock_346695122.jpg" alt=''/>
        {img3Click?<div className = 'overlay3rd'>At 76 miles long and 14 miles wide, Fraser Island, the world’s largest sand island offers one of Australia’s most unique four-wheel-drive adventures with no sealed roads, just pure sand. Even the highway is actually a beach, a 75-mile beach</div>:null}
        </div>
        <div style={{cursor :'pointer',maxWidth:'94vh', marginLeft:'25vh'}} className='secondRow'>
        <img onClick={(e)=>handleImage4Click(e)} style={{height:'74vh',width:'80%',marginLeft:'10vh'}}className='triangle' src= "https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-d225bf7/images/places-to-see-in-australia-twelve-apostles.jpg" alt=''/>
        {img4Click?<div className = 'overlay4th'>Great Ocean Road is one of the world's top scenic drives. Built to provide employment during the Depression, the road stretches for 300 kilometers along Australia's rugged southeast coast, winding along plunging sea cliffs. It stretches from the surfing town of Torquay to the town of Allansford, near Warrnambool.</div>:null}
        </div>
        </div>
    </div>
  )
}

export default Place
