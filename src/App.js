import { useState, useRef } from 'react';
import './App.scss';
import bg from './images/bg.png'
import { useDispatch } from 'react-redux';
import {
  error,
  success,
} from './redux/msgSlice';
import Modal from './component/Modal'

function App() {

  const dispatch = useDispatch();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [state, setState] = useState('')
  const [lga, setLga] = useState('')
  const [address, setAddress] = useState('')
  const [asset, setAsset] = useState('')
  const [description, setdescription] = useState('')
  const [fileselected, setFileSelected] = useState('')

  const file = useRef()

  //simple form reset logic after successfull submit
  const resetLogic = () => {
    setName('')
    setEmail('')
    setPhoneNumber('')
    setState('')
    setLga('')
    setAddress('')
    setAsset('')
    setdescription('')
    setFileSelected('')
  }
  
  //on submit handler with validation
  const handleSubmit = (event) => {
      event.preventDefault();
      if((name && email && phoneNumber && state && lga && address && asset && description && fileselected) === ''){
        dispatch(error())
      }else{
        dispatch(success())
        resetLogic()
      }
  }

  return (
    <>
      <section className="App">

        <div className="section-one">
          <h3>Report Fault</h3>
          <img src={bg} alt="report fault"/>
          <a href="#login">Login here</a>
        </div>

        <div className="section-two">
          <form onSubmit={handleSubmit}>
            <div className="userInfo">
              <h3>User Information</h3>
              <div className="form_group">
                  <label htmlFor="name">Full Name</label>
                  <input  
                    type="text"
                    name="name" 
                    value={name}
                    onChange={e => {setName(e.target.value)}}
                  />
              </div>
              <div className="form_group">
                  <label htmlFor="email">Email Address</label>
                  <input  
                    type="email" 
                    name="email"
                    value={email}
                    onChange={e => {setEmail(e.target.value)}}
                  />
              </div>
              <div className="form_group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input  
                    type="text" 
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={e => {setPhoneNumber(e.target.value)}}
                  />
              </div>
            </div>

            <hr/>

            <div className="faultInfo">
              <h3>Fault Information</h3>
              <div className="form_group">
                  <label htmlFor="state">State</label>
                  <input 
                    type="text" 
                    name="state"
                    value={state}
                    onChange={e => {setState(e.target.value)}}        
                  />
              </div>
              <div className="form_group">
                  <label htmlFor="lga">LGA</label>
                  <input  
                    type="text" 
                    name="lga"
                    value={lga}
                    onChange={e => {setLga(e.target.value)}}
                  />
              </div>
              <div className="form_group">
                  <label htmlFor="address">Address</label>
                  <input  
                    type="text" 
                    name="address"
                    value={address}
                    onChange={e => {setAddress(e.target.value)}}
                  />
              </div>
              <div className="form_group">
                  <label htmlFor="asset">Select Asset</label>
                  <input  
                    type="text" 
                    name="asset"
                    value={asset}
                    onChange={e => {setAsset(e.target.value)}}
                  />
              </div>
              <div className="form_group">
                  <label htmlFor="fault description">Fault description</label>
                  <textarea
                    value={description}
                    name="description"
                    onChange={e => {setdescription(e.target.value)}}
                  ></textarea>
              </div>
              <div className="form_group">
                  <label htmlFor="upload image">Upload image</label>
                  
                  <div className="file-select">
                    <div className="choose-file">
                      <input 
                        type="file" 
                        onChange={e => {setFileSelected(e.target.files[0]?.name)}}
                        accept=".png, .jpg, .jpeg"
                        ref={file}
                      />
                      <div className="choose-file-span">
                        <span id='val'>choose file</span>
                        <span id='button'>{fileselected === ''  ? 'No files uploaded yet' : fileselected}</span>
                      </div>
                    </div>
                  </div>
              </div>

              
            </div>
            
            <div className="btn-submit">
              <input type="submit" value="Report Fault" />
            </div>
            
          </form>
        </div>
      </section>

      <Modal/>
    </>
  );
}

export default App;
