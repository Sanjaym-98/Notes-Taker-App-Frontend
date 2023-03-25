import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './AddNotes.css';

const AddNotes = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const token = JSON.parse(localStorage.getItem('token'));

    axios
      .post(
        'https://notesbackend-ware.onrender.com/api/v1/notes',
        { title, description },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        console.log('response:', response);
        setIsLoading(false);
        navigate('/homepage'); // navigate to homepage
      })
      .catch((error) => {
        console.log('error:', error);
        setIsLoading(false);
      });
  };

  return (
    <div className="add-notes-container">
      <Container>
        <h2>Add Note</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Add Note'}
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddNotes;
