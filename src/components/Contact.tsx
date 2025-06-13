import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Me contacter</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Votre nom" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Votre email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Votre message" />
          </Form.Group>

          <div className="text-center">
            <Button variant="success" type="submit">
              Envoyer
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
