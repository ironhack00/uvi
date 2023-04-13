import Card from 'react-bootstrap/Card';
import styles from './Planes.module.css';
import './Planes.scss'

function BorderExample() {
  return (
    <div className={styles.section}>
      

      <div class="card">
    <div class="card-top background-purple">
      <h3>BASICO</h3>
      <i aria-hidden class="fas fa-heart"></i>
      <p class="card-tagline">So many perks!</p>
      <p class="card-subtag">Catchy line here!</p>
    </div>
    <div class="options">
      <ul class="option-list">
        <li class="option">
            <span class="number">12</span>
            <span class="time-frame">months</span>
            <span class="cost">$12/month</span>
        </li>
        <li class="option highlight-blue">
            <span class="pill">Super Popular</span>
            <span class="number">6</span>
            <span class="time-frame">months</span>
            <span class="cost">$15/month</span>
            <span class="savings">25% Savings</span>
        </li>
        <li class="option">
            <span class="number">3</span>
            <span class="time-frame">months</span>
            <span class="cost">$17/month</span>
        </li>
      </ul>
    </div>
    <div class="cta">
      <a class="btn btn-purple" href="#">Learn More</a>
      <a class="decline" href="#">No thanks</a>
    </div>
  </div>

      

  <div class="card">
    <div class="card-top background-purple">
      <h3>MEDIO</h3>
      <i aria-hidden class="fas fa-heart"></i>
      <p class="card-tagline">So many perks!</p>
      <p class="card-subtag">Catchy line here!</p>
    </div>
    <div class="options">
      <ul class="option-list">
        <li class="option">
            <span class="number">12</span>
            <span class="time-frame">months</span>
            <span class="cost">$12/month</span>
        </li>
        <li class="option highlight-blue">
            <span class="pill">Super Popular</span>
            <span class="number">6</span>
            <span class="time-frame">months</span>
            <span class="cost">$15/month</span>
            <span class="savings">25% Savings</span>
        </li>
        <li class="option">
            <span class="number">3</span>
            <span class="time-frame">months</span>
            <span class="cost">$17/month</span>
        </li>
      </ul>
    </div>
    <div class="cta">
      <a class="btn btn-purple" href="#">Learn More</a>
      <a class="decline" href="#">No thanks</a>
    </div>
  </div>


  <div class="card">
    <div class="card-top background-purple">
      <h3>PREMIUM</h3>
      <i aria-hidden class="fas fa-heart"></i>
      <p class="card-tagline">So many perks!</p>
      <p class="card-subtag">Catchy line here!</p>
    </div>
    <div class="options">
      <ul class="option-list">
        <li class="option">
            <span class="number">12</span>
            <span class="time-frame">months</span>
            <span class="cost">$12/month</span>
        </li>
        <li class="option highlight-blue">
            <span class="pill">Super Popular</span>
            <span class="number">6</span>
            <span class="time-frame">months</span>
            <span class="cost">$15/month</span>
            <span class="savings">25% Savings</span>
        </li>
        <li class="option">
            <span class="number">3</span>
            <span class="time-frame">months</span>
            <span class="cost">$17/month</span>
        </li>
      </ul>
    </div>
    <div class="cta">
      <a class="btn btn-purple" href="#">Learn More</a>
      <a class="decline" href="#">No thanks</a>
    </div>
  </div>


    </div>
  );
}

export default BorderExample;