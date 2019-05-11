import React from 'react';

const StudentTable = ({students, removeStudent, wantToEdit}) => {

  const studentList = students.map(student => {
    return(
      <tr key={student.id}>
        <td>{student.id+1}</td>
        <td>{student.firstname}</td>
        <td>{student.lastname}</td>
        <td>{student.class}</td>
        <td>{student.contact}</td>
        <td>
          <button className="btn btn-primary mr-1" onClick={() => wantToEdit(student.id, student.firstname, student.lastname, student.class, student.contact)}>Edit</button>
          <button className="btn btn-danger" onClick={() => removeStudent(student.id)}>Delete</button>
        </td>
      </tr>
    )
  })

  return(
    <table className="table table-striped table-bordered table-hover table-sm">
      <thead className="thead-dark">
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Class</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        { studentList }
      </tbody>
    </table>
  )
}

export default StudentTable;
