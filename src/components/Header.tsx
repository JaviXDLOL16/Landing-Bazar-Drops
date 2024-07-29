import styles from "../styles/Header.module.css";
import DevMOv from '../assets/LogoDevmoV.svg';
import Instagram from '../assets/Icons/Instagram.svg';
import Facebook from '../assets/Icons/Facebook.svg';
import Twitter from '../assets/Icons/TwitterX.svg';


export default function Header() {
    return (
        <div className={styles.contHeader}>
            <img className={styles.contLogo} src={DevMOv} alt="Logo imagen" />
            <div className={styles.contLogoNetworks}>
                <a href="https://www.instagram.com/devmovoficial"><img src={Instagram} alt="Instagram" /></a>
                <a href="https://www.facebook.com/profile.php?id=61562283522934&mibextid=LQQJ4d"> <img src={Facebook} alt="Facebook" /></a>
                <a href="https://www.tiktok.com/@devmovoficial?_t=8o8zqv1r8Cr&_r=1"><img src={Twitter} alt="Twitter" /></a>
            </div>
        </div>
    )
}
