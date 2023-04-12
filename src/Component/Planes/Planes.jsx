import Card from 'react-bootstrap/Card';
import styles from './Planes.module.css';

function BorderExample() {
  return (
    <div className={styles.section}>
      <Card className={styles.card} border="secondary" style={{ width: '18rem' }}>
        <Card.Header>PLAN BASICO</Card.Header>
        <Card.Body>
          <Card.Title>Secondary Card Title</Card.Title>
          <Card.Text>
          - <br/>- <br/>- <br/>- <br/><br/><br/>$
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className={styles.card} border="secondary" style={{ width: '18rem' }}>
        <Card.Header>PLAN MEDIO</Card.Header>
        <Card.Body>
          <Card.Title>Secondary Card Title</Card.Title>
          <Card.Text>
            - <br/>- <br/>- <br/>- <br/> <br/><br/>$
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className={styles.card} border="secondary" style={{ width: '18rem' }}>
        <Card.Header>PLAN AVANZADO</Card.Header>
        <Card.Body>
          <Card.Title>Secondary Card Title</Card.Title>
          <Card.Text>
          - <br/>- <br/>- <br/>- <br/><br/><br/>
          $
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BorderExample;