import styles from "../styles/ContentCards.module.css";
import WaveVector from '../assets/WaveTransparent.svg';
import Button from "../components/Form/Button";
import Cards from "../components/Form/Cards";
import Offert from '../assets/Icons/Offert.svg';
import Features from '../assets/Icons/Features.svg';
import Adventages from '../assets/Icons/Adventages.svg';





export default function ContentCards() {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundLight}></div>
            <img className={styles.backgroundWave} src={WaveVector} alt="Wave Vector" />

            <div className={styles.contTitle}>
                <p>Con nosotros una <span>nueva</span> forma de comprar ropa.</p>
                <p>Inicia a probar la aplicación</p>
            </div>
            <div className={styles.contButtonApp}>
                <Button />
            </div>
            <p className={styles.textQuestion}>¿Que es  <span>Bazar&Drops?</span></p>
            <div className={styles.contCards}>
                <Cards icon={Offert} title={'Que ofrecemos'} >
                    <p>
                        Descubre nuestra <span>innovadora app</span> para comprar y vender ropa de segunda mano, o ‘Ropa Americana’, <span>promoviendo la moda sostenible y accesible.</span>
                    </p>
                </Cards>



                <Cards icon={Features} title={'Caracteristicas'} >
                    <p>Explora un amplio catálogo de ropa asequible, <span>vende fácilmente</span> subiendo fotos y únete a una <span>comunidad activa</span> de amantes de la moda sostenible.</p>
                </Cards>
                <Cards icon={Adventages} title={'Ventajas'} >
                    <p>Mayor <span>variedad de ropa</span>, interfaz intuitiva, sin comisiones por venta, <span>contacto directo entre compradores y vendedores</span>, y foco en moda sostenible.</p>
                </Cards>
            </div>
        </div>
    );
}
