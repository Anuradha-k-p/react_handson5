import React from 'react';
import Form_Data from './Data';
import "./Style.css"

const Form = (props) => {
  const { formData, handleChange, handleSubmit } = props;

  return (
    <div className='main'>
         <div className='child' id='child'>
            <h1>This is created <br/> using Hoc Component</h1>

        </div>


    <div  className='child'>
    <form onSubmit={handleSubmit} className='form'>
        <label htmlFor='name'>Name :  </label>
      <input type="text" id="name" name="name" placeholder="Name" value={formData.name || ''} onChange={handleChange}  /> <br/>

      <label htmlFor="contact">Contact :</label>
          <input  type="contact"  id="contact"  name="contact"  placeholder="contact" value={formData.contact} onChange={handleChange} required /><br/>

      <label htmlFor='email'>E-mail :  </label>
      <input type="email" id='email' name="email" placeholder="Email" value={formData.email || ''}  onChange={handleChange} /> <br/>

      <button type="submit">Hoc Compo</button>
    </form>
    </div>
    </div>
  );
};

export default Form_Data(Form); 
