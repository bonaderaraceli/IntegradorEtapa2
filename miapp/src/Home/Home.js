import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagenUno from '../imagenes/luchaaccesorios';
import imagenDos from '../imagenes/luchaaccesorios2.jpg';
import '../App.css';

const Home = () => {
    return (
        <>
            
            <Carousel data-bs-theme="light">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagenUno}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Local en Tandil</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagenDos}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h2>Te esperamos</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Home;
