import React, { Component } from 'react';
import Address from './Address';
class CreateJobComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            StoreName : '',
            JobType : '',
            MinSalary : '',
            WebsiteLink : '',
            BasicEduRequired : '',
            ShiftStartTime : '',
            ShiftEndTime : '',
            EmployerContactNum : '',
            EmployerEmailId : '',
            JobDescription : '',
            IsJobActive : '',
            Country : '',
            Sate : '',
            City : '',
            Pincode : '',
            Locality : '',
            JobPostedDate : '',
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
        fetch('https://localjobseeker.azurewebsites.net/api/Job', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                StoreName : this.state.StoreName,
                JobType : this.state.JobType,
                MinSalary : this.state.MinSalary,
                WebsiteLink : this.state.WebsiteLink,
                BasicEduRequired : this.state.BasicEduRequired,
                ShiftStartTime : this.state.ShiftStartTime,
                ShiftEndTime : this.state.ShiftEndTime,
                EmployerContactNum : this.state.EmployerContactNum,
                EmployerEmailId : this.state.EmployerEmailId,
                JobDescription : this.state.JobDescription,
                IsJobActive : this.state.IsJobActive === 'Yes' ? 1 : 0,
                Country : this.state.Country,
                Sate : this.state.Sate,
                City : this.state.City,
                Pincode : this.state.Pincode,
                Locality : this.state.Locality,
                JobPostedDate : this.state.JobPostedDate
            }),
            })
            .then((response) => response.json())
                .then((responseJson) => {
                    alert("Record created succcessfully!")
                })
                .catch((error) => {
                    alert("There was some problem creating record!")
                console.error(error);
                });
      }
    render() {
      return (
        <div>
            <h3>Create Job posting by filling in this details</h3>
            <form onSubmit={this.handleSubmit}>
                <label for="StoreName">Store Name</label>
                <input type="text" id="StoreName" name="StoreName" placeholder="Store Name...." onChange={this.handleChange}/>
                <label for="JobType">Job Type</label>
                <select id="JobType" name="JobType"  onChange={this.handleChange}>
                <option value=""> </option>
                <option value="Sales Person">Sales Person</option>
                <option value="Accountant">Accountant</option>
                <option value="Instructor">Instructor</option>
                <option value="Security guard">Security guard</option>
                <option value="House Keeping">House Keeping</option>
                </select>
                <label for="MinSalary">Minimum Salary</label>
                <input type="number" id="MinSalary" name="MinSalary" placeholder="Salary in Rs per month" onChange={this.handleChange}/>
                <label for="WebsiteLink">Website Link</label>
                <input type="text" id="WebsiteLink" name="WebsiteLink" placeholder="Website Link" onChange={this.handleChange}/>
                <label for="BasicEduRequired">Basic Education Required</label>
                <select id="BasicEduRequired" name="BasicEduRequired"  onChange={this.handleChange}>
                <option value=""> </option>
                <option value="Below 10th">Below 10th</option>
                <option value="12th">12th</option>
                <option value="UnderGraduate">UnderGraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="PostGraduate">PostGraduate</option>
                </select>
                <label for="ShiftStartTime">Shift Start Time</label>
                <input type="text" id="ShiftStartTime" name="ShiftStartTime" placeholder="Shift Start Time...." onChange={this.handleChange}/>
                <label for="ShiftEndTime">Shift End Time</label>
                <input type="text" id="ShiftEndTime" name="ShiftEndTime" placeholder="Shift End Time...." onChange={this.handleChange}/>
                <br/><label for="EmployerContactNum">Employer ContactNum</label>
                <br/><input type="number" id="EmployerContactNum" name="EmployerContactNum" placeholder="Employer Contact Number...." onChange={this.handleChange}/>
                <br/><label for="EmployerEmailId">Employer Email Id</label>
                <br/><input type="email" id="EmployerEmailId" name="EmployerEmailId" placeholder="Employer Email Id...." onChange={this.handleChange}/>
                <br/><label for="JobDescription">Job Description</label>
                <br/><input type="text" id="JobDescription" name="JobDescription" placeholder="Job Description...." onChange={this.handleChange}/>
                <label for="">Is Job Active?</label>
                <select id="IsJobActive" name="IsJobActive" onChange={this.handleChange}>
                <option value=""> </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                </select>
                <label for="JobPostedDate">Job Posted Date</label>
                <input type="date" id="JobPostedDate" name="JobPostedDate" placeholder="MM/DD/YYYY" onChange={this.handleChange}/>
                <Address getAddress = {this.getAddress.bind(this)}/>
                 <input type="submit" value="Submit"/>
            </form>
        </div>
      );
    }
}
export default CreateJobComponent;