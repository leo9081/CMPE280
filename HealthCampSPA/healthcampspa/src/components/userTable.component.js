import React from 'react';

export default class UserTable extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.user.firstname} {this.props.user.lastname}</td>
                <td>{this.props.user.age}</td><td>{this.props.user.gender}</td>
                <td>{this.props.user.photo}</td><td>{this.props.user.medications}</td>
                <td>{this.props.user.notes}</td>
            </tr>
        )
    }
}