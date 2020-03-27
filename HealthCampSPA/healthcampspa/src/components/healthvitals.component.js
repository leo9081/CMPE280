import React from 'react'
import axios from 'axios'
import Userprofile from "./userProfile.component"

export default class HealthVitals extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height:"",
            weight:"",
            bodytemperature:"",
            pulserate:"",
            bp:"",
            medications:""
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

        Userprofile.setheight(this.state.height)
        Userprofile.setweight(this.state.weight)
        Userprofile.setbodytemperature(this.state.bodytemperature)
        Userprofile.setpulserate(this.state.pulserate)
        Userprofile.setbp(this.state.bp)
        Userprofile.setmedications(this.state.medications)

        const profile = {
            firstName: Userprofile.getfirstName(),
            lastName: Userprofile.getlastName(),
            gender: Userprofile.getgender(),
            age: Userprofile.getage(),
            notes: Userprofile.getnotes(),
            photo: Userprofile.getphoto(),
            height: this.state.height,
            weight: this.state.weight,
            bodytemperature: this.state.bodytemperature,
            pulserate: this.state.pulserate,
            bp: this.state.bp,
            medications: this.state.medications,
        }

        console.log(profile);

        /*axios.post('http://localhost:5000/users/add',profile)
            .then(res => console.log(res.data));*/

        axios.post('http://tamedogisnotdog.com:5000/users/add',profile)
            .then(res => console.log(res.data));

        //window.location ='/Reports';
        this.props.history.push("/Reports")
    }

    render() {
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <div className="row" style={{textAlign: 'right'}}>
                    <div className={"column"} style={{marginRight: 50}}>
                <form onSubmit={this.handleSubmit}>
                    <label>Height:</label>
                    <input
                        type={"text"}
                        name={"height"}
                        onChange={this.handleChange}
                        value={this.state.height}
                    />
                    <br />
                    <label>Weight:</label>
                    <input
                        type={"text"}
                        name={"weight"}
                        onChange={this.handleChange}
                        value={this.state.weight}
                    />
                    <br />
                    <label>Body Temperature:</label>
                    <input
                        type={"text"}
                        name={"bodytemperature"}
                        onChange={this.handleChange}
                        value={this.state.bodytemperature}
                    />
                    <br />
                    <label>Pulse Rate:</label>
                    <input
                        type={"text"}
                        name={"pulserate"}
                        onChange={this.handleChange}
                        value={this.state.pulserate}
                    />
                    <br />
                    <label>BP:</label>
                    <input
                        type={"text"}
                        name={"bp"}
                        onChange={this.handleChange}
                        value={this.state.bp}
                    />
                    <br />

                    <button>Save</button>
                </form>
                    </div>

                    <div className={"column"}>
                        <form onSubmit={this.handleSubmit}>
                            <label>Medications:</label>
                            <input
                                type={"text"}
                                name={"medications"}
                                onChange={this.handleChange}
                                value={this.state.medications}
                            />
                            <br />
                        </form>
                    </div>
                <br />
                </div>
            </div>
        );
    }
}