import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron,Grid,Row,Col,Image,Button} from 'react-bootstrap';
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
            <Grid>
                    <Jumbotron>
                        <h2> Welcome to Local JobSeeker Website, Checkout some recently posted jobs </h2>
                    </Jumbotron>
                    <Row className="show-grid text-center">
                        {jobs.map(data =>
                        <Col xs={12} sm={4} className="person-wrapper" key = {data.JobId}>
                            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
                            <p>Store Name: {data.StoreName}</p>
                            <p>Job Description: {data.JobDescription}</p>
                            <p>Job Location: {data.Locality}</p>
                        </Col>
                       )}
                    </Row>
               
            </Grid>
        )
    }
}
export default Home;