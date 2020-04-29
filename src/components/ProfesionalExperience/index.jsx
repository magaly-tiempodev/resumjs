import React from 'react';

function ProfesionalExperience () {
  const [list, setList] = React.useState(JSON.parse(localStorage.getItem('experience')) || []);

  React.useEffect(() => {
    localStorage.setItem('experience', JSON.stringify(list));
  });

  function AddJobExperience() {
    const nextId = (list.length > 0) ? list[list.length-1].id + 1 : 0;
    const [formData, updateFormData] = React.useState({ id: nextId, company: "", location: "", position: "", start: "", end: "", exp: [], tech: "" });
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
          <label>Start Date</label>
          <input type="text" name="start" onChange={handleChange} />

          <label>End Date</label>
          <input type="text" name="end" onChange={handleChange} />

          <label>Company Name</label>
          <input type="text" name="company" onChange={handleChange} />

          <label>Company Location</label>
          <input type="text" name="location" onChange={handleChange} />

          <label>Position</label>
          <input type="text" name="position" onChange={handleChange} />

          <button type="submit" onClick={handleSubmit}>SAVE</button>
          <button type="reset" onClick={toggleAdding}>CANCEL</button>
        </form>
      )
    }
    else {
      return (
        <p><button type="text" onClick={toggleAdding}>ADD EXPERIENCE</button></p>
      )
    }
  }
  function EditJobExperience({ experience }) {
    return (
      <button type="button">
        <div className="row row-m">
          <div className="col">
            <b>{experience.start}</b> - <b>{experience.end}</b>
          </div>
          <div className="col col-p">
            <b>{experience.company}</b>
          </div>
          <div className="col align-right">
            <b>{experience.location}</b>
          </div>
        </div>
        <div>
          <b>{experience.position}</b>
        </div>
      </button>
    )
  }
  function RemoveJobExperience({ id }) {
    function handleRemove() {
      setList(list.filter(item => item.id !== id));
    }
    return (
      <button type="button" onClick={handleRemove}>Remove</button>
    )
  }

  function AddExperienceItem() {
    return (
      <button type="button">ADD ITEM</button>
    )
  }
  function EditExperienceItem() {
    return (
      <button type="button">Lorem Ipsum</button>
    )
  }
  function RemoveExperienceItem() {
    return (
      <button type="button">Remove</button>
    )
  }
  function TechnologyExperience() {
    return (
      <React.Fragment>
        <b>Technology:</b>
        <button type="button">PHP, MySQL, JavaScript</button>
      </React.Fragment>
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
            <div className="editable-content" key={experience.id}>
              <EditJobExperience experience={experience} />
              <RemoveJobExperience id={experience.id} />
              <ul>

                  <li >
                    <EditExperienceItem />
                    <RemoveExperienceItem />
                  </li>


                <li>
                  <AddExperienceItem />
                </li>
                <li>
                  <TechnologyExperience />
                </li>
              </ul>
            </div>
          ))}
        </div>
        <AddJobExperience />
      </div>
    </div>
  );
}

export default ProfesionalExperience;
