import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="container">


      <header>
        <div className="hr"></div>
        <img className="logo" src={logo} alt="tiempo development" />
      </header>


      <h1>Full Name</h1>


      <div className="row">
        <div className="col-title">
          <h4>Technical Profile</h4>
        </div>
        <div className="col-detail">
          <ul className="editable-container">
            <li className="editable-content">
              Lorem ipsum
              <button className="btn btn-edit">&#9998;</button>
              <button className="btn btn-delete">&#10005;</button>
            </li>
            <li className="editable-content">
              <b>Tool Summary</b> Lorem, Ipsum
              <button className="btn btn-edit">&#9998;</button>
              <button className="btn btn-delete">&#10005;</button>
            </li>
          </ul>
          <button className="btn btn-create">ADD TECH</button>
        </div>
      </div>


      <div className="row m">
        <div className="col-title">
          <h4>Professional Experience</h4>
        </div>
        <div className="col-detail">
          <div className="detail-container">
            <div className="detail-content">
              <div className="row row-m">
                <div className="col">
                  <b>Start date</b> - <b>End date</b>
                </div>
                <div className="col col-p">
                  <b>Company Name</b>
                </div>
                <div className="col align-right">
                  <b>Company location</b>
                </div>
              </div>
              <div>
                <b>Position in this company</b>
                <b className="detail-note">GO TO DETAIL TO EDIT</b>
              </div>
              <ul className="editable-container">
                <li className="editable-content">
                  Lorem ipsum
                  <button className="btn btn-edit">&#9998;</button>
                  <button className="btn btn-delete">&#10005;</button>
                </li>
                <li className="editable-content">
                  <b>Tool Summary</b> Lorem, Ipsum
                  <button className="btn btn-edit">&#9998;</button>
                  <button className="btn btn-delete">&#10005;</button>
                </li>
              </ul>
            </div>
          </div>
          <button className="btn btn-create">ADD EXPERIENCE</button>
        </div>
      </div>


      <div className="row m">
        <div className="col-title">
          <h4>Education</h4>
        </div>
        <div className="col-detail">
          <div className="editable-container">
            <p className="editable-content">
              <b>Degree</b> in 'Title'
              <br />School Name (YearStart - YearEnd)
              <button className="btn btn-edit">&#9998;</button>
              <button className="btn btn-delete">&#10005;</button>
            </p>
          </div>
          <button className="btn btn-create">ADD EDUCATION</button>
        </div>
      </div>


      <div className="row m">
        <div className="col-title">
          <h4>Courses and others</h4>
        </div>
        <div className="col-detail">
          <div className="editable-container">
                <p className="editable-content">
                  <b>Course name</b><br />School (Year)
                  <a className="btn btn-edit">&#9998;</a>
                  <a className="btn btn-delete">&#10005;</a>
                </p>
          </div>
          <button className="btn btn-create">ADD COURSE</button>
        </div>
      </div>


      <div className="row m">
        <div className="col-title">
          <h4>Language Skills</h4>
        </div>
        <div className="col-detail">
          <div className="editable-container">
            <div className="editable-content">
              <b>Language</b>: Level
              <button className="btn btn-edit">&#9998;</button>
              <button className="btn btn-delete">&#10005;</button>
            </div>
          </div>
          <p>
            <button className="btn btn-create">ADD LANGUAJE</button>
          </p>
        </div>
      </div>


    </div>
  );
}

export default App;
