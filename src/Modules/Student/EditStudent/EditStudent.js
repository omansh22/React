import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class EditStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stdentInfo: {}
        }
    }

    componentDidMount() {
        this.fetchDetails();
    }

    fetchDetails() {
        const { match: { params: { id } = {} } = {}, availableClassList = [] } = this.props;
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({
                    studentInfo: json
                })
            })
    }

    handleGoBack = () => {
        this.props.history.goBack();
    }

    handleInputChanges = e => {
        /* const value = e.target.value */
        const {target: { value, name } = {}} = e;
        console.log(name, value);
        this.setState({
            ...this.state,
            studentInfo: {
                ...this.state.studentInfo,
                [name]: value,
            }
        })

    }

    handleEditDone = () => {
        /* call API with state data */
        /* on Success show popup n redirect to list page */
        this.props.history.push({
            pathname: '/list'
        });
    }

    render() {
        const { studentInfo = {} } = this.state;
        const { website: classValue, id: rollNo, name, email: address } = studentInfo;
        console.log(studentInfo, rollNo);
        return (
            <div>
                <div>
                    <img src="https://img.icons8.com/carbon-copy/100/000000/back.png" onClick={this.handleGoBack} />
                </div>
                <table>
                    <tr>
                        <th>Class</th>
                        <th>Roll No.</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Done</th>
                    </tr>
                    <tr>
                        <td>
                            <select value={classValue}>
                                {[1, 2, 3].map(classValue => {
                                    return <option>{classValue}</option>
                                })}
                            </select>
                        </td>
                        <td>
                            <input type="text" placeholder="Roll No." name="id" value={rollNo} onChange={this.handleInputChanges}/>
                        </td>
                        <td>
                            <input type="text" name="name" placeholder="Name" value={name } onChange={this.handleInputChanges}/>
                        </td>
                        <td>
                                <input type="text" name="email" placeholder="address" value={address} onChange={this.handleInputChanges}/>
                        </td>
                        <td>
                                <button onClick={this.handleEditDone}>Done</button>
                        </td>
                    </tr>
                </table>
            </div>
                )
        
            }
        }
        
export default withRouter(EditStudent);