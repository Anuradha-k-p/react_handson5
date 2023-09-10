import React, { Component } from 'react';

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
      return (
        <FormComponent
          {...this.props}
          formData={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  };
};

export default Form_Data;
