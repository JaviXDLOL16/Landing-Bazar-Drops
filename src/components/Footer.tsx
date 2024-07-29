import styles from "../styles/Footer.module.css";
import Instagram from '../assets/Icons/Instagram.svg';
import Facebook from '../assets/Icons/Facebook.svg';
import Twitter from '../assets/Icons/TwitterX.svg';

export default function Footer() {
    return (
        <div className={styles.ContFooter}>
            <div className={styles.contText}>
                <p>Buscamos hacer tu vida más fácil con aplicaciones móviles.</p>
                <div className={styles.contTerms}>
                    <p>Términos y condiciones</p>
                    <p>Políticas de privacidad</p>
                </div>
                <div className={styles.contCompany}>
                    <p>Compañía</p>
                    <p>Servicio</p>
                    <p>Nosotros</p>
                    <p>Portafolio</p>
                </div>
                <div className={styles.contContact}>
                    <p>Contacto</p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                </div>
            </div>
            <div className={styles.contIcons}>
                <p>Copyright 2024 Javier</p>
                <div className={styles.Icons}>
                    <img src={Instagram} alt="Instagram" />
                    <img src={Facebook} alt="Facebook" />
                    <img src={Twitter} alt="Twitter" />
                </div>
            </div>
        </div>
    );
}
