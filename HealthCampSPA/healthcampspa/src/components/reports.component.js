import React from 'react'
import axios from 'axios'
import UserTable from './userTable.component'

export default class Reports extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users:[]
        }
    }

    componentDidMount() {
        axios.get('http://tamedogisnotdog.com:5000/users/')
            .then(rep => {
                if(rep.data.length > 0){
                    console.log(rep.data)
                    this.setState({
                        users: rep.data
                    })
                }
            })
    }


    render() {
        const items = this.state.users.map(item=><UserTable key={item._id} user={item}/>)
        return (
            <table className="table table-bordered table-hover" id="itemlist">
                <thead>
                <tr><th>Patients Details</th><th></th><th></th><th></th><th></th><th></th></tr>
                <tr><th>Name</th><th>Age</th><th>Gender</th><th>Photo</th><th>Medications</th><th>Notes</th></tr>
                </thead>
                <tbody>
                {items}
                </tbody>
            </table>
        );
    }
}