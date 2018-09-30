import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CreateProfileComponent.css';
class Address extends Component {
    constructor (props) {
        super(props);
        this.state = {
           Country : '', 
           State : '',
           City : '',
           Pincode : '',
           Locality : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this)
      }
      handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value });
      }
      onChangeAddress(){
          this.props.getAddress(this.state.Country,this.state.State,this.state.City,this.state.Pincode,this.state.Locality)
      }
      render () 
      {
        return (
            <span  onChange = {this.onChangeAddress}>
            <label for="Country">Country</label>
            <input type="text" id="Country" name="Country" placeholder="Your country"  onChange={this.handleChange}/>
            <label for="State">State</label>
            <input type="text" id="State" name="State" placeholder="Your state"  onChange={this.handleChange}/>
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