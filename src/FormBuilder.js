import React, { useState } from 'react';

function FormBuilder({ formFields, setFormFields }) {
  const [newField, setNewField] = useState({ label: '', type: 'text', options: [] });

  const handleAddField = () => {
    setFormFields([...formFields, newField]);
    setNewField({ label: '', type: 'text', options: [] });
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...formFields];
    updatedFields.splice(index, 1);
    setFormFields(updatedFields);
  };

  return (
    <div className="form-builder">
      <h2>Form Builder</h2>
      <div className="form-field">
        <label>Field Label:</label>
        <input
          type="text"
          value={newField.label}
          onChange={(e) => setNewField({ ...newField, label: e.target.value })}
        />
      </div>
      <div className="form-field">
        <label>Field Type:</label>
        <select
          value={newField.type}
          onChange={(e) => setNewField({ ...newField, type: e.target.value })}
        >
          <option value="text">Text Input</option>
          <option value="textarea">Text Area</option>
          <option value="dropdown">Dropdown</option>
          <option value="checkbox">Checkbox</option>
          <option value="radio">Radio Button</option>
        </select>
      </div>
      {newField.type === 'dropdown' && (
        <div className="form-field">
          <label>Dropdown Options:</label>
          <input
            type="text"
            placeholder="Enter options separated by commas"
            value={newField.options.join(',')}
            onChange={(e) => setNewField({ ...newField, options: e.target.value.split(',') })}
          />
        </div>
      )}
      <button onClick={handleAddField}>Add Field</button>
      <div className="form-fields-list">
        {formFields.map((field, index) => (
          <div key={index} className="form-field">
            <span>{field.label}</span>
            <button onClick={() => handleRemoveField(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FormBuilder;
