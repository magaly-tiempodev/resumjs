import React from 'react';

function Education() {
  const [list, setList] = React.useState(JSON.parse(localStorage.getItem('education')) || []);

  React.useEffect(() => {
    localStorage.setItem('education', JSON.stringify(list));
  });

  function AddEducation() {
    const nextId = (list.length > 0) ? list[list.length-1].id + 1 : 0;
    const [isAdding, setAdding] = React.useState(false);
    const [formData, updateFormData] = React.useState({ id: nextId, degree: "", title: "", school: "", start: "", end: "" });

    function toggleAdding() {
      setAdding( !isAdding );
    }

    function handleChange(e) {
      updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim()
      });
    }

    function handleSubmit(e) {
      e.preventDefault();
      setList( list.concat(formData) );
      setAdding( !isAdding );
    }

    if(isAdding) {
      return (
        <form>
          <label htmlFor="addDegree">Degree</label>
          <input id="addDegree" name="degree" onChange={handleChange} />

          <label htmlFor="addTitle">Title</label>
          <input id="addTitle" name="title" onChange={handleChange} />

          <label htmlFor="addSchool">School</label>
          <input id="addSchool" name="school" onChange={handleChange} />

          <label htmlFor="addStart">Year Start</label>
          <input id="addStart" name="start" onChange={handleChange} />

          <label htmlFor="addEnd">Year End</label>
          <input id="addEnd" name="end" onChange={handleChange} />

          <button type="submit" onClick={handleSubmit}>SAVE</button>
          <button type="reset" onClick={toggleAdding}>CANCEL</button>
        </form>
      )
    }
    else {
      return (
        <button type="button" onClick={toggleAdding}>ADD EDUCATION</button>
      )
    }
  }

  function EditEducation({ education }) {
    const [isEditing, setEditing] = React.useState(false);
    const [formData, updateFormData] = React.useState({ id: education.id, degree: education.degree, title: education.title, school: education.school, start: education.start, end: education.end });

    function toggleEditing() {
      setEditing( !isEditing );
    }

    function cancelEditing() {
      updateFormData({ id: education.id, degree: education.degree, title: education.title, school: education.school, start: education.start, end: education.end });
      setEditing( !isEditing );
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
          if(item.id === education.id) {
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
          <label htmlFor="addDegree">Degree</label>
          <input id="addDegree" name="degree" value={formData.degree} onChange={handleEditing} />

          <label htmlFor="addTitle">Title</label>
          <input id="addTitle" name="title" value={formData.title} onChange={handleEditing} />

          <label htmlFor="addSchool">School</label>
          <input id="addSchool" name="school" value={formData.school} onChange={handleEditing} />

          <label htmlFor="addStart">Year Start</label>
          <input id="addStart" name="start" value={formData.start} onChange={handleEditing} />

          <label htmlFor="addEnd">Year End</label>
          <input id="addEnd" name="end" value={formData.end} onChange={handleEditing} />

          <button type="submit" onClick={handleSubmit}>SAVE</button>
          <button type="reset" onClick={cancelEditing}>CANCEL</button>
        </form>
      )
    }
    else {
      return (
        <button type="button" onClick={toggleEditing}>
          <b>{education.degree}</b> in '{education.title}'
          <br />{education.school} ({education.start} - {education.end})
        </button>
      )
    }
  }

  function RemoveEducation({ id }) {
    function handleRemove() {
      setList(list.filter(item => item.id !== id));
    }
    return (
      <button type="button" onClick={handleRemove}>Remove</button>
    )
  }

  return (
    <div className="row m">
      <div className="col-title">
        <h4>Education</h4>
      </div>
      <div className="col-detail">
        <div className="editable-container">
          {list.map(education => (
            <p className="editable-content" key={education.id}>
              <EditEducation education={education} />
              <RemoveEducation id={education.id} />
            </p>
          ))}
        </div>
        <AddEducation />
      </div>
    </div>
  );
}

export default Education;
