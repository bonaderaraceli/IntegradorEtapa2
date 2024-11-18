const Contacto = () => {
    const enviarFormulario = (evento) => {
        evento.preventDefault(); 
        alert("Formulario enviado");
        console.log("Formulario enviado");
    };

    return (
        <>
            <main className="contacto">
                <h1>Contacto</h1>
                <form id="ContactoForm" onSubmit={enviarFormulario}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />

                    <label htmlFor="comentarios">Comentarios:</label>
                    <input type="text" id="comentarios" required />
                    
                    <div>
                        <button type="submit" className="boton">Enviar</button>
                    </div>
                </form>
            </main>
        </>
    );
}

export default Contacto;
