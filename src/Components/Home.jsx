import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row,Col} from 'react-bootstrap';
import './Home.css';

class Home extends Component{

    constructor(){
        super();
        this.state = {
            jobs: [],
            isLoading: false,
            error : null,
        }
    }
    componentDidMount(){
        this.setState({
            isLoading: true
        })
        fetch('https://localjobseeker.azurewebsites.net/api/Job', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response =>{
            if(response.ok){
                return response.json()
            }
            else{
                alert ('Something went wrong')
            }
        })
        .then(data => this.setState({
            jobs : data,
            isLoading : false
        }))
        .catch(error => this.setState({
            error: null,
            isLoading: false
        }))
    }
    render(){
        const{jobs, isLoading, error} = this.state;

        if(isLoading){
            return <p>Loading ...</p>
        }
        if(error){
            return<p>{error.message}</p>
        }
        return(
        <Row className="show-grid text-center">
        <marquee behavior="alternate"><span class="marquee">View some recently created Jobs</span></marquee>
            {jobs.map(data =>
                <Col xs={12} sm={4} className="person-wrapper" key = {data.JobId}>
                    <div class="column">
                        <div class="demo-title"></div>
                            <div class="post-module hover">

                                <div class="thumbnail">
                                    <div class="date">
                                    <div class="day">{data.JobPostedDate}</div>
                                    
                                    </div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"/>
                                </div>
                            
                                <div class="post-content">
                                    <div class="category">Job Category : {data.JobType}</div>
                                    <h1 class="title">{data.StoreName}</h1>
                                    <h2 class="sub_title">Location : {data.City}</h2>
                                    <p class="description">{data.JobDescription}</p>
                                </div>
                            </div>
                    </div>
                </Col>
            )}
        </Row>
        )
    }
}
export default Home;