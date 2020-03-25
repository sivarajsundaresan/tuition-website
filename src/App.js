import React, { Fragment } from 'react';
import './App.css';

function App() {
  return (
    <Fragment>
      <div className="hero-image">
        <div className="hero-header">
          <h2 style={{fontSize: '100px'}}>SSS ACADEMY</h2>
        </div>
        <div className="row">
          <div className="column">
              <p style={{fontSize: '70px', color: '#CC9900'}}>Entrance Examination</p>
              <p style={{fontSize: '30px'}}>NEET, JEE, KVPY, Olympiad Exam, <br/> TNPSC,  GMAT, CTET <br/> CA Foundation (Mathematics)</p>
              <br/>
              <br/>
              <p style={{fontSize: '30px'}}><b>Dr.K.S.Radhakrishna, Dr.R.Pandian</b> <br/> Contact: 9865654462, 9790197825 <br/> Email: sssacademy2000@gmail.com</p>
          </div>
          <div className="column">
            <p style={{fontSize: '70px', color: '#CC9900'}}>Regular Classes</p>
            <p style={{fontSize: '30px'}}><b>9th, 10th, 11th, 12th</b> (ICSE, CBSE, STATE BOARD)</p>
            <p style={{fontSize: '30px'}}><b>B.E (Mathematics)</b></p>
            <p style={{fontSize: '30px'}}><b>B.Sc, M.Sc (Maths, Chemistry)</b></p>
            <br/><br/>
            <p className='home-tuition'>Home Tuition Avaliable</p>
          </div>
        </div>
        <div className="footer">
          <p className="address"><b>Kalai Complex:</b> 1st Floor, Thennan Salai Road, 3rd Cross Extn, Elango Nagar, Puducherry - 605 013</p>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
