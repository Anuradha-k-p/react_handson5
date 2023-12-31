
 import React, { Component } from 'react';
import "./Style.css"

const Form_Data = (FormComponent) => {
  return class FormWrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {}; 
    }

   
    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };

   
    handleSubmit = (e) => {
      e.preventDefault();
    };


    render() {
      return ( <>
        <FormComponent
       {...this.props}
       formData={this.state}
       handleChange={this.handleChange}
       handleSubmit={this.handleSubmit}
        />
        <h3 style={{background: "red"}} className='hoc1' > This is First Hoc</h3>
        
        <FormComponent


          {...this.props}
          formData={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <h3 style={{background: "green"}} className='hoc2'> This is Second Hoc</h3>
        </>
      );
    }
  };
};

export default Form_Data;
