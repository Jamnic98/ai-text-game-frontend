// CreateGamePage.jsx
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const CreateGamePage = () => {
  const [gameData, setGameData] = useState({
    title: '',
    description: '',
    objective: '',
    environment: '',
    thumbnail: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setGameData((prevData) => ({
      ...prevData,
      [name]: name === 'thumbnail' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API or perform actions with gameData
    console.log('Submitted data:', gameData);
  };

  return (
    <Container>
      <h1 className="mt-4 mb-4">Create a New Game</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title of the Game</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the title"
            name="title"
            value={gameData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description of the Game</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter the description"
            name="description"
            value={gameData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formObjective">
          <Form.Label>Objective of the Game</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the objective"
            name="objective"
            value={gameData.objective}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEnvironment">
          <Form.Label>Environment / Setting of the Game</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the environment"
            name="environment"
            value={gameData.environment}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formThumbnail">
          <Form.Label>Thumbnail Image</Form.Label>
          <Form.Control
            type="file"
            name="thumbnail"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button style={{marginTop:"3%"}} variant="primary" type="submit">
          Create Game
        </Button>
      </Form>
    </Container>
  );
};

export default CreateGamePage;
