import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Form.module.css'
import Carousel from 'react-bootstrap/Carousel';

function Formm() {
  return (
    <Form className={styles.section}>
        <h3 className={styles.title}>Form</h3>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="email" placeholder="Ingrese Nombre" />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      {/* carousel */}
      <Carousel>
      <Carousel.Item className={styles.img}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1612372992697-81c95501d0d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className={styles.img}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1601625463687-25541fb72f62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className={styles.img}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1578172336697-11f964fe6b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </Form>
  );
}

export default Formm;