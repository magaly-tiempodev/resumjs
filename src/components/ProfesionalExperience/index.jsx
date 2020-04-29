import React from 'react';
import './ProfesionalExperience.css';

function ProfesionalExperience () {
  const [list, setList] = React.useState(JSON.parse(localStorage.getItem('experience')) || []);

  React.useEffect(() => {
    localStorage.setItem('experience', JSON.stringify(list));
  });

  function AddJobExperience() {
    const nextId = (list.length > 0) ? list[list.length-1].id + 1 : 0;
    const [formData, updateFormData] = React.useState({
      id: nextId,
      company: "",
      location: "",
      position: "",
      start: "",
      end: "",
      exp: "",
      tech: ""
    });
    const [isAdding, setAdding] = React.useState(false);

    function toggleAdding() {
      setAdding(!isAdding);
    }
    function handleChange(e) {
      updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim()
      });
    }
    function handleSubmit(e) {
      e.preventDefault();
      setList(list.concat(formData));
      setAdding(!isAdding);
    }

    if(isAdding) {
      return (
        <form>
          <div className="experience-form m">
            <div className="experience-form">
              <div className="experience-form-input">
                <label>Start Date</label>
                <input className="content bold" type="text" name="start" onChange={handleChange} />
              </div>
              <div className="experience-form-text">-</div>
              <div className="experience-form-input">
                <label>End Date</label>
                <input className="content bold" type="text" name="end" onChange={handleChange} />
              </div>
            </div>
            <div className="experience-form-text"></div>
            <div className="experience-form-input">
              <label>Company Name</label>
              <input className="content bold" type="text" name="company" onChange={handleChange} />
            </div>
            <div className="experience-form-text"></div>
            <div className="experience-form-input">
              <label>Company Location</label>
              <input className="content bold" type="text" name="location" onChange={handleChange} />
            </div>
          </div>
          <div className="experience-form">
            <div className="experience-form-input">
              <label>Position</label>
              <input className="content bold" type="text" name="position" onChange={handleChange} />
            </div>
          </div>
          <div className="experience-form-sub">
            <div className="experience-form-input">
              <label>Experience</label>
              <textarea rows="5" className="content" name="exp" onChange={handleChange} />
            </div>
          </div>
          <div className="experience-form-sub">
            <div className="experience-form-input">
              <label>Tecnnology</label>
              <input type="text" className="content" name="tech" onChange={handleChange} />
            </div>
          </div>
          <button type="submit" onClick={handleSubmit}>SAVE</button>
          <button type="reset" onClick={toggleAdding}>CANCEL</button>
        </form>
      )
    }
    else {
      return (
        <p><button className="add" type="text" onClick={toggleAdding}>ADD EXPERIENCE</button></p>
      )
    }
  }
  function EditJobExperience({ experience }) {
    const [isEditing, setEditing] = React.useState(false);
    const [formData, updateFormData] = React.useState({
      id: experience.id,
      start: experience.start,
      end: experience.end,
      company: experience.company,
      location: experience.location,
      position: experience.position,
      exp: experience.exp,
      tech: experience.tech
    });

    function toggleEditing(){
      setEditing( !isEditing );
    }
    function cancelEditing() {
      updateFormData({
        id: experience.id,
        start: experience.start,
        end: experience.end,
        company: experience.company,
        location: experience.location,
        position: experience.position,
        exp: experience.exp,
        tech: experience.tech
      })
      setEditing(!isEditing);
    }
    function handleEditing(e) {
      updateFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
    function handleSubmit(e) {
      e.preventDefault();
      setList(
        list.map(item => {
          if(item.id === experience.id) {
            return formData;
          }
          else {
            return item;
          }
        })
      )
    }

    if(isEditing) {
      return (
        <form>
          <div className="experience-form m">
            <div className="experience-form">
              <div className="experience-form-input">
                <label>Start Date</label>
                <input className="content bold" type="text" name="start" value={formData.start} onChange={handleEditing} />
              </div>
              <div className="experience-form-text">-</div>
              <div className="experience-form-input">
                <label>End Date</label>
                <input className="content bold" type="text" name="end" value={formData.end} onChange={handleEditing} />
              </div>
            </div>
            <div className="experience-form-text"></div>
            <div className="experience-form-input">
              <label>Company Name</label>
              <input className="content bold" type="text" name="company" value={formData.company} onChange={handleEditing} />
            </div>
            <div className="experience-form-text"></div>
            <div className="experience-form-input">
              <label>Company Location</label>
              <input className="content bold" type="text" name="location" value={formData.location} onChange={handleEditing} />
            </div>
          </div>
          <div className="experience-form">
            <div className="experience-form-input">
              <label>Position</label>
              <input className="content bold" type="text" name="position" value={formData.position} onChange={handleEditing} />
            </div>
          </div>
          <div className="experience-form-sub">
            <div className="experience-form-input">
              <label>Experience</label>
              <textarea rows="5" className="content" name="exp" value={formData.exp} onChange={handleEditing} />
            </div>
          </div>
          <div className="experience-form-sub">
            <div className="experience-form-input">
              <label>Tecnnology</label>
              <input type="text" className="content" name="tech" value={formData.tech} onChange={handleEditing} />
            </div>
          </div>
          <button type="submit" onClick={handleSubmit}>SAVE</button>
          <button type="reset" onClick={cancelEditing}>CANCEL</button>
        </form>
      )
    }
    else {
      let experiencelist = experience.exp.split('\n').map(li => (<li key={li}>{li}</li>));
      return (
        <button className="content" type="button" onClick={toggleEditing}>
          <div className="row bold">
            <div className="col">{experience.start} - {experience.end}</div>
            <div className="col-p">{experience.company}</div>
            <div className="col align-right">{experience.location}</div>
          </div>
          <div><b>{experience.position}</b></div>
          <ul>
            {experiencelist}
            <li><b>Tecnnology:</b> {experience.tech}</li>
          </ul>
        </button>
      )
    }
  }
  function RemoveJobExperience({ id }) {
    function handleRemove() {
      setList(list.filter(item => item.id !== id));
    }
    return (
      <button className="remove" type="button" onClick={handleRemove}>&times;</button>
    )
  }

  return (
    <div className="row m">
      <div className="col-title">
        <h4>Professional Experience</h4>
      </div>
      <div className="col-detail">
        <div className="editable-container">
          {list.map(experience => (
            <div className="editable-content m" key={experience.id}>
              <RemoveJobExperience id={experience.id} />
              <EditJobExperience experience={experience} />
            </div>
          ))}
        </div>
        <AddJobExperience />
      </div>
    </div>
  );
}

export default ProfesionalExperience;
