import React from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import HealthVitals from "./healthvitals.component"
import Userprofile from "./userProfile.component"

export default class Demographocs extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName:"",
            gender:"",
            age:"",
            notes:"",
            photo:""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name,value} = event.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit(e){
        e.preventDefault();

        Userprofile.setfirstName(this.state.firstName)
        Userprofile.setlastName(this.state.lastName)
        Userprofile.setgender(this.state.gender)
        Userprofile.setage(this.state.age)
        Userprofile.setnotes(this.state.notes)
        Userprofile.setphoto(this.state.photo)

        //console.log(Userprofile.getfirstName());

        //window.location ='/HealthVitals';
        this.props.history.push("/HealthVitals")

    }

    render() {
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <div className="row" style={{textAlign: 'right'}}>
                    <div className={"column"} style={{marginRight: 50}}>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name:</label>
                    <input
                        type={"text"}
                        name={"firstName"}
                        onChange={this.handleChange}
                        value={this.state.firstName}
                    />
                    <br />
                    <label>Last Name:</label>
                    <input
                        type={"text"}
                        name={"lastName"}
                        onChange={this.handleChange}
                        value={this.state.lastName}
                    />
                    <br />
                    <label>Gender:</label>
                    <select
                        name={"gender"}
                        onChange={this.handleChange}
                        value={this.state.gender}
                        >
                        <option value = ""></option>
                        <option value = "Male">Male</option>
                        <option value = "Female">Female</option>
                    </select>
                    <br />
                    <label>Age:</label>
                    <input
                        type={"text"}
                        name={"age"}
                        onChange={this.handleChange}
                        value={this.state.age}
                    />
                    <br />
                    <label>Note:</label>
                    <input
                        type={"text"}
                        name={"notes"}
                        onChange={this.handleChange}
                        value={this.state.notes}
                    />
                    <br />
                    <button>Save</button>
                </form>
                    </div>

                <div className={"column"}>
                <form onSubmit={this.handleSubmit}>

                    <label>Photo:</label>
                    <input
                        type={"text"}
                        name={"photo"}
                        onChange={this.handleChange}
                        value={this.state.photo}
                    />
                    <br />

                    <button>Save</button>

                </form>
                </div>
                </div>

                <br />
            </div>
        )
    }
}