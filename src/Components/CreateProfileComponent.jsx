import React, { Component } from 'react';
import './CreateProfileComponent.css';
import Address from './Address';
class CreateProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName : '',
            LastName : '',
            Education : '',
            Skills : '',
            Gender : '',
            IsNightShift : '',
            DateOfBirth : '',
            Languages : '',
            Country : '',
            Sate : '',
            City : '',
            Pincode : '',
            Locality : ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value });
    }

    getAddress(CountryN,StateN,CityN,PincodeN,LocalityN){
        this.setState({
            Country : CountryN,
            Sate : StateN,
            City : CityN,
            Pincode : PincodeN,
            Locality : LocalityN
        })
    }
    handleSubmit = event => {
        event.preventDefault();   
        fetch('https://localjobseeker.azurewebsites.net/api/Profile', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                FirstName : this.state.FirstName,
                LastName : this.state.LastName,
                Education : this.state.Education,
                Skills : this.state.Skills,
                Gender : this.state.Gender,
                IsNightShift : this.state.IsNightShift === 'Yes' ? 1 : 0,
                DateOfBirth : this.state.DateOfBirth,
                Languages : this.state.Languages,
                Country : this.state.Country,
                Sate : this.state.Sate,
                City : this.state.City,
                Pincode : this.state.Pincode,
                Locality : this.state.Locality
            }),
            })
            .then((response) => response.json)
                .then(() => {
                alert("Record created succcessfully!");
            })
            .catch((error) => {
                alert("There was some problem creating record!");
                console.error(error);
            });
      }
    render() {
      return (
        <div>
            <h3>Create your Profile by filling in this profile</h3>
            <form onSubmit={this.handleSubmit}>
                <label for="FirstName">First Name</label>
                <input type="text" id="FirstName" name="FirstName" placeholder="Your name.." onChange={this.handleChange}/>
                <label for="LastName">Last Name</label>
                <input type="text" id="LastName" name="LastName" placeholder="Your last name.." onChange={this.handleChange}/>
                <label for="Education">Education</label>
                <select id="Education" name="Education"  onChange={this.handleChange}>
                <option value=""> </option>
                <option value="Below 10th">Below 10th</option>
                <option value="12th">12th</option>
                <option value="UnderGraduate">UnderGraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="PostGraduate">PostGraduate</option>
                </select>
                <label for="Skills">Skills</label>
                <input type="text" id="Skills" name="Skills" placeholder="Your Skill.." onChange={this.handleChange}/>
                <label for="Gender">Gender</label>
                <select id="Gender" name="Gender"onChange={this.handleChange}>
                <option value=""> </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                </select>
                <label for="IsNightShift">Ready to work in Night shifts?</label>
                <select id="IsNightShift" name="IsNightShift" onChange={this.handleChange}>
                <option value=""> </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                </select>
                <label for="DateOfBirth">Date Of Birth</label>
                <input type="date" id="DateOfBirth" name="DateOfBirth" placeholder="MM/DD/YYYY" onChange={this.handleChange}/>
                <label for="Languages">Languages</label>
                <input type="text" id="Languages" name="Languages" placeholder="e.g. English" onChange={this.handleChange}/>
                <Address getAddress = {this.getAddress.bind(this)}/>
                 <input type="submit" value="Submit"/>
            </form>
        </div>
      );
    }
  }
  export default CreateProfileComponent;