import styles from "../styles/ContentSearch.module.css";
import manLaptop from '../assets/Icons/manLaptop.svg';
import recycle from '../assets/ecology.svg'
import trousers from '../assets/trousers.svg'
import clothes from '../assets/clothes.svg'
import shopping from '../assets/shopping.svg'





export default function ContentSearch() {
    return (
        <div className={styles.contSearch}>
            <div className={styles.backgroundLight}></div>
            <div className={styles.contImage}>
                <img className={styles.image} src={manLaptop} alt="manLaptop" />
                <img className={styles.Recycle} src={recycle} alt="Recycle" />
                <img className={styles.trousers} src={trousers} alt="trousers" />
                <img className={styles.clothes} src={clothes} alt="clothes" />
                <img className={styles.shopping} src={shopping} alt="shopping" />
            </div>
            <div className={styles.contText}>
                <p>Que buscamos con <span>Bazar&Drops.</span></p>
                <p>Transformando la Moda Sostenible</p>
                <p>En Bazar&Drops, queremos cambiar la forma en que se <span>compra y vende ropa</span> de segunda mano. Fomentamos la moda sostenible, empoderamos a <span>pequeños vendedores</span> y creamos una comunidad activa, todo mientras ofrecemos una experiencia de usuario excepcional y <span>accesible para todos.</span></p>
            </div>
        </div>
    )
}
