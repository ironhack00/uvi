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
          className="d-block w-75"
          src="https://res.cloudinary.com/dkw8e06fo/image/upload/v1681325659/comentario1_rpxzay.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className={styles.img}>
        <img
          className="d-block w-75"
          src="https://res.cloudinary.com/dkw8e06fo/image/upload/v1681325659/comentario1_rpxzay.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className={styles.img}>
        <img
          className="d-block w-75"
          src="https://res.cloudinary.com/dkw8e06fo/image/upload/v1681325659/comentario1_rpxzay.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </Form>
  );
}

export default Formm;