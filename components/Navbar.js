import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return(
        <div className={styles.navbar_container}>
            <div className={styles.title_tag}>
                <h2 className={styles.title}>ColoniasDev</h2>
            </div>
            <div className={styles.navbar_links}>
                <p>Inicio</p>
                <p>Proyectos</p>
                <p>Sobre nosotros</p>
            </div>
        </div>
    )
}