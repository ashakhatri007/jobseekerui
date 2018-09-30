import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CreateProfileComponent.css';
const { CountryDropdown, RegionDropdown, CountryRegionData } = require('react-country-region-selector');
class Address extends Component {
    constructor (props) {
        super(props);
        this.state = {
           country : '', 
           region : '',
           City : '',
           Pincode : '',
           Locality : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this)
      }
    
      selectCountry (val) {
        this.setState({ country: val });
      }
    
      selectRegion (val) {
        this.setState({ region: val });
      }
      handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value });
      }
      onChangeAddress(){
          this.props.getAddress(this.state.country,this.state.region,this.state.City,this.state.Pincode,this.state.Locality)
      }
      render () 
      {
        const { country, region } = this.state;
        return (
            <span  onChange = {this.onChangeAddress}>
            <label for="Country">Country</label>
            <CountryDropdown
              value={country}
              onChange={(val) => this.selectCountry(val)} />
            <label for="State">State</label>
            <RegionDropdown
              country={country}
              value={region}
              onChange={(val) => this.selectRegion(val)} />
              <label for="City">City</label>
              <input type="text" id="City" name="City" placeholder="Your city"  onChange={this.handleChange}/>
              <label for="Pincode">Pincode</label>
              <input type="text" id="Pincode" name="Pincode"  onChange={this.handleChange}/>
              <label for="Locality">Locality</label>
              <input type="text" id="Locality" name="Locality"  onChange={this.handleChange}/>
              </span>
        );
      }
  }
  Address.propTypes = {
    getAddress : PropTypes.func
  }
  export default Address;