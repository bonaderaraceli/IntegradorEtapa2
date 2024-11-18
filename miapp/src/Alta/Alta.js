import React from 'react';

const Alta = () => {
  return (
    <main>
      <h1>Agregar Producto</h1>
      <form id="ProductoForm">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" required />

        <label htmlFor="precio">Precio:</label>
        <input type="text" id="precio" required />

        <label htmlFor="stock">Stock:</label>
        <input type="text" id="stock" required />

        <label htmlFor="marca">Marca:</label>
        <input type="text" id="marca" required />

        <label htmlFor="categoria">Categoría:</label>
        <input type="text" id="categoria" required />

        <label htmlFor="descripcionCorta">Descripcion corta:</label>
        <input type="text" id="descripcionCorta" required />

        <label htmlFor="descripcionLarga">Descripción Larga:</label>
        <input type="text" id="descripcionLarga" required />

        <label htmlFor="envio">Envío sin cargo:</label>
        <input type="text" id="envio" required />

        <label htmlFor="edadDesde">Edad desde:</label>
        <input type="text" id="edadDesde" required />

        <label htmlFor="edadHasta">Edad hasta:</label>
        <input type="text" id="edadHasta" required />

        <label htmlFor="foto">Foto:</label>
        <input type="text" id="foto" required />
        <div>
          <button type="submit" className="boton">Agregar</button>
        </div>
      </form>
    </main>
  );
}

export default Alta;
