import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import './styles.css';

class PersonList extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`)
      .then(res => {
        const persons = res.data.results;
        this.setState({ persons });
      });
  }

  render() {
    return (
      <Container style={{ marginTop: '20px' }}>
        <h1 className="text-center">User List</h1>
        <Row>
          {this.state.persons.map(person => (
            <Col md={6} key={person.login.uuid}>
              <Card style={{ marginBottom: '20px', backgroundColor: '#00bcd4', color: '#fff' }}>
                <Card.Body>
                  <Row>
                    <Col md={4}>
                      <Card.Img 
                        src={person.picture.large} 
                        alt={person.name.first} 
                        roundedCircle 
                        className="img-fluid rounded-circle" 
                      />
                    </Col>
                    <Col md={8}>
                      <Card.Title>{`${person.name.title} ${person.name.first} ${person.name.last}`}</Card.Title>
                      <Card.Text><b>User Name:</b> {person.login.username}</Card.Text>
                      <Card.Text><b>Gender:</b> {person.gender.toUpperCase()}</Card.Text>
                      <Card.Text><b>Time Zone Description:</b> {person.location.timezone.description}</Card.Text>
                      <Card.Text><b>Address:</b> {`${person.location.street.name}, ${person.location.city}, ${person.location.country}`}</Card.Text>
                      <Card.Text><b>Email:</b> {person.email}</Card.Text>
                      <Card.Text><b>Phone:</b> {person.phone}</Card.Text>
                      <Card.Text><b>Cell:</b> {person.cell}</Card.Text>
                      <Button variant="primary">Details</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default PersonList;
