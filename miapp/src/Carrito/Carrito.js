import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

const Carrito = () => {
    const [carrito, setCarrito] = useState([]);
    const [user, setUser] = useState();
    const [cantidad, setCantidad] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        const productos = JSON.parse(localStorage.getItem('carrito')) || [];
        const cantidadProductos = productos.length;

        if (productos.length === 0) {
            alert('No hay productos en el carrito');
            navigate('/ecommerce');
        } else {
            setUser(window.sessionStorage.getItem('user'));
            setCarrito(productos);
            setCantidad(cantidadProductos);
        }
    }, [navigate]);

    const eliminarDatos = () => {
        localStorage.removeItem('carrito');
        navigate('/ecommerce');
    };

    const comprarProductos = () => {
        alert('¡Gracias por tu compra!');
        localStorage.removeItem('carrito');
        navigate('/ecommerce');
    };

    return (
        <div className="container text-center">
                <h1>Carrito de {user}</h1>
                {carrito.map((producto, index) => (
            <div className="card">
                <img src={producto.img}  alt={producto.nombre} />
            <div className="card-body">
                <h2>{producto.nombre}</h2>
                <p className="descripcion">{producto.descripcion}</p>
                <p className="precio">Precio: ${producto.precio}</p>
                
            </div>
            
        </div>
        ))}
            <p className="descripcion">Cantidad total de productos: {cantidad}</p>
            <div className='d-flex mt-5 justify-content-around'>   
            <button onClick={comprarProductos} className="btn w-25 button-margin btn-reset">Comprar</button>
            <button onClick={eliminarDatos} className="btn w-25 button-margin btn-reset">Eliminar Carrito</button>
            </div>
          
        </div>
    
        
    );
};

export default Carrito;
