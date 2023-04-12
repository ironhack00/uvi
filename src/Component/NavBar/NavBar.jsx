import styles from './NavBar.module.css'


const NavBar = ()=>{
    return(
        <div className={styles.nav}>
            <img src="https://res.cloudinary.com/dkw8e06fo/image/upload/v1681306828/logo1_1_2_1_5_o7hni1.png" alt="" className={styles.logo}/>
            <ul className={styles.menu}>
                <li>Servicios</li>
                <li>Planes</li>
                <li>Formulario</li>
            </ul>
        </div>
    )
}

export default NavBar;