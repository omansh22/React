import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './StudentList.css';


class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: []
        }
    }

    componentDidMount() {
        this.fetchStudentList();
    }

    fetchStudentList() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({
                    studentList: json
                })
            })
    }

    handleDelete = (rollNo) => {
        /* fetch('https://jsonplaceholder.typicode.com/users' + rollNo, { */
        fetch(`https://jsonplaceholder.typicode.com/users${rollNo}`, {
            method: 'DELETE',
        })
        .then(res => {
            console.log(res);
            if(res.ok) {
                alert(`Deleted ${rollNo} successfully`)
                this.fetchStudentList();
            } else {
                alert("error!!")
            }
         } )
        

    }
    render() {
        const {studentList} = this.state;
        return (
            <table>
                <tr>
                    <th>Class</th>
                    <th>Roll No.</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {studentList.map((student = {}) => {
                    const { website: classValue, id: rollNo, name, email: address } = student;
                    return (
                        <tr>
                            <td>{classValue}</td>
                            <td>{rollNo}</td>
                            <td>{name}</td>
                            <td>{address}</td>
                            <td>
                                <Link to={`/edit/${rollNo}`}><img src="https://img.icons8.com/wired/64/000000/edit.png" /></Link>
                            </td>
                            <td onClick={() => this.handleDelete(rollNo)}>
                               <Link to="#"><img src="https://img.icons8.com/carbon-copy/100/000000/delete-forever--v1.png" /></Link>
                            </td>
                        </tr>
                    )
                })}
            </table>
        )

    }
}

export default StudentList;