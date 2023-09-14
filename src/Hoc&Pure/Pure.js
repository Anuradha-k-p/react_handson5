import React, { useState } from 'react';
import "./Style.css"

const PureForm = () => {
  const [Data, setData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...Data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', Data);
  };

  return (
    <div className='main'>
        <div className='child' id='child'>
            <h1>This is created <br/> using pure Component</h1>
            <p>Defination:Component is Pure if
Return value is only determined by it’s input values
It’s return value is always the same for the same input values
Class components that extend the React.PureComponent class are treated as pure
component </p>

        </div>
        <div className='child'>
      <form onSubmit={handleSubmit} className='form'>
          <label htmlFor="name">Name:  </label>
          <input type="text" id="name"  name="name"  value={Data.name} onChange={handleChange} required /><br/>
       
          <label htmlFor="contact">Contact :</label>
          <input  type="contact"  id="contact"  name="contact"  value={Data.contact} onChange={handleChange} required /><br/>
       
          <label htmlFor="email">Email:</label>
          <input  type="email"  id="email"  name="email"  value={Data.email} onChange={handleChange} required /><br/>
       
          <button type="submit">Pure Compo</button>
      
      </form>
      </div>
    </div>
  );
};

export default PureForm;
