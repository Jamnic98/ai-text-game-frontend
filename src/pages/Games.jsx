// GamesPage.jsx
import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const gamesData = [
  {
    title: 'Game 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    thumbnail: 'https://images-ng.pixai.art/images/orig/11d9cd40-cbf2-448b-b1d2-53044f5f7804',
  },
  {
    title: 'Game 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    thumbnail: 'https://images-ng.pixai.art/images/orig/11d9cd40-cbf2-448b-b1d2-53044f5f7804',
  },
  {
    title: 'Game 3',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    thumbnail: 'https://images-ng.pixai.art/images/orig/11d9cd40-cbf2-448b-b1d2-53044f5f7804',
  },
  // Add more game entries as needed
];

const GamesPage = () => {
  return (
    <Container fluid>
      <h2 className="mt-4 mb-4">Games</h2>
      <p>Explore and play exciting games on our platform. Choose from a variety of games and start your gaming adventure today!</p>
      <Row style={{marginTop:"3%"}}>
        {gamesData.map((game, index) => (
          <Col style={{height:"25%", width:"25%"}} key={index} md={4} className="mb-2">
            <Card>
              <Card.Img variant="top" src={game.thumbnail} />
              <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>{game.description}</Card.Text>
                <Button variant="success">Play Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GamesPage;
