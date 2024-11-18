import logo from '../imagenes/logo';
import '../App.css';
import {Link} from 'react-router-dom';


const Navegacion = () => {
    return (
        <>
          <header>
          <div className="logo">
          <Link to= "/">
          <img src={logo} alt="logo" />
          </Link>
          </div>
             <nav>
                 <ul>
                  <li><Link to= "../Ecommerce">Ecommerce</Link></li>
                  <li><Link to= "../Alta">Alta</Link></li>
                  <li><Link to= "../Contacto">Contacto</Link></li>
                  <li><Link to= "../Login">Login</Link></li>
                  <li><Link to= "../Carrito"><i class="bi bi-cart-check-fill">Carrito</i></Link></li>
                 </ul>
             </nav>

</header>
</>
    );
    
}

export default Navegacion;