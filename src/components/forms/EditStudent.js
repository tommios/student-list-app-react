import React, { Component } from "react";

class EditStudent extends Component {
  state = {
    id: "",
    firstname: "",
    lastname: "",
    class: "",
    contact: "",
  };

  componentDidUpdate(prevProps) {
    if (this.props.editData.id !== prevProps.editData.id) {
      this.setState({
        id: this.props.editData.id,
        firstname: this.props.editData.firstname,
        lastname: this.props.editData.lastname,
        class: this.props.editData.class,
        contact: this.props.editData.contact,
      });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleClick = e => {
    e.preventDefault();
    this.props.editStudent(this.state);
    this.setState({
      id: "",
      firstname: "",
      lastname: "",
      class: "",
      contact: "",
    });
  };

  render() {
    if (this.props.wantToEdit) {
      return (
        <form className="row no-gutters">
          <div className="form-group col">
            <input
              type="text"
              id="firstname"
              onChange={this.handleChange}
              className="form-control"
              value={this.state.firstname}
              placeholder="First Name"
            />
          </div>

          <div className="form-group col">
            <input
              type="text"
              id="lastname"
              onChange={this.handleChange}
              className="form-control"
              value={this.state.lastname}
              placeholder="Last Name"
            />
          </div>

          <div className="form-group col  mx-2">
            <input
              type="text"
              id="class"
              onChange={this.handleChange}
              className="form-control"
              value={this.state.class}
              placeholder="Class"
            />
          </div>

          <div className="form-group col">
            <input
              type="text"
              id="contact"
              onChange={this.handleChange}
              className="form-control"
              value={this.state.contact}
              placeholder="Phone Number"
            />
          </div>

          <div className="form-group col-2 ml-2">
            <button
              onClick={this.handleClick}
              className="btn btn-primary btn-block"
            >
              {" "}
              Update{" "}
            </button>{" "}
          </div>
        </form>
      );
    } else {
      return null;
    }
  }
}

export default EditStudent;
