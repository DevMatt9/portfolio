import { Container, Form, Button, Toast, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import emailjs from "emailjs-com";

const schema = yup.object().shape({
  name: yup.string().required("Le nom est requis"),
  email: yup.string().email("Email invalide").required("L'email est requis"),
  message: yup
    .string()
    .min(10, "Le message doit faire au moins 10 caractères")
    .required("Le message est requis"),
});

const SERVICE_ID = "service_shu84ml";
const TEMPLATE_ID = "template_i6tnrkm";
const USER_ID = "X3p4YQNMP2lMs1iLQ";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showToast, setShowToast] = useState(false);

  const onSubmit = (data: any) => {
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: "devmattmar@gmail.com",
        },
        USER_ID
      )
      .then(() => {
        reset();
        setShowToast(true);
      })
      .catch((error) => {
        alert("Erreur lors de l'envoi du message.");
        console.error(error);
      });
  };

  return (
    <section id="contact" className="bg-light">
      <Container style={{ maxWidth: "700px" }}>
        <div className="text-center mb-4">
          <h2 className="mb-2">📬 Me Contacter</h2>
          <p className="text-muted">
            Une question, un projet ou juste envie de dire bonjour ? <br />
            Je réponds à tous les messages (sauf aux spams 🍕).
          </p>
        </div>

        <Form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded shadow-sm bg-white">
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>👤 Votre nom</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex : Jean Burger"
                  {...register("name")}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>📧 Votre email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ex : jean@burger.fr"
                  {...register("email")}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-4" controlId="formMessage">
            <Form.Label>✍️ Votre message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Racontez-moi tout..."
              {...register("message")}
              isInvalid={!!errors.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.message?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="text-center">
            <Button variant="success" type="submit" size="lg" className="px-5">
              🚀 Envoyer
            </Button>
          </div>
        </Form>

        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            minWidth: 220,
            zIndex: 9999,
          }}
        >
          <Toast.Header closeButton>
            <strong className="me-auto">✅ Message envoyé</strong>
          </Toast.Header>
          <Toast.Body>Merci pour votre message ! Je reviens vite vers vous 😄</Toast.Body>
        </Toast>
      </Container>
    </section>
  );
};

export default Contact;
