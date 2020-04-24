import React from 'react';

function Courses() {
  return (
    <div className="row m">
      <div className="col-title">
        <h4>Courses and others</h4>
      </div>
      <div className="col-detail">
        <div className="editable-container">
          <p className="editable-content">
            <b>Course name</b><br />School (Year)
            <button className="btn btn-edit">&#9998;</button>
            <button className="btn btn-delete">&#10005;</button>
          </p>
        </div>
        <button className="btn btn-create">ADD COURSE</button>
      </div>
    </div>
  );
}

export default Courses;
