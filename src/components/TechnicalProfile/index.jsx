import React from 'react';
import Button from '../shared/Button';

function TechnicalProfile() {
  const list = [
    'Software Engineer with 10+ years of experience in software development specializing in web applications, mostly in the client side along JavaScript libraries.',
    'Working under server side having extensive experience with PHP and MySQL building platforms and/or REST APIs with MVC frameworks like Symfony and CodeIgniter.',
    'Experience using other technologies like MongoDB and NodeJS.',
    'Fish in water talking about the front-end with good knowledge in design, trying to push up UX and make pixel perfect all the time.',
    'Experience working on several libraries and frameworks of JavaScript and CSS.'
  ]

  return (
    <div className="row">
      <div className="col-title">
        <h4>Technical Profile</h4>
      </div>
      <div className="col-detail">
        <ul className="editable-container">
          {list.map(item => (
            <li className="editable-content" key={item}>
              {item}
              <button className="btn btn-edit">&#9998;</button>
              <button className="btn btn-delete">&#10005;</button>
            </li>
          ))}
          <li><button>add tech</button></li>
          <li className="editable-content">
            <b>Technology Summary:</b> Lorem, Ipsum
            <button className="btn btn-edit">&#9998;</button>
            <button className="btn btn-delete">&#10005;</button>
          </li>
        </ul>
              </div>
            </div>
  );
}

export default TechnicalProfile;
