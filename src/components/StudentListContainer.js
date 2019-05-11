import React, { Component } from 'react';
import StudentTable from './tables/StudentTable';
import AddStudent from './forms/AddStudent';
import EditStudent from './forms/EditStudent';

class StudentListContainer extends Component {
  state = {
    students: [
      {id: 0, firstname:'John', lastname: 'Doe', class:'Programming', contact:'0661234567'},
      {id: 1, firstname:'John', lastname: 'Deer', class:'Java', contact:'0675534543'},
      {id: 2, firstname:'Jane', lastname: 'Olive', class:'Front End', contact:'0731234567'},
      {id: 3, firstname:'Adam', lastname: 'Smith', class:'Design', contact:'0991824567'},
    ],
    editStudents: {
      id: '',
      firstname: '',
      lastname: '',
      class: '',
      contact: ''
    },
    wantToEdit: false
  }

  addStudent = (student) => {
    student.id = this.state.students.length;
    const studentList = [...this.state.students, student];
    this.setState({
      students: studentList
    })
  }

  removeStudent = (id) => {
    const student = this.state.students.filter(student => {
      return student.id !== id;
    })

    const studentList = student;
    this.setState({
      students: studentList
    })
  }

  editStudent = (student) => {
    const students = [...this.state.students];
    students[student.id].firstname = student.firstname;
    students[student.id].lastname = student.lastname;
    students[student.id].class = student.class;
    students[student.id].contact = student.contact;

    this.setState(prevState => ({
      students: students,
      wantToEdit: !prevState.wantToEdit
    }))
  }

  wantToEdit = (id, fname, lname, cl, contact) => {
    this.setState({
      wantToEdit: true,
      editStudents: {
        id: id,
        firstname: fname,
        lastname: lname,
        class: cl,
        contact: contact
      }
    })
  }

  render(){
    return(
      <div className="container text-center">
        <h2 className="m-5 font-italic font-weight-bold">Student List App with React</h2>
        {/* Form Component */}
        <AddStudent addStudent={this.addStudent} wantToEdit={this.state.wantToEdit}/>
        <EditStudent editStudent={this.editStudent} wantToEdit={this.state.wantToEdit} editData={this.state.editStudents}/>
        {/* Table COmponent for showing data */}
        <StudentTable students={this.state.students} removeStudent={this.removeStudent} wantToEdit={this.wantToEdit}/>
      </div>
    )
  }
}

export default StudentListContainer;
