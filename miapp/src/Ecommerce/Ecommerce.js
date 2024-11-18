import '../App.css';
import img1 from '../imagenes/Argollas Alastor';
import img2 from '../imagenes/Argollas Aurora';
import img3 from '../imagenes/Argollas Elara';
import img4 from '../imagenes/Aros Adeena';
import img5 from '../imagenes/Aros Sansa';
import img6 from '../imagenes/Aros Rhapsodic';
import img7 from '../imagenes/Argollas Star';
import img8 from '../imagenes/Aros Shine Bar';


const Ecommerce = () => {    
    const carrito = (nombre, precio, descripcion, img) => {
        alert("Producto agregado al carrito");
    
        const producto = {
            nombre: nombre,
            precio: precio,
            descripcion: descripcion,
            img: img
        };
        
        
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carrito.push(producto);
    
        
        localStorage.setItem('carrito', JSON.stringify(carrito));
    };    

return (
<>
    <h1>PRODUCTOS</h1>
<main ClassName="seccionCards">
    <section className="fila">
    <div className="card">
        <img src={img1} alt="producto1"/>
        <h2>Argollas Alastor</h2>
        <p className="precio">$9500</p>
        <p className="descripcion">Argollas de plata con strass y colgante</p>
    <section className="button">
        <button onClick={() => carrito('Argollas Alastor', 9500, 'Argollas de plata con strass y colgante', img1)} className="btn button-margin btn-reset">COMPRAR</button>
    </section>
    </div>
    <div className="card">
        <img src={img2} alt="producto"/>
        <h2>Argollas Aurora</h2>
        <p className="precio">$11900</p>
        <p className="descripcion">Argollas de plata con cierre click y colgante de strass</p>
    <section className="button">
        <button onClick={() => carrito('Argollas Aurora', 11900, 'Argollas de plata con cierre click y colgante de strass', img2)} className="btn button-margin btn-reset">COMPRAR</button>
    </section>
    </div>
    <div className="card">
        <img src={img3} alt="producto"/>
        <h2>Argollas Elara</h2>
        <p className="precio">$8900</p>
        <p className="descripcion">Argollas en plata de strass con cierre click y colgante de strass</p>
    <section className="button">
        <button onClick={() => carrito('Argollas Elara', 8900, 'Argollas en plata de strass con cierre', img3)} className="btn button-margin btn-reset">COMPRAR</button>
    </section>
    </div>
    <div className="card">
        <img src={img4} alt="producto"/>
        <h2>Argollas Adeena</h2>
        <p className="precio">$10500</p>
        <p className="descripcion">Aros en plata de strass con cierre click y colgante de cubic en gota</p>
    <section className="button">
        <button onClick={() => carrito('Aros Adeena', 10500, 'Aros en plata de strass con cierre click y colgante de cubic en gota', img4)} className="btn button-margin btn-reset">COMPRAR</button>
    </section>
    </div>
    <div className="card">
        <img src={img5} alt="producto"/>
        <h2>Aros Sansa</h2>
        <p className="precio">$12900</p>
        <p className="descripcion">Aros en plata con cierre click y colgante de cubic</p>
    <section className="button">
        <button onClick={() => carrito('Aros Sansa', 12900, 'Aros en plata con cierre click y colgante de cubic', img5)} className="btn button-margin btn-reset">COMPRAR</button>
    </section>
    </div>
    <div className="card">
        <img src={img6} alt="producto"/>
        <h2>Aros Rhapsodic</h2>
        <p className="precio">$15500</p>
        <p className="descripcion">Aros de plata con cierre click y colgante de cubics</p>
    <section className="button">
        <button onClick={() => carrito('Aros Rhapsodic', 15500, 'Aros de plata con cierre click y colgante de cubics', img6)} className="btn button-margin btn-reset">COMPRAR</button>
    </section>
    </div>
    <div className="card">
        <img src={img7} alt="producto5"/>
        <h2>Argollas Star</h2>
        <p className="precio">$10900</p>
        <p className="descripcion">Aros de plata con cierre click y estrella con strass</p>
    <section className="button">
        <button onClick={() => carrito('Argollas Star', 10900, 'Aros de plata con cierre click y estrella con strass', img7)} className="btn button-margin btn-reset">COMPRAR</button>
    </section>
    </div>
    <div className="card">
        <img src={img8} alt="producto6"/>
        <h2>Aros Shine Bar</h2>
        <p className="precio">$9900</p>
        <p className="descripcion">Aros cuadrados de plata con cierre click y detalles con strass</p>
    <section className="button">
        <button onClick={() => carrito('Aros Shine Bar', 9900, 'Aros cuadrados de plata con cierre click y detalles con strass', img8)} className="btn button-margin btn-reset">COMPRAR</button>
    </section>
    </div>
    </section>
</main>
</>
);
}

export default Ecommerce;
