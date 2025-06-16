import { Container, Form, Button, Toast } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import emailjs from "emailjs-com";

const schema = yup.object().shape({
  name: yup.string().required("Le nom est requis"),
  email: yup.string().email("Email invalide").required("L'email est requis"),
  message: yup.string().min(10, "Le message doit faire au moins 10 caractères").required("Le message est requis"),
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
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Me contacter</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Votre nom" {...register("name")} isInvalid={!!errors.name} />
            <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Votre email" {...register("email")} isInvalid={!!errors.email} />
            <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Votre message" {...register("message")} isInvalid={!!errors.message} />
            <Form.Control.Feedback type="invalid">{errors.message?.message}</Form.Control.Feedback>
          </Form.Group>

          <div className="text-center">
            <Button variant="success" type="submit">
              Envoyer
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
            minWidth: 200,
            zIndex: 9999,
          }}
        >
          <Toast.Header>
            <strong className="me-auto">Message envoyé</strong>
          </Toast.Header>
          <Toast.Body>Votre message a bien été envoyé !</Toast.Body>
        </Toast>
      </Container>
    </section>
  );
};

export default Contact;
