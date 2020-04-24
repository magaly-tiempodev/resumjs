import React from 'react';

function Education() {
  return (
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
  );
}

export default Education;
