import React,{useState,useEffect} from 'react'
import './Organise.css'
import "bootstrap/dist/css/bootstrap.min.css";


function Organise() {
    const [cols,setCols]=useState(60);
    const [screenSize,setScreenSize]=useState(null);

    useEffect(()=>{
        const handleResize=()=>setScreenSize(window.innerWidth);
        window.addEventListener('resize',handleResize);
        handleResize();
        return()=>window.removeEventListener('resize',handleResize);
    },[]);
    
    useEffect(()=>{
        if(screenSize>1500){
          setCols(50);
        }
        else if(screenSize<1500 && screenSize>1000){
            setCols(40);
        } else if(screenSize<992 && screenSize>800){
            setCols(50);
        }
        else if(screenSize>730){
          setCols(screenSize/20);
        }
        else if(screenSize>400){
          setCols(screenSize/15);
        }
        else{
          setCols(screenSize/10);
        }
        
        
    },[screenSize])
  return (
    <>
      <h2>Event Form</h2>
      <div className='form-box'>
    <form>
  <div class="form-group row">
    <div class="col-lg-3 col-md-5 col-sm-7">
    <label for="organisation-name" class="col-sm-12 col-form-label">Name of organisation</label>
      <input type="text" class="form-control" id="organisation-name" placeholder="Enter Organisation Name"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-lg-3 col-md-5 col-sm-7">
    <label for="event-name" class="col-sm-12 col-form-label">Event name</label>
      <input type="text" class="form-control" id="event-name" placeholder="Enter Event Name"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-lg-3 col-md-5 col-sm-7">
    <div><label for="event-description" class="col-sm-12 col-form-label">Event Description</label></div>
      <textarea rows="4" cols={cols} name="comment" placeholder='Below 50 words.'></textarea>
      {/* <input type="text"  class="form-control event-desc" id="event-description" placeholder="Enter Event Name"/> */}

    </div>
  </div>
  <div class="form-group row">
    <div class="col-lg-3 col-md-5 col-sm-7">
    <label for="event-date" class="col-sm-12 col-form-label">Date of Event</label>
      <input type="date" class="form-control" id="event-date" placeholder="Choose Event Date"/>

    </div>
  </div>
  <fieldset class="form-group row">
      <div class="col-lg-3 col-md-5 col-sm-7">
      <legend class="col-form-label col-sm-12 pt-0">Mode of event</legend>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
          <label class="form-check-label" for="gridRadios1">
           Online
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
          <label class="form-check-label" for="gridRadios2">
            Offline
          </label>
        </div>
      </div>
  </fieldset>

  <div class="form-group row">
    <div class="col-lg-3 col-md-5 col-sm-7">
    <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>Delhi</option>
        <option>Mumbai</option>
        <option>Haryana</option>
        <option>Punjab</option>
      </select>
    </div>
    </div>
 <div class="form-group row">
      <div class="col-lg-3 col-md-5 col-sm-7">
            <label>Upload Images</label> 
                <div class="input-group custom-file mb-3">
                    <input type="file" class="form-control" id="image" name="image"/>
                </div>
        </div>
        </div>
  
  <div class="form-group row">
    <div class="col-lg-3 col-md-5 col-sm-7">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
</div>
</>
  )
}

export default Organise
