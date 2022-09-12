import React, { useState } from 'react'
import './Form.css'
import { TextField, Checkbox, Button } from '@material-ui/core'
import WarningIcon from '@material-ui/icons/Warning';

const Form = () => {
  const [exp, setExp] = useState('');
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)
  const [check3, setCheck3] = useState(false)

  const [min, setMin] = useState('20');
  const [max, setMax] = useState('50');

  const [expError, setExpError] = useState('');
  const [checkError, setCheckError] = useState('')
  const [minMaxError, setMinMaxError] = useState('')

  const [showEdit, setShowEdit] = useState(false)

  const handleExpChange = (e) => {
    setExp(e.target.value);
    setExpError('')
  }
  const handleCheck1 = (e) => {
    setCheck1(e.target.checked)
    setCheckError('')
    console.log(e.target.value)
  }
  const handleCheck2 = (e) => {
    setCheck2(e.target.checked)
    setCheckError('')
  }
  const handleCheck3 = (e) => {
    setCheck3(e.target.checked)
    setCheckError('')
  }
  const handleMinChange = (e) => {
    setMin(e.target.value)
    setMinMaxError('')
  }
  const handleMaxChange = (e) => {
    setMax(e.target.value)
    setMinMaxError('')
  }
  const handleEditClicked = () => {
   setShowEdit(false)
  }

  const handleErrorCheck = () => {
    let error = false;
    if (!exp) {
      setExpError('The Field is required')
      error = true
    }
    if (!check1 && !check2 && !check3) {
      setCheckError('check on your correct education')
      error = true
    }
    if (!min || !max) {
      setMinMaxError('Both Min and Max are required')
      error = true
    }
    if (min > max) {
      setMinMaxError('Min hours should be less then max hours')
      error = true
    }
    return error
  }

  const handleSaveClicked = () => {
    const error = handleErrorCheck();
    if (!error) {
      setShowEdit(true)
    }

  }

  return (
    <div className='formRoot'>
      <div className='innerForm'>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className='jobHeader'>JOB CRITERIA</div>
          {!showEdit ?
          <div>
          <span style={{ marginLeft: '2px', color: 'red', fontSize: '18px' }} >* <span style={{ textAlign: 'center', color: '#dd0000' }}>The data provided by you will be used to target better jobs.</span></span>
          <TextField
            style={{ padding: '5px', marginTop: '25px', width: '50%' }}
            type={'number'}
            value={exp}
            onChange={(e) => handleExpChange(e)}
            id='TriviaPercentage'
            variant='outlined'
            label='Enter Total years of Experience'>
          </TextField>
          {expError ?
            <div>
              <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '5px', color: 'red' }}>
                <WarningIcon /><div style={{ marginLeft: '8px', marginTop: '2px' }}>{expError}</div>
              </div>
            </div> : null}

          <div> <span className='edu'>Level Of Education </span>
            <div style={{ marginTop: '10px' }}>
              <Checkbox onClick={(e) => handleCheck1(e)} style={{ marginLeft: '0px' }}
                checked={check1}
              //onChange={(e)=>handleChange(e)}
              /> Bachelor / Graduate
            </div>

            <div>
              <Checkbox onClick={(e) => handleCheck2(e)} style={{ marginLeft: '0px' }}
                checked={check2}
              //onChange={(e)=>handleChange(e)}
              /> Master / Post-Graduate / Phd
            </div>

            <div>
              <Checkbox onClick={(e) => handleCheck3(e)} style={{ marginLeft: '0px' }}
                checked={check3}
              //onChange={(e)=>handleChange(e)}
              /> Vocational / Dimploma / Associates Degree
            </div>
            {checkError ?
              <div>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '5px', color: 'red' }}>
                  <WarningIcon /><div style={{ marginLeft: '8px', marginTop: '2px' }}>{checkError}</div>
                </div>
              </div> : null}


          </div>

          <div> <span className='eduWork'>No. Of Working Hours Per Week</span></div>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', }}>
            <TextField
              style={{ padding: '5px', width: '20%' }}
              type={'number'}
              value={min}
              onChange={(e) => handleMinChange(e)}
              InputProps={{ inputProps: { min: 20, max: 50 } }}
              id='TriviaPercentage'
              variant='outlined'
              label='MIN'>
            </TextField>
            <TextField
              style={{ padding: '5px', width: '20%', marginLeft: '20px' }}
              type={'number'}
              value={max}
              onChange={(e) => handleMaxChange(e)}
              InputProps={{ inputProps: { min: 20, max: 50 } }}
              id='TriviaPercentage'
              variant='outlined'
              label='MAX'>
            </TextField>
          </div>
          {minMaxError ?
            <div>
              <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '5px', color: 'red' }}>
                <WarningIcon /><div style={{ marginLeft: '8px', marginTop: '2px' }}>{minMaxError}</div>
              </div>
            </div> : null}


          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Button onClick={() => handleSaveClicked()} style={{ marginTop: '25px',marginBottom:'10px', width: '40%', height: '60px' }} variant='contained' color='primary'>SAVE AND CONTINUE</Button>
          </div>
          </div>:null}

          {showEdit ?
            <div className='editBox'>
              <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{flex:1}}>
                Min no. of years of exp :- {exp}
              </div>
              <Button style={{flex:1, maxWidth:'17%'}} onClick={()=> handleEditClicked()} color='primary' variant='contained'>Edit</Button>
              </div>
              <div style={{marginTop:'10px'}}>
                No. of working Hour Per week:- {min} - {max} 
              </div>
              <div> <span className='edu'>Level Of Education </span></div>
              <div>
             {check1? <span style={{marginLeft:'10px' ,border:'2px solid', background:'gray'}}> Bachelor / Graduate</span>:null}
             {check2? <span style={{marginLeft:'10px', border:'2px solid', background:'gray'}}>Master / Post-Graduate / Phd </span>: null}
             {check3? <span style={{marginLeft:'10px', border:'2px solid', background:'gray'}}> Vocational / Dimploma / Associates Degree</span>:null}
              </div>
            </div>:null}
       </div>
    </div>
  </div>  
  )
}

export default Form
