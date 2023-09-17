import React from 'react';

function FormPreview({ formFields }) {
  return (
    <div className="form-preview">
      <h2>Form Preview</h2>
      <form>
        {formFields.map((field, index) => (
          <div key={index} className="form-field">
            <label>{field.label}:</label>
            {field.type === 'text' && <input type="text" />}
            {field.type === 'textarea' && <textarea rows="4" cols="50"></textarea>}
            {field.type === 'dropdown' && (
              <select>
                {field.options.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            {field.type === 'checkbox' && <input type="checkbox" />}
            {field.type === 'radio' && <input type="radio" />}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPreview;
