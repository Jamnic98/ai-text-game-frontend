import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import NavBar from './NavBar';

const Home = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
          color: 'black',
          textAlign: 'center',
          padding: '100px 0',
          height: '100vh',
        }}
      >
        <Container style={{ marginTop: '1%' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2.5em', marginBottom: '20px' }}>
              Welcome to AI Adventure World
            </h1>
            <p style={{ fontSize: '1.2em', marginBottom: '30px' }}>
              Your Gateway to Endless Text-Based Adventures
            </p>
            <p style={{ fontSize: '1.1em', marginBottom: '40px' }}>
              Imagine, Create, Play – Build your own AI-driven text-based games
              or embark on thrilling journeys crafted by others.
            </p>
          </div>
        </Container>
        <Container style={{ marginTop: '4%' }}>
          <Row>
            <Col>
              <Card style={{ width: '18rem', margin: 'auto', height: '100%' }}>
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Title>Immersive Storytelling</Card.Title>
                  <Card.Text className="text-center">
                    Craft intricate narratives and let players explore
                    captivating storylines.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem', margin: 'auto', height: '100%' }}>
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Title>Easy Game Creation</Card.Title>
                  <Card.Text className="text-center">
                    No coding required! Intuitive tools to create games with
                    ease.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem', margin: 'auto', height: '100%' }}>
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Title>User-Generated Content</Card.Title>
                  <Card.Text className="text-center">
                    Explore a library of games crafted by the vibrant community.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
            <Button style={{marginTop:"3%"}} href="/create-game" variant="primary" size="lg" >
        Create my Game
      </Button>


            <Button style={{marginTop:"3%", marginLeft:"2%"}} href="/games" variant="success" size="lg" >
        Play a Game
      </Button>


        </Container>
      </div>
    </>
  );
};

export default Home;
