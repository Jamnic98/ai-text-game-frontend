// Play.jsx
import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ChatBox from '../components/ChatBox/ChatBox';
import ChatInput from '../components/ChatInput';

export default function Play() {
  let params = useParams();
  let location = useLocation();
  const [imageBase64Data, setImageBase64Data] = useState("");

  const executeScript = async (prompt) => {
    try {
      const response = await fetch('http://localhost:3001/execute-script', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          command: 'hive run sdxl:v0.2.9',
          prompt: prompt,
        }),
      });

      const data = await response.json();
      console.log(data.fileData);
      setImageBase64Data(data.fileData);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const [messages, setMessages] = useState([
    {
      data: 'Hello! This is a user message.',
      member: {
        id: '1',
        username: 'Test Player',
        color: '#000000',
      },
    },
    {
      data: 'Hi there! This is a computer message.',
      member: {
        id: '0',
        username: 'AI',
        color: 'blue',
      },
    },
  ]);

  const me = {
    id: '1',
    username: 'Test Player',
    color: '#000000',
  };

  const onSendMessage = (message) => {
    const newMessage = {
      data: message,
      member: me,
    };
    setMessages([...messages, newMessage]);

    executeScript('a person running from an angry ferrari stuck in a forest');
  };

  return (
    <>
      <Container fluid>
        <Row style={{ marginTop: "2%" }}>
          <Col style={{
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: "5%"
          }} md={6}>
            <ChatBox messages={messages} me={me} />
            <ChatInput onSendMessage={onSendMessage} />
          </Col>
          <Col md={6}>
            {imageBase64Data && (
              <img
                src={`data:image/png;base64,${imageBase64Data}`}
                alt="Generated Image"
                style={{ maxWidth: '100%', borderRadius: '5%' }}
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
