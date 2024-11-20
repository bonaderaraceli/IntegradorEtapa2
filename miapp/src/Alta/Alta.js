import React, { useState } from 'react';
import './Alta.css';

const ProductoForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    stock: '',
    marca: '',
    categoria: '',
    descripcionCorta: '',
    descripcionLarga: '',
    envio: '',
    edadDesde: '',
    edadHasta: '',
    foto: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
    const { nombre, precio, stock, marca, categoria, descripcionCorta, descripcionLarga, edadDesde, edadHasta } = formData;

    if (nombre.length < 3 || nombre.length > 50) {
      alert('Nombre debe tener entre 3 y 50 caracteres.');
      return;
    }
    if (isNaN(!precio) || precio <= 0) {
      alert('Precio debe ser un número válido mayor que 0.');
      return;
    }
    if (isNaN(!stock) || stock < 0) {
      alert('Stock debe ser un número entero no negativo.');
      return;
    }
    if (marca.length < 3 || marca.length > 100) {
      alert('Marca debe tener entre 3 y 100 caracteres.');
      return;
    }
    if (categoria.length < 3 || categoria.length > 100) {
      alert('Categoría debe tener entre 3 y 100 caracteres.');
      return;
    }
    if (descripcionCorta.length < 10 || descripcionCorta.length > 500) {
      alert('Descripción corta debe tener entre 10 y 500 caracteres.');
      return;
    }
    if (descripcionLarga.length < 10 || descripcionLarga.length > 500) {
      alert('Descripción larga debe tener entre 10 y 500 caracteres.');
      return;
    }
    if (isNaN(!edadDesde) || edadDesde < 1 || edadDesde > 99) {
      alert('Edad desde debe ser un número entre 1 y 99.');
      return;
    }
    if (isNaN(!edadHasta) || edadHasta < 1 || edadHasta > 99) {
      alert('Edad hasta debe ser un número entre 1 y 99.');
      return;
    }

    alert('Formulario enviado correctamente');
   
    setFormData({
      nombre: '',
      precio: '',
      stock: '',
      marca: '',
      categoria: '',
      descripcionCorta: '',
      descripcionLarga: '',
      envio: '',
      edadDesde: '',
      edadHasta: '',
      foto: ''
    });
  };

  return (
    <>
    <h1>Alta</h1>
    <form id="ProductoForm" onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" id="nombre" value={formData.nombre} onChange={handleChange} required />

      <label htmlFor="precio">Precio:</label>
      <input type="number" id="precio" value={formData.precio} onChange={handleChange} required />

      <label htmlFor="stock">Stock:</label>
      <input type="number" id="stock" value={formData.stock} onChange={handleChange} required />

      <label htmlFor="marca">Marca:</label>
      <input type="text" id="marca" value={formData.marca} onChange={handleChange} required />

      <label htmlFor="categoria">Categoría:</label>
      <input type="text" id="categoria" value={formData.categoria} onChange={handleChange} required />

      <label htmlFor="descripcionCorta">Descripción Corta:</label>
      <input type="text" id="descripcionCorta" value={formData.descripcionCorta} onChange={handleChange} required />

      <label htmlFor="descripcionLarga">Descripción Larga:</label>
      <input type="text" id="descripcionLarga" value={formData.descripcionLarga} onChange={handleChange} required />

      <label htmlFor="envio">Envío:</label>
      <input type="text" id="envio" value={formData.envio} onChange={handleChange} required />

      <label htmlFor="edadDesde">Edad Desde:</label>
      <input type="number" id="edadDesde" value={formData.edadDesde} onChange={handleChange} required />

      <label htmlFor="edadHasta">Edad Hasta:</label>
      <input type="number" id="edadHasta" value={formData.edadHasta} onChange={handleChange} required />

      <label htmlFor="foto">Foto:</label>
      <input type="text" id="foto" value={formData.foto} onChange={handleChange} required />

      <button type="submit" className="boton">Agregar</button>
    </form>
    </>
  );
};

export default ProductoForm;

