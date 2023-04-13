import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Form.module.css'
import Carousel from 'react-bootstrap/Carousel';

function Formm() {
  return (
    <div>

      {/* carousel */}
      <Carousel>
      <Carousel.Item className={styles.img}>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dkw8e06fo/image/upload/v1681343989/comentario1_akxup3.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className={styles.img}>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dkw8e06fo/image/upload/v1681343989/comentario1_akxup3.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className={styles.img}>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dkw8e06fo/image/upload/v1681343989/comentario1_akxup3.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Formm;