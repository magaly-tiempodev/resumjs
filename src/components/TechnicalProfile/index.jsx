import React from 'react';
import TechSummary from './TechSummary';

function TechnicalProfile() {
  const [list, setList] = React.useState(JSON.parse(localStorage.getItem('technical')) || []);

  React.useEffect(() => {
    localStorage.setItem('technical', JSON.stringify(list));
  });

  function AddTech() {
    const nextId = (list.length > 0) ? list[list.length-1].id + 1 : 0;
    const [isAdding, setAdding] = React.useState(false);
    const [formData, updateFormData] = React.useState({ id: nextId, tech: "" });

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
          <label htmlFor="addTech">Technical item</label>
          <input id="addTech" name="tech" onChange={handleChange} />

          <button type="submit" onClick={handleSubmit}>SAVE</button>
          <button type="reset" onClick={toggleAdding}>CANCEL</button>
        </form>
      )
    }
    else {
      return (
        <button type="button" onClick={toggleAdding}>ADD TECHNICAL ITEM</button>
      )
    }
  }

  function EditTech({ tech }) {
    const [isEditing, setEditing] = React.useState(false);
    const [formData, updateFormData] = React.useState({ id: tech.id, tech: tech.tech });

    function toggleEditing() {
      setEditing(!isEditing);
    }

    function cancelEditing() {
      updateFormData({ id: tech.id, tech: tech.tech })
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
          if(item.id === tech.id) {
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
          <label htmlFor="addTech">Technical item</label>
          <input id="addTech" name="tech" value={formData.tech} onChange={handleEditing} />

          <button type="submit" onClick={handleSubmit}>SAVE</button>
          <button type="reset" onClick={cancelEditing}>CANCEL</button>
        </form>
      )
    }
    else {
      return (
        <button type="button" onClick={toggleEditing}>{tech.tech}</button>
      )
    }
  }

  function RemoveTech({ id }) {
    function handleRemove() {
      setList(list.filter(item => item.id !== id));
    }

    return (
      <button type="button" onClick={handleRemove}>Remove</button>
    )
  }

  return (
    <div className="row">
      <div className="col-title">
        <h4>Technical Profile</h4>
      </div>
      <div className="col-detail">
        <ul className="editable-container">
          {list.map(tech => (
            <li className="editable-content" key={tech.id}>
              <EditTech tech={tech} />
              <RemoveTech id={tech.id} />
            </li>
          ))}
          <li>
            <AddTech />
          </li>
          <li className="editable-content">
            <TechSummary />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TechnicalProfile;
