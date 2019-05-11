import React, { Component } from 'react';

class AddStudent extends Component {
  state = {
    firstname: '',
    lastname: '',
    class: '',
    contact: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleClick = e => {
    e.preventDefault();
    this.props.addStudent(this.state);
    this.setState({
      firstname: '',
      lastname: '',
      class: '',
      contact: ''
    })
  }

  render() {

    if(!this.props.wantToEdit){
      return(
        <form className="row no-gutters">

          <div className="form-group col">
            <input type="text" id="firstname" onChange={ this.handleChange } className="form-control"  value={this.state.firstname} placeholder="First Name"/>
          </div>

          <div className="form-group col">
            <input type="text" id="lastname" onChange={ this.handleChange } className="form-control"  value={this.state.lastname} placeholder="Last Name"/>
          </div>

          <div className="form-group col  mx-2">
            <input type="text" id="class" onChange={ this.handleChange } className="form-control" value={this.state.class} placeholder="Class"/>
          </div>

          <div className="form-group col">
            <input type="text" id="contact" onChange={ this.handleChange } className="form-control" value={this.state.contact} placeholder="Phone Number"/>
          </div>

          <div className="form-group col-2 ml-2">
            <button onClick={ this.handleClick } className="btn btn-success btn-block">Submit</button>
          </div>

        </form>
      )
    }else{
      return(null)
    }

  }
}

export default AddStudent;
