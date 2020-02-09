import React, { Component } from 'react';

class AddStudent extends Component {
    render() {
        const {classList} = this.props;
        return (
            <table>
                <tr>
                    <th>Class</th>
                    <th>Roll No.</th>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
                <tr>
                    <td>
                        <select>
                            {classList.map(classValue => {
                                return <option>{classValue}</option>
                            })  }
                        </select>
                    </td>
                    <td><input type="text" placeholder="Roll No."/></td>
                    <td><input type="text"placeholder="Name"/></td>
                    <td><input type="text" placeholder="address"/></td>
                </tr>
            </table>
        )

    }
}

export default AddStudent;