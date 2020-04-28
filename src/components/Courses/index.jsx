import React from 'react';

function Courses() {
  const [list, setList] = React.useState(JSON.parse(localStorage.getItem('courses')) || []);

  React.useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(list));
  });

  function AddCourse() {
    const nextId = (list.length > 0) ? list[list.length-1].id + 1 : 0;
    const [isAdding, setAdding] = React.useState(false);
    const [formData, updateFormData] = React.useState({ id: nextId, course: "", school: "", year: "" });

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
      setList(list.concat(formData));
      setAdding(!isAdding);
    }

    if(isAdding) {
      return (
        <form>
          <label htmlFor="addCourse">Course Name</label>
          <input id="addCourse" name="course" onChange={handleChange} />

          <label htmlFor="addSchool">School</label>
          <input id="addSchool" name="school" onChange={handleChange} />

          <label htmlFor="addYear">Year</label>
          <input id="addYear" name="year" onChange={handleChange} />

          <button type="submit" onClick={handleSubmit}>SAVE</button>
          <button type="reset" onClick={toggleAdding}>CANCEL</button>
        </form>
      )
    }
    else {
      return (
        <button type="button" onClick={toggleAdding}>ADD COURSE</button>
      )
    }
  }

  function EditCourse({ course }) {
    const [isEditing, setEditing] = React.useState(false);
    const [formData, updateFormData] = React.useState({ id: course.id, course: course.course, school: course.school, year: course.year });

    function toggleEditing() {
      setEditing( !isEditing );
    }

    function cancelEditing() {
      updateFormData({ id: course.id, course: course.course, school: course.school, year: course.year });
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
          if(item.id === course.id) {
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
          <label htmlFor="addCourse">Course Name</label>
          <input id="addCourse" name="course" value={formData.course} onChange={handleEditing} />

          <label htmlFor="addSchool">School</label>
          <input id="addSchool" name="school" value={formData.school} onChange={handleEditing} />

          <label htmlFor="addYear">Year</label>
          <input id="addYear" name="year" value={formData.year} onChange={handleEditing} />

          <button type="submit" onClick={handleSubmit}>SAVE</button>
          <button type="reset" onClick={cancelEditing}>CANCEL</button>
        </form>
      )
    }
    else {
      return (
        <button type="button" onClick={toggleEditing}><b>{course.course}</b><br />{course.school} ({course.year})</button>
      )
    }
  }

  function RemoveCourse({ id }) {
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
        <h4>Courses and others</h4>
      </div>
      <div className="col-detail">
        <div className="editable-container">
          {list.map(course => (
            <p className="editable-content">
              <EditCourse course={course} />
              <RemoveCourse id={course.id} />
            </p>
          ))}
        </div>
        <AddCourse />
      </div>
    </div>
  );
}

export default Courses;
