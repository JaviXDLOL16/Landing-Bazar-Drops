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
                <img src={Instagram} alt="Instagram" />
                <img src={Facebook} alt="Instagram" />
                <img src={Twitter} alt="Instagram" />
            </div>
        </div>
    )
}
