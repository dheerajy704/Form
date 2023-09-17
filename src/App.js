import React, { useState } from 'react';
import FormBuilder from './FormBuilder';
import FormPreview from './FormPreview';

function App() {
  const [formFields, setFormFields] = useState([]);

  return (
    <div className="App">
      <h1>Dynamic Form Generator</h1>
      <FormBuilder formFields={formFields} setFormFields={setFormFields} />
      <FormPreview formFields={formFields} />
    </div>
  );
}

export default App;
