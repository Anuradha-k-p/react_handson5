import React from 'react';
import Form_Data from './Data';
import "./Style.css"

const Form = (props) => {
  const { formData, handleChange, handleSubmit } = props;

  return (
    <div className='main'>
         <div className='child' id='child'>
            <h1>This is created <br/> using Hoc Component</h1>
            <p>Defination :In React, a Higher-Order Component (HOC) is a function that takes a 
component as an input and returns a new component with additional 
functionality. Essentially, it's a way to reuse component logic and share 
it between different components.
To use a HOC, you simply pass your component as an argument to the 
function that defines the HOC. The function returns a new component with 
the added functionality.</p>
<p> in above example  on hover height of both captions of form get incresead and color get changed,but background color for both is different.for first caption letters are seprated on hover and for second separeted letter comes close </p>

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

