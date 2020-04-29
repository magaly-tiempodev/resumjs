import React from 'react';
import './Courses.css';

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
          <div className="course-form">
            <div className="course-form-input">
              <label htmlFor="addCourse">Course Name</label>
              <input className="content bold" id="addCourse" name="course" onChange={handleChange} />
            </div>
          </div>
          <div className="course-form">
            <div className="course-form-input">
              <label htmlFor="addSchool">School</label>
              <input className="content" id="addSchool" name="school" onChange={handleChange} />
            </div>
            <div className="course-form-input">
              <label htmlFor="addYear">Year</label>
              <div className="course-form-year">(<input className="content" id="addYear" name="year" onChange={handleChange} />)</div>
            </div>
          </div>
          <button type="submit" onClick={handleSubmit}>SAVE</button>
          <button type="reset" onClick={toggleAdding}>CANCEL</button>
        </form>
      )
    }
    else {
      return (
        <button className="add" type="button" onClick={toggleAdding}>ADD COURSE</button>
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
          <div className="course-form">
            <div className="course-form-input">
              <label htmlFor="addCourse">Course Name</label>
              <input className="content bold" id="addCourse" name="course" value={formData.course} onChange={handleEditing} />
            </div>
          </div>
          <div className="course-form">
            <div className="course-form-input">
              <label htmlFor="addSchool">School</label>
              <input className="content" id="addSchool" name="school" value={formData.school} onChange={handleEditing} />
            </div>
            <div className="course-form-input">
              <label htmlFor="addYear">Year</label>
              <div className="course-form-year">(<input className="content" id="addYear" name="year" value={formData.year} onChange={handleEditing} />)</div>
            </div>
          </div>
          <button type="submit" onClick={handleSubmit}>SAVE</button>
          <button type="reset" onClick={cancelEditing}>CANCEL</button>
        </form>
      )
    }
    else {
      return (
        <button className="content" type="button" onClick={toggleEditing}>
          <b>{course.course}</b><br />
          {course.school} ({course.year})
        </button>
      )
    }
  }

  function RemoveCourse({ id }) {
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
        <h4>Courses and others</h4>
      </div>
      <div className="col-detail">
        <div className="editable-container">
          {list.map(course => (
            <div className="editable-content mb" key={course.id}>
              <RemoveCourse id={course.id} />
              <EditCourse course={course} />
            </div>
          ))}
        </div>
        <AddCourse />
      </div>
    </div>
  );
}

export default Courses;
