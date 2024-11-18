import instagram from '../imagenes/ig.png';
import facebook from '../imagenes/fb.png';
import tiktok from '../imagenes/Tiktok.png';
import '../App.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <br />2494 303030<br />
                <br />lucha.acces@gmail.com<br />
                <br />San Lorenzo 1350 | Piso 3 | Dpto 28<br />
            </div>
            <h3>Redes Sociales</h3>
            <div className="redes">
                <img src={instagram} alt="Instagram" />
                <img src={facebook} alt="Facebook" />
                <img src={tiktok} alt="TikTok" />
            </div>
        </footer>
    );
}

export default Footer;
