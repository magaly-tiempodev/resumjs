import React from 'react';

function Languages() {
  return (
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
          <button className="btn btn-create">ADD LANGUAGE</button>
        </p>
      </div>
    </div>
  );
}

export default Languages;
