import React from 'react';

const StudentTable = ({students, removeStudent, wantToEdit}) => {

  const studentList = students.map(student => {
    return(
      <tr key={student.id}>
        <td className="align-middle">{student.id+1}</td>
        <td className="align-middle">{student.firstname}</td>
        <td className="align-middle">{student.lastname}</td>
        <td className="align-middle">{student.class}</td>
        <td className="align-middle">{student.contact}</td>
        <td>
          <button className="btn btn-outline-primary btn-sm mr-1" onClick={() => wantToEdit(student.id, student.firstname, student.lastname, student.class, student.contact)}>Edit</button>
          <button className="btn btn-outline-danger btn-sm" onClick={() => removeStudent(student.id)}>Delete</button>
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
