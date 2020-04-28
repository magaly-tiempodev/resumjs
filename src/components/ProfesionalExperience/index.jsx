import React from 'react';

function ProfesionalExperience () {
  return (
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
                <b>Technology Summary</b> Lorem, Ipsum
                <button className="btn btn-edit">&#9998;</button>
                <button className="btn btn-delete">&#10005;</button>
              </li>
            </ul>
          </div>
        </div>
        <button className="btn btn-create">ADD EXPERIENCE</button>
      </div>
    </div>
  );
}

export default ProfesionalExperience;