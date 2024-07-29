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
                    <a href="https://www.instagram.com/devmovoficial"><img src={Instagram} alt="Instagram" /></a>
                    <a href="https://www.facebook.com/profile.php?id=61562283522934&mibextid=LQQJ4d"> <img src={Facebook} alt="Facebook" /></a>
                    <a href="https://www.tiktok.com/@devmovoficial?_t=8o8zqv1r8Cr&_r=1"><img src={Twitter} alt="Twitter" />
                    </a>
                </div>
            </div>
        </div>
    );
}
