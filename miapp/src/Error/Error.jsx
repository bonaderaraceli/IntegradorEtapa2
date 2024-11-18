import error from '../imagenes/error.jpg';

const Error = () => {
    return (
        <div className="container mt-5 text-center mb-5">
            <h1>Error</h1>
            <div className="d-flex justify-content-center">
                <img src={error} alt="error" style={{ width: '300px', height: 'auto' }} />
            </div>
        </div>    
    );
}

export default Error;
