import styles from "../styles/ContentCompany.module.css";
import womanClothes from '../assets/Icons/womanClothes.svg';

export default function ContentCompany() {
    return (
        <div className={styles.ContentCompany}>
            <div className={styles.ContImageTitle}>
                <img className={styles.womanClothes} src={womanClothes} alt="womanClothes" />
            </div>
            <p>Que hace la empresa de desarrollo <span>DevMov</span></p>
            <p>Innovación Digital a Tu Alcance</p>
            <div className={styles.backgroundLight}></div>
            <div className={styles.ContData}>
                <div className={styles.ContText}>
                    <p>En <span>DevMov</span>, nos especializamos en el desarrollo web y móvil. Creamos <span>soluciones digitales</span> innovadoras y personalizadas, transformando ideas en realidades. Nuestro equipo experto se dedica a entregar productos de <span>alta calidad.</span></p>
                </div>
                <div className={styles.ContImage}>
                    <img className={styles.womanClothes} src={womanClothes} alt="womanClothes" />
                </div>
            </div>

        </div>
    )
}
